import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <div className="section-header">
              <h2 className="section-title">تواصل معنا</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                نسعد بخدمتكم عبر قنوات التواصل المختلفة
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card className="contact-card text-center">
              <div className="icon-circle bg-primary text-white mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h4 className="contact-title">البريد الإلكتروني</h4>
              <p>
                <a href="mailto:Projects@aamal.com.sa" className="contact-link">
                  Projects@aamal.com.sa
                </a>
              </p>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="contact-card text-center">
              <div className="icon-circle bg-info text-white mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h4 className="contact-title">الهاتف</h4>
              <p>
                <a href="tel:+966504480025" className="contact-link">
                  +966504480025
                </a>
              </p>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="contact-card text-center">
              <div className="icon-circle bg-success text-white mb-3">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h4 className="contact-title">واتساب</h4>
              <p className="mb-3">للتواصل السريع عبر واتساب</p>
              <Button 
                variant="success"
                className="contact-btn"
                onClick={() => window.open('https://wa.me/966504480025', '_blank')}
              >
                <i className="fab fa-whatsapp me-2"></i>
                ابدأ المحادثة
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
