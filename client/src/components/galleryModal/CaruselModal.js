import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const CaruselModal = ({ photosArr, setGallery }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouserItems = photosArr.map((photo, key) => {
    return (
      <Carousel.Item key={key}>
        <img src={`gallery/${photo}`} alt="img"  />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    );
  });

  return (
    <div className="gallery-modal">
      <div className="gallery-content">
        <div className="gallery-header">
          <span onClick={() => setGallery(false)}>&times;</span>
        </div>
        <div className="slides">
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
              { carouserItems }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CaruselModal;
