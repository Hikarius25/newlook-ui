
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
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const API_URL = "https://3e5b-34-74-6-72.ngrok-free.app/swap_hair_visual";
  const DOWNLOAD_API = "https://3e5b-34-74-6-72.ngrok-free.app/swap_hair";

  const handleUpload = async () => {
    if (!faceImage || !hairstyleImage || !hairColorImage) {
      alert("Please select all three images first!");
      return;
    }

    setLoadingUpload(true);
    const formData = new FormData();
    formData.append("faceImage", faceImage);
    formData.append("hairShape", hairstyleImage);
    formData.append("hairColor", hairColorImage);

    try {
      const res = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
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
      setLoadingUpload(false);
    }
  };

  const handleDownload = async () => {
    if (!response) {
      alert("No result available for download!");
      return;
    }

    setLoadingDownload(true);
    const formData = new FormData();
    formData.append("faceImage", faceImage);
    formData.append("hairShape", hairstyleImage);
    formData.append("hairColor", hairColorImage);

    try {
      const res = await axios.post(DOWNLOAD_API, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
        responseType: "blob",
      });
      
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "hairstyle_result.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert(`Download failed! ${error.response?.data?.detail || error.message}`);
    } finally {
      setLoadingDownload(false);
    }
  };

  const handleSetFile = (selectedFile, type) => {
    if (!selectedFile) return;
    if (type === "face_image") setFaceImage(selectedFile);
    else if (type === "hair_shape") setHairstyleImage(selectedFile);
    else if (type === "hair_color") setHairColorImage(selectedFile);
  };

  return (
    <div>
      <Topbar />
      <Container>
        <Row className="function-container">
          <Col md={12} className="function-upload">
            <h2 className="title">UPLOAD YOUR IMAGES</h2>
            <div className="upload-sections">
              <div className="upload-item">
                <h4>Face <br /> Image</h4>
                {faceImage ? (
                  <img src={URL.createObjectURL(faceImage)} alt="Face Preview" className="image-preview" />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "face_image")} accepts="image/*" />
                )}
              </div>
              <div className="upload-item">
                <h4>Hairstyle <br /> Image</h4>
                {hairstyleImage ? (
                  <img src={URL.createObjectURL(hairstyleImage)} alt="Hairstyle Preview" className="image-preview" />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "hair_shape")} accepts="image/*" />
                )}
              </div>
              <div className="upload-item">
                <h4>Hair <br /> Color <br /> Image</h4>
                {hairColorImage ? (
                  <img src={URL.createObjectURL(hairColorImage)} alt="Hair Color Preview" className="image-preview" />
                ) : (
                  <UploadImage setFile={(file) => handleSetFile(file, "hair_color")} accepts="image/*" />
                )}
              </div>
            </div>

            <button className="upload-btn" onClick={handleUpload} disabled={loadingUpload}>
              {loadingUpload ? <Spinner animation="border" size="sm" /> : "Biến hình đê"}
            </button>
            {response && (
              <button className="upload-btn" onClick={handleDownload} disabled={loadingDownload}>
                {loadingDownload ? <Spinner animation="border" size="sm" /> : "Tải xuống kết quả"}
              </button>
            )}
          </Col>

          <Col md={12} className="result-container">
            {response && (
              <div>
                <h4>Result:</h4>
                <img src={response} alt="Generated Result" className="result-image" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
