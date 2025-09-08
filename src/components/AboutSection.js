import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target); // أول مرة بس
        }
      },
      { threshold: 0.2 } // يبدأ لما 20% من السيكشن يبان
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${animate ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-5">
              <h2 className="section-title">من نحن</h2>
              <div className="title-underline"></div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h3 className="about-title mb-4">
                مؤسسة أعمال المسبح التجارية
              </h3>
              <p className="about-text mb-4">
                نحن مؤسسة رائدة في مجال تصميم وتنفيذ شلالات ونوافير المياه المبتكرة، 
                مع أكثر من عقد من الخبرة في توريد منتجات السلامة المتطورة للمسابح والمنشآت المائية.
              </p>
              <p className="about-text mb-4">
                نلتزم بتقديم حلول مائية مبتكرة وعالية الجودة تلبي احتياجات عملائنا، 
                مع التركيز على الأمان والجمال والاستدامة في كل مشروع نقوم به.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>خبرة أكثر من 10 سنوات في المجال</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>تصميمات مبتكرة ومخصصة</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>منتجات عالية الجودة</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>خدمة عملاء متميزة</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image">
              <img 
                src="https://cdn.salla.sa/KrDbg/02733dd4-cc98-482b-96b5-50b973527c82-1000x706.875-1J5bOQIpuxkRcrtBWzw2EtklogZ5PNguSYgMK6bA.jpg" 
                alt="عن المؤسسة" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
