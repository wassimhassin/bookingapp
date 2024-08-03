import { useState } from "react";
import "./Registre.css";
import { Link, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Registre = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");


  const handelClick = async (e) => {
    e.preventDefault();
    
    let newUser;
    
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dhb7jpopr/image/upload",
          data
        );
        
        const { public_id, url } = uploadRes.data;
        newUser = {
          username,
          password,
          email,
          phone,
          country,
          city,
          img: url,
          public_id,
        };
      } catch (err) {
        console.log(err);
        return;
      }
    } else {
      newUser = {
        username,
        password,
        email,
        phone,
        country,
        city,
      };
    }
    
    try {
      const res = await axios.post("http://localhost:8000/api/auth/registre", newUser);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="regitre">
      <header>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <h2>Booking</h2>
        </Link>
      </header>
      <ToastContainer />
      <h1 className="rCreate">Create Your Account</h1>
      <form onSubmit={handelClick} className="registre">
        <div className="imgText">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="rimg"
            />
          </div>
          <div className="formInput">
            <label htmlFor="file">
              image : <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="ritem">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="inpt"
            autoComplete="off"
            required
          />
        </div>

        <div className="ritem">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="inpt"
            required
          />
        </div>
        <div className="ritem">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="inpt"
            required
          />
        </div>
        <div className="ritem">
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="number"
            placeholder="Phone Number"
            className="inpt"
            required
          />
        </div>
        <div className="ritem">
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            placeholder="Country"
            className="inpt"
            required
          />
        </div>

        <div className="ritem">
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            placeholder="City"
            className="inpt"
            required
          />
        </div>

        <button className="rbtn">Sign Up</button>
      </form>
    </div>
  );
};
export default Registre;
