import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Registre from './pages/register/Registre';
import './App.css';
import Chart from './pages/charts/chart';
import 'react-toastify/dist/ReactToastify.css';
import PdfViewer from './pages/login/Login';
import EncryptedRoute from './EncryptedRoute.js';
import { Base64 } from 'js-base64';
import './i18n';
import Flight from './pages/flight/flight.jsx';
import "react-datepicker/dist/react-datepicker.css";

const encodePath = (path) => Base64.encode(path);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<PdfViewer pdfUrl="./pdf.pdf" />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/:encodedPath" element={<EncryptedRoute />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
