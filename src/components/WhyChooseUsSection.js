import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyChooseUsSection.css";

const WhyChooseUsSection = () => {
  const chooseRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (chooseRef.current) observer.observe(chooseRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      className={`choose-section ${animate ? "animate" : ""}`}
      ref={chooseRef}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-5">
              <h2 className="section-title">لماذا تختارنا؟</h2>
              <div className="title-underline"></div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-card">
              <i className="fas fa-medal icon"></i>
              <h5>براءات اختراع مسجلة</h5>
              <p>تفردنا مثبت رسمياً في ابتكاراتنا.</p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-card">
              <i className="fas fa-lightbulb icon"></i>
              <h5>منتجات مبتكرة</h5>
              <p>تصنيع من الأكريليك فايبر الشفاف.</p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-card">
              <i className="fas fa-globe icon"></i>
              <h5>انتشار واسع</h5>
              <p>نخدم المملكة ودول الخليج العربي.</p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-card">
              <i className="fas fa-shield-alt icon"></i>
              <h5>حلول آمنة</h5>
              <p>أعلى معايير الأمان والجمال.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
