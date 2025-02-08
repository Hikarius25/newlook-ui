// import { React, useState, useEffect } from 'react';
// import '../styles/Function.css';
// import axios from 'axios';
// import { useNavigate, useParams } from "react-router-dom";
// import Topbar from '../components/Topbar/Topbar';
// import Footer from '../components/Footer/Footer';
// import UploadImage from '../components/UploadImage/UploadImage';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import { act } from 'react';



// export default function Function() {

//   return (
//     <div>
//         <Topbar/>
//         <div className="function-upload">
//             <UploadImage/>
//         </div>
//         <Footer/>
//     </div>
//   );
// }

// import { useState } from "react";
// import "../styles/Function.css";
// import Topbar from "../components/Topbar/Topbar";
// import Footer from "../components/Footer/Footer";
// import UploadImage from "../components/UploadImage/UploadImage";
// import axios from "axios";
// import { Spinner } from "react-bootstrap";

// export default function Function() {
//   const [faceImage, setFaceImage] = useState(null);
//   const [hairstyleImage, setHairstyleImage] = useState(null);
//   const [hairColorImage, setHairColorImage] = useState(null);

//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const API_URL = "https://api-simulator-035d.onrender.com/process/";

//   const handleUpload = async () => {
//     if (!faceImage || !hairstyleImage || !hairColorImage) {
//       alert("Please select all three images first!");
//       return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("face_image", faceImage);
//     formData.append("hairstyle_image", hairstyleImage);
//     formData.append("hair_color_image", hairColorImage);

//     try {
//       const res = await axios.post(API_URL, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setResponse(res.data);
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert("Upload failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSetFile = (selectedFile, type) => {
//     if (!selectedFile) return;
//     const previewURL = URL.createObjectURL(selectedFile);

//     switch (type) {
//       case "face":
//         setFaceImage(selectedFile);
//         break;
//       case "hairstyle":
//         setHairstyleImage(selectedFile);
//         break;
//       case "hairColor":
//         setHairColorImage(selectedFile);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div>
//       <Topbar />
//       <div className="function-upload">
//         <h2 className="title">Upload Your Images</h2>

//         <div className="upload-sections">
//           <div className="upload-item">
//             <h4>Face Image</h4>
//             {faceImage ? (
//               <img src={URL.createObjectURL(faceImage)} alt="Face Preview" className="image-preview" />
//             ) : (
//               <UploadImage setFile={(file) => handleSetFile(file, "face")} accepts="image/*" />
//             )}
//           </div>

//           <div className="upload-item">
//             <h4>Hairstyle Image</h4>
//             {hairstyleImage ? (
//               <img src={URL.createObjectURL(hairstyleImage)} alt="Hairstyle Preview" className="image-preview" />
//             ) : (
//               <UploadImage setFile={(file) => handleSetFile(file, "hairstyle")} accepts="image/*" />
//             )}
//           </div>

//           <div className="upload-item">
//             <h4>Hair Color Image</h4>
//             {hairColorImage ? (
//               <img src={URL.createObjectURL(hairColorImage)} alt="Hair Color Preview" className="image-preview" />
//             ) : (
//               <UploadImage setFile={(file) => handleSetFile(file, "hairColor")} accepts="image/*" />
//             )}
//           </div>
//         </div>

//         <button className="upload-btn" onClick={handleUpload} disabled={loading}>
//           {loading ? <Spinner animation="border" size="sm" /> : "Upload to API"}
//         </button>

//         {response && (
//           <div className="response-box">
//             <h4>Response from API:</h4>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import "../styles/Function.css";
import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function Function() {
  const [faceImage, setFaceImage] = useState(null);
  const [hairstyleImage, setHairstyleImage] = useState(null);
  const [hairColorImage, setHairColorImage] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://api-simulator-035d.onrender.com/process/";

  const handleUpload = async () => {
    if (!faceImage || !hairstyleImage || !hairColorImage) {
      alert("Please select all three images first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("face_image", faceImage);
    formData.append("hairstyle_image", hairstyleImage);
    formData.append("hair_color_image", hairColorImage);

    try {
      const res = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      });

      setResponse(res.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Upload failed! ${error.response?.data?.detail || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSetFile = (selectedFile, type) => {
    if (!selectedFile) return;

    switch (type) {
      case "face":
        setFaceImage(selectedFile);
        break;
      case "hairstyle":
        setHairstyleImage(selectedFile);
        break;
      case "hairColor":
        setHairColorImage(selectedFile);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Topbar />
      <div className="function-upload">
        <h2 className="title">Upload Your Images</h2>
        <div className="upload-sections">
          {["face", "hairstyle", "hairColor"].map((type, index) => (
            <div className="upload-item" key={index}>
              <h4>{type.charAt(0).toUpperCase() + type.slice(1)} Image</h4>
              {eval(`${type}Image`) ? (
                <img
                  src={URL.createObjectURL(eval(`${type}Image`))}
                  alt={`${type} Preview`}
                  className="image-preview"
                />
              ) : (
                <UploadImage
                  setFile={(file) => handleSetFile(file, type)}
                  accepts="image/*"
                />
              )}
            </div>
          ))}
        </div>

        <button className="upload-btn" onClick={handleUpload} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Upload to API"}
        </button>

        {response && (
          <div className="response-box">
            <h4>Response from API:</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
