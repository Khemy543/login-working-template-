import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Slideview extends Component {
  render(){
    return(
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/Image.jpg")}
      alt="First slide"
      style={{ height:"520px"}}
     
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/rawpixel-196509-unsplash.jpg")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/Image2.jpg")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/taduuda-72915-unsplash.jpg")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/chuttersnap-598266-unsplash.jpg")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
  }
}


export default Slideview;