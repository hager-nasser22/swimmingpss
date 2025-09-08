import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ProjectsSlider.css';

const images = [
  'https://cdn.salla.sa/KrDbg/a36e2e9b-5fc5-4dc8-be41-8c449e21fc76-1000x515.01597444089-35mmoGugULLfAQt8nS0mNq2XSNJbwS1VHZoF02NO.jpg',
  'https://cdn.salla.sa/KrDbg/d524e829-a60b-4715-9d75-0bedf1d624c1-1000x515.01597444089-gwBZ303CSQOWKMIhlY0I7KlD7pWgyTpYChUcDTxj.jpg',
  'https://cdn.salla.sa/KrDbg/8d65dec1-fb13-4d2f-bfb9-b097cec8bb7a-1000x516.33568225496-GXJTlvDaTtbbM7Bb8HjP5agC9s01N4gkbaGsCM2Z.jpg',
  'https://cdn.salla.sa/KrDbg/921e07ac-865c-47f8-9556-e006027cf46e-1000x515.01597444089-O4Sppg9pTb8N4Zq0TFP6yMlKzndmKOef4CKOdwLl.jpg',
  'https://cdn.salla.sa/KrDbg/c40929cd-e20d-4d52-86b2-9a6793dfbe41-1000x515.01597444089-T5JO8heoCTU86VMnvbEKiUH5Hxtdcb7FnKPOdiWA.jpg',
  'https://cdn.salla.sa/KrDbg/f3205595-b341-42cf-b079-10a34944e786-1000x515.01597444089-zK0ecqFg0QLLJ1uMCZ30AXRHZmGvYHoyfPcxZHfc.jpg',
];

const ProjectsSlider = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const currentSection = sectionRef.current; // ✅ نسخة محلية

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);


  return (
    <section
      id="projects"
      className={`projects-section fade-up ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,42.7C672,53,768,75,864,90.7C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32V0H0Z"/>
        </svg>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-4">
              <h2 className="section-title text-gradient">أعمالنا</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle text-light opacity-75">
                مجموعة مختارة من المشاريع المنفذة باحترافية
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel indicators={true} controls={true} interval={4000} fade>
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

      <div className="wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,80C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96V120H0Z"/>
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSlider;
