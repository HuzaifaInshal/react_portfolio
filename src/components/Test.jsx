import React, { useState } from 'react';
import image from "./ytmusic.png"

const CardComponent = () => {
  const [rotation, setRotation] = useState({ offsetX: 0, offsetY: 0 });

  const rotate = (e) => {
    const cardItem = e.currentTarget.querySelector(".card-item");
    const force = 5;
    const offsetY = -(e.nativeEvent.offsetY - cardItem.offsetHeight / 2) / force;
    const offsetX = (e.nativeEvent.offsetX - cardItem.offsetWidth / 2) / force;
    setRotation({ offsetX, offsetY });
  };

  const clearRotate = (e) => {
    if (e.target.classList.contains("card")) {
      const cardItem = e.currentTarget.querySelector(".card-item");
      setRotation({ offsetX: 0, offsetY: 0 });
    }
  };

  return (
    <div>
      <div className="card"  onMouseMove={rotate} onMouseLeave={clearRotate}>
        <div className="card-item" style={{ transform: `rotateX(${rotation.offsetY}deg) rotateY(${rotation.offsetX}deg)` }}>
            <img src={image} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
