import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StatsSection.css';

const Stat = ({ label, to, suffix, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return; // ما يبدأش العد إلا لما السيكشن يظهر

    let frame = 0;
    const duration = 1200;
    const steps = 60;
    const inc = to / steps;
    const id = setInterval(() => {
      frame += 1;
      setValue((v) => {
        const next = v + inc;
        return next >= to ? to : next;
      });
      if (frame >= steps) clearInterval(id);
    }, duration / steps);

    return () => clearInterval(id);
  }, [to, start]);

  return (
    <div className="stat">
      <div className="stat-value">{Math.round(value)}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const element = sectionRef.current; // نخزن الريف في متغير

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
        observer.unobserve(entry.target); // أول مرة بس
      }
    },
    { threshold: 0.3 }
  );

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) observer.unobserve(element); // نستخدم المتغير هنا
  };
}, []);


  return (
    <section className="stats-section" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-4">
              <h2 className="section-title">أرقام تتحدث</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">خبرة ممتدة ومشاريع ناجحة في أنحاء المملكة</p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={3} xs={6}><Stat label="سنوات الخبرة" to={12} suffix="+" start={start} /></Col>
          <Col md={3} xs={6}><Stat label="مشروع مكتمل" to={450} suffix="+" start={start} /></Col>
          <Col md={3} xs={6}><Stat label="عميل سعيد" to={380} suffix="+" start={start} /></Col>
          <Col md={3} xs={6}><Stat label="مدينة خدمناها" to={25} suffix="+" start={start} /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
