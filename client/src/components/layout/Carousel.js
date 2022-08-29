import Carousel from 'react-bootstrap/Carousel';
import { Carousel1, Carousel2, Carousel3 } from '../../static';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={6000}>
        <img className='d-block w-100' src={Carousel1} alt='First slide' />
        <Carousel.Caption>
          <h3>Buy a House</h3>
          <p>!!! Property Finder makes it easier !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img className='d-block w-100' src={Carousel2} alt='Second slide' />
        <Carousel.Caption>
          <h3>Buy a Land</h3>
          <p>!!! Property Finder makes it easier !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img className='d-block w-100' src={Carousel3} alt='Third slide' />
        <Carousel.Caption>
          <h3>Rent a House</h3>
          <p>!!! Property Finder makes it easier !!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
