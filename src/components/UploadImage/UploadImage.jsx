// import "./UploadImage.css";

// export default function UploadImage({ setFiles, accepts }) {
//   const handleDrag = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     if (!e.dataTransfer?.files) return;

//     // Extract the first file only
//     const file = e.dataTransfer.files[0];
//     if (file && accepts.includes(file.type)) {
//       setFiles([file]); // Pass only the first file
//     }
//   };

//   const handleFiles = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0]; // Get the first file
//     if (file) {
//       setFiles([file]); // Pass only the first file
//     }
//   };

//   return (
//     <div className="dragdrop" onDragOver={handleDrag} onDrop={handleDrop}>
//       <i className="fa-solid fa-cloud-arrow-down"></i>
//       <h4>Drag and drop your file.</h4>
//       <label htmlFor="upload-files">
//         <input
//           accept={accepts}
//           multiple={false} // Restrict multiple file selection
//           onChange={handleFiles}
//           type="file"
//           id="upload-files"
//         />
//         <div className="upload-btn">Upload Image</div>
//       </label>
//     </div>
//   );
// }

import "./UploadImage.css";

export default function UploadImage({ setFile, accepts }) {
  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!e.dataTransfer?.files) return;

    const file = e.dataTransfer.files[0];
    if (file && accepts.includes(file.type)) {
      setFile(file);
    }
  };

  const handleFiles = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="dragdrop" onDragOver={handleDrag} onDrop={handleDrop}>
      <i className="fa-solid fa-cloud-arrow-down"></i>
      <h4>Drag and drop your file.</h4>
      <label htmlFor="upload-files">
        <input accept={accepts} multiple={false} onChange={handleFiles} type="file" id="upload-files" hidden />
        <div className="upload-btn">Upload Image</div>
      </label>
    </div>
  );
}
  