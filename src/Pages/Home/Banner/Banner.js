import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerphoto1 from '../../../images/banner/bannerb1.jpg';
import bannerphoto2 from '../../../images/banner/bannerb2.jpg';
import bannerphoto3 from '../../../images/banner/bannerb3.jpg';
import './Banner.css';

const Banner = () => {
    return (
       
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 H"
          src={bannerphoto1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 H"
          src={bannerphoto2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 H"
          src={bannerphoto3}
          alt="Third slide"
        />

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

export default Banner;