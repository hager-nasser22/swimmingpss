// ProjectsSlider.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ProjectsSlider.css';

const videos = [
  '/images/projects/video-1.mp4',
  '/images/projects/video-2.mp4',
  '/images/projects/video-3.mp4',
];

const ProjectsSlider = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">أعمالنا</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              مجموعة مختارة من المشاريع المنفذة باحترافية وجودة عالية
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel indicators={true} controls={true} interval={null}>
              {videos.map((src, idx) => (
                <Carousel.Item key={idx}>
                  <div className="carousel-video-wrapper">
                    <video
                      className="d-block w-100 carousel-video"
                      controls
                      playsInline
                      poster="/images/projects/thumbnail.jpeg" // صورة تظهر قبل التشغيل (ممكن تخصصي لكل فيديو صورة خاصة)
                    >
                      <source src={src} type="video/mp4" />
                      متصفحك لا يدعم تشغيل الفيديو.
                    </video>
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
