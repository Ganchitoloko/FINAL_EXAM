import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
function Home() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  const fetchDog = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setGallery([...gallery, data.message]);  
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Dog Generator</h1>
      <button onClick={fetchDog} disabled={loading}>
        {loading ? "Loading..." : "Fetch Dog"}
      </button>

      <button onClick={() => navigate("/gallery", { state: { gallery } })} style={{ marginLeft: "10px" }}>
        Go to Gallery
      </button>

      <div style={{ marginTop: "20px" }}>
        {gallery.length === 0 ? (
          <p>No images yet. Click 'Fetch Dog' to get one!</p>
        ) : (
          gallery.map((img, index) => (
            <img key={index} src={img} alt="Dog" style={{ width: "150px", margin: "5px" }} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;

