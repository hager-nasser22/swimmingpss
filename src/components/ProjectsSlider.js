// ProjectsSlider.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ProjectsSlider.css';

const images = [
  '/images/projects/project-1.jpeg',
  '/images/projects/project-2.jpeg',
  // '/images/projects/project-3.jpeg',
  // '/images/projects/project-4.jpeg',
  // '/images/projects/project-5.jpeg',
  '/images/projects/project-6.jpeg',
  '/images/projects/project-7.jpeg',
  '/images/projects/project-8.jpeg',
  '/images/projects/project-9.jpeg',
];

const ProjectsSlider = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">أعمالنا</h2>
            <p className="section-subtitle">
              مجموعة مختارة من المشاريع المنفذة باحترافية وجودة عالية
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel indicators={true} controls={true} interval={4000}>
              {images.map((src, idx) => (
                <Carousel.Item key={idx}>
                  <div className="carousel-image-wrapper">
                    <img
                      src={src}
                      className="d-block w-100 carousel-image"
                      alt={`project-${idx}`}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSlider;
