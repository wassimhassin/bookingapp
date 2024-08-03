import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Base64 } from 'js-base64';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Registre from './pages/register/Registre';
import Chart from './pages/charts/chart';
import PdfViewer from './pages/login/Login';
import Test from './pages/test';

const decodePath = (encodedPath) => Base64.decode(encodedPath);

const routes = {
  '/': Home,
  'hotels': List,
  'hotels/:id': Hotel,
  'login': (props) => <PdfViewer pdfUrl="./pdf.pdf" {...props} />,
  'registre': Registre,
  'chart': Chart,
  'test': Test,
};

const EncryptedRoute = () => {
  const { encodedPath } = useParams();
  const navigate = useNavigate();

  try {
    const decodedPath = decodePath(encodedPath);
    const Component = routes[decodedPath] || routes['/']; // Default to Home if path not found
    return <Component />;
  } catch (error) {
    navigate('/');
    return null;
  }
};

export default EncryptedRoute;
