import Carousel from 'react-bootstrap/Carousel';
import { Carousel1, Carousel2, Carousel3 } from '../../static';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={Carousel1} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={Carousel2} alt='Second slide' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={Carousel3} alt='Third slide' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
