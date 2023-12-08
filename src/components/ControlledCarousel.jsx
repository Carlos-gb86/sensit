import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from './CarouselImg.jsx';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const { imageUrls } = props; // Destructure imageUrls from props

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imageUrls.map((url, idx) => (
        <Carousel.Item key={idx}>
          <CarouselImg imageUrl={url} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
