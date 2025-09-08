import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_u06rb38",       
      "template_7sy84ot",      
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "nasrh2442@gmail.com"
      },
      "XS8487sl568Fgx2wX"        
    )
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "تم الإرسال ✅",
        text: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        confirmButtonText: "موافق",
        confirmButtonColor: "#0d6efd",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      Swal.fire({
        icon: "error",
        title: "حدث خطأ ❌",
        text: "حاول مرة أخرى لاحقاً.",
        confirmButtonText: "تمام",
        confirmButtonColor: "#dc3545",
      });
    });
  };


  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="section-header mb-5">
              <h2 className="section-title">تواصل معنا</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                نحن هنا لمساعدتك في جميع احتياجاتك المائية
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mb-5 mb-lg-0">
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <h3 className="form-title mb-4">أرسل لنا رسالة</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group className='text-start'>
                        <Form.Label>الاسم الكامل *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="أدخل اسمك الكامل"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group className='text-start'>
                        <Form.Label>البريد الإلكتروني *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="أدخل بريدك الإلكتروني"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4 text-start" >
                    <Form.Label>الرسالة *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="اكتب رسالتك هنا..."
                      className="form-control-custom"
                    />
                  </Form.Group>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="submit-btn"
                  >
                    إرسال الرسالة
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <div className="contact-info">
              <Card className="contact-info-card mb-4">
                <Card.Body className="text-center p-4">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                  </div>
                  <h4 className="contact-info-title">البريد الإلكتروني</h4>
                  <p className="contact-info-text">
                    <a href="mailto:Projects@aamal.com.sa" className="contact-link">
                      Projects@aamal.com.sa
                    </a>
                  </p>
                </Card.Body>
              </Card>

              <Card className="contact-info-card mb-4">
                <Card.Body className="text-center p-4">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <h4 className="contact-info-title">الهاتف / واتساب</h4>
                  <p className="contact-info-text">
                    <a href="tel:+966504480025" className="contact-link">
                      +966504480025
                    </a>
                  </p>
                </Card.Body>
              </Card>

              <Card className="whatsapp-card">
                <Card.Body className="text-center p-4">
                  <div className="whatsapp-icon mb-3">
                    <i className="fab fa-whatsapp fa-3x text-success"></i>
                  </div>
                  <h4 className="whatsapp-title">تواصل عبر واتساب</h4>
                  <p className="whatsapp-text mb-4">
                    احصل على استجابة سريعة عبر واتساب
                  </p>
                  <Button 
                    variant="success" 
                    size="lg"
                    className="whatsapp-btn"
                    onClick={() => window.open('https://wa.me/966504480025', '_blank')}
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    ابدأ المحادثة
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
