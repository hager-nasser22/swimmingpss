import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesSection.css";

const services = [
  {
    title: "تصميم شلالات المياه",
    desc: "نبتكر شلالات بتصاميم عصرية تضيف لمسة فنية وحيوية للمكان وتعكس الفخامة.",
    icon: "fas fa-water",
  },
  {
    title: "نوافير المياه التفاعلية",
    desc: "نوافير حديثة تفاعلية تضفي أجواء مرحة ومبهجة وتناسب المساحات العامة والخاصة.",
    icon: "fas fa-tint",
  },
  {
    title: "منتجات سلامة المسابح",
    desc: "حلول مبتكرة لحماية الأطفال والكبار، تضمن أقصى درجات الأمان مع الحفاظ على الجمالية.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "أنظمة التصفية المتطورة",
    desc: "أنظمة حديثة لتنقية المياه والمحافظة على نظافة المسابح بجودة وكفاءة عالية.",
    icon: "fas fa-filter",
  },
  {
    title: "أجهزة الإنذار والمراقبة",
    desc: "تقنيات ذكية للإنذار المبكر والمراقبة المستمرة لزيادة مستويات الأمان.",
    icon: "fas fa-bell",
  },
  {
    title: "استشارات هندسية متخصصة",
    desc: "فريق هندسي يقدم حلولًا عملية مدروسة تناسب احتياجات المشاريع بمختلف أحجامها.",
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
              المسابح والمسطحات المائية
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
