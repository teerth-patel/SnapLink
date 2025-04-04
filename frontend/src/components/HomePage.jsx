import React, { useState } from "react";
import FileUpload from "react-material-file-upload";
import { Button, Box, Typography } from "@mui/material";

const HomePage = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select a file!");
      return;
    }

    let formData = new FormData();
    formData.append("file", files[0]); // Sending only 1 file

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
    
      if (data.success) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Upload Your File
      </Typography>
      <FileUpload value={files} onChange={setFiles} multiFile={false} />
      <Button
        onClick={handleUpload}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        Upload
      </Button>
    </Box>
  );
};

export default HomePage;
