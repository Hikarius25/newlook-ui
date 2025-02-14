import { useState } from "react";
import "../styles/Function.css";
import Topbar from "../components/Topbar/Topbar";
  import Footer from "../components/Footer/Footer";
import UploadImage from "../components/UploadImage/UploadImage";
import axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";

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
    formData.append("face", faceImage);
    formData.append("shape", hairstyleImage);
    formData.append("color", hairColorImage);

    try {
      const res = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
        responseType: "blob", 
      });
      
      const imageBlob = await res.data;
      const imageUrl = URL.createObjectURL(imageBlob);
      setResponse(imageUrl);
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Upload failed! ${error.response?.data?.detail || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSetFile = (selectedFile, type) => {
    if (!selectedFile) return;

    if (type === "face") setFaceImage(selectedFile);
    else if (type === "hairstyle") setHairstyleImage(selectedFile);
    else if (type === "hairColor") setHairColorImage(selectedFile);
  };

  return (
    <div>
      <Topbar />
      <Container>
        <Row>
          <Col md={6} className="function-upload">
            <h2 className="title">Upload Your Images</h2>
            <div className="upload-sections">
              <div className="upload-item">
                <h4>Face Image</h4>
                {faceImage ? (
                  <img
                    src={URL.createObjectURL(faceImage)}
                    alt="Face Preview"
                    className="image-preview"
                  />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "face")} accepts="image/*" />
                )}
              </div>
              <div className="upload-item">
                <h4>Hairstyle Image</h4>
                {hairstyleImage ? (
                  <img
                    src={URL.createObjectURL(hairstyleImage)}
                    alt="Hairstyle Preview"
                    className="image-preview"
                  />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "hairstyle")} accepts="image/*" />
                )}
              </div>
              <div className="upload-item">
                <h4>Hair Color Image</h4>
                {hairColorImage ? (
                  <img
                    src={URL.createObjectURL(hairColorImage)}
                    alt="Hair Color Preview"
                    className="image-preview"
                  />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "hairColor")} accepts="image/*" />
                )}
              </div>
            </div>

            <button className="upload-btn" onClick={handleUpload} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Upload to API"}
            </button>
          </Col>
          <Col md={6} className="response-box">
            {response && (
              <div>
                <h4>Result:</h4>
                <img
                  src={response}
                  alt="Generated Result"
                  className="result-image"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
