import React from "react";
import { useLocation } from "react-router-dom";

function Gallery() {
  const location = useLocation();
  const gallery = location.state?.gallery || [];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dog Gallery</h1>
      {gallery.length === 0 ? (
        <p>No images yet. Go to Home and fetch some dogs!</p>
      ) : (
        gallery.map((img, index) => <img key={index} src={img} alt="Dog" style={{ width: "150px", margin: "5px" }} />)
      )}
    </div>
  );
}

export default Gallery;
