import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesSection.css";

const services = [
  {
    title: "منتجات أمان المسابح",
    desc: "نوفر منتجات مبتكرة تضمن حماية الأطفال والكبار، مع الحفاظ على جمالية المسابح وراحة البال.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "النوافير والشلالات",
    desc: "تصنيع النوافير والشلالات بتصاميم ثابتة وحسب الطلب لتضيف أجواء طبيعية وحيوية للمكان.",
    icon: "fas fa-water",
  },
  {
    title: "الاكسسوارات",
    desc: "تصنيع اكسسوارات المسابح ومستلزماتها مع ضمان جودتها العالية لتكمل تجربة السباحة بأناقة.",
    icon: "fas fa-cogs",
  },
  {
    title: "صنع في السعودية",
    desc: "جميع منتجاتنا مصنعة محليًا وفق أعلى معايير الجودة لنفتخر بمنتجات سعودية متميزة.",
    icon: "fas fa-flag",
  },
  {
    title: "الضمانات",
    desc: "نضمن منتجاتنا ونراهن على جودتها، لأن ثقة عملائنا هي رأس مالنا الحقيقي.",
    icon: "fas fa-certificate",
  },
  {
    title: "التصميم والتنفيذ",
    desc: "نقدم خدمات التصميم والتنفيذ بأعلى جودة لنضمن لك مسبحًا أو نافورة متكاملة من الفكرة وحتى التنفيذ.",
    icon: "fas fa-drafting-compass",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionEl) observer.observe(sectionEl);

    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title">خدماتنا</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              نقدم لعملائنا مجموعة متكاملة من الحلول العصرية والآمنة لعالم
              المسابح والنوافير والاكسسوارات
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col
              md={6}
              lg={4}
              className={`mb-4 fade-up ${visible ? "visible" : ""}`}
              key={index}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <i className={`${service.icon} service-icon`}></i>
                </div>
                <h5 className="service-title">{service.title}</h5>
                <p className="service-desc">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
