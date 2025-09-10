import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutSection.css";

const AboutSection = () => {
  const aboutRef = useRef(null);
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

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${animate ? "animate" : ""}`}
      ref={aboutRef}
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
            <div className="about-content text-start">
              <h3 className="about-title mb-4">
                مؤسسة أعمال المسبح التجارية
              </h3>
              <p className="about-text">
                <strong>أعمال المسبح التجارية</strong>، مؤسسة سعودية تأسست عام
                2018، متخصصة في تصنيع المسابح ومنتجات أمان المسبح والنوافير
                والشلالات الشفافة المصنوعة من مادة الأكريليك فايبر الشفاف.
              </p>
              <p className="about-text">
                تميزنا ينبع من كوننا{" "}
                <strong>مصنّعين ومبتكرين</strong>، لا موزعين أو وكلاء، فجميع
                منتجاتنا هي من ابتكارنا وتصنيعنا بالكامل.
              </p>
              <p className="about-text">
                لقد حصلنا على <strong>براءات اختراع</strong> تثبت تفردنا وتؤكد
                التزامنا بالجودة والتميّز، ونخدم عملاءنا في جميع مدن المملكة
                العربية السعودية ودول الخليج العربي.
              </p>
              <p className="about-text">
                نحن نؤمن أن <strong>الابتكار هو أساس الصناعة</strong>، وأن من
                يبتكر يبدع ويطور باستمرار. نعمل بشغف لنمنح عملاءنا حلولاً عملية
                ومبتكرة تعكس أعلى معايير الأمان والجمال في عالم المسابح
                والمسطحات المائية.
              </p>
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
