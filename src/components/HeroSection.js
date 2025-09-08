import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-start">
              <div className="hero-content">
                {/* <div className="logo-container mb-4">
                  <img 
                    src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/KrDbg/ffheuWHl7tCOm2YOFDI16cMUVY3mrZ6kroCi3StA.png" 
                    alt="مؤسسة أعمال المسبح التجارية" 
                    className="company-logo"
                  />
                </div> */}
                <h1 className="hero-title mb-4">
                  مؤسسة أعمال المسبح التجارية
                </h1>
                <p className="hero-subtitle mb-4">
                  متخصصون في تصميم وتنفيذ شلالات ونوافير المياه المبتكرة، 
                  بالإضافة إلى توريد منتجات السلامة المتطورة للمسابح والمنشآت المائية
                </p>
                <div className="hero-buttons">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="me-3"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    تواصل معنا
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                  >
                    منتجاتنا
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image">
                <img 
                  src="https://cdn.salla.sa/KrDbg/cde56d6f-2a21-4279-943e-4e2eb5293743-1000x515.01597444089-I4R03yKxD6zd3BzCKGsj5tSLizbU5yS6ZTt3a7qR.jpg" 
                  alt="شلالات ونوافير المياه" 
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
