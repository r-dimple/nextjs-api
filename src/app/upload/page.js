"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setImageUrl(result.url);
      alert("Image uploaded successfully");
    } else {
      alert("Failed to upload image");
    }
  };

  return (
    <main>
      <h1>Upload an Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Uploaded Image Preview:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "400px" }} />
        </div>
      )}
    </main>
  );
}
