import React from "react";

function DogImage({ imageUrl }) {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random Dog" style={{ width: "300px", height: "auto" }} />}
    </div>
  );
}

export default DogImage;
