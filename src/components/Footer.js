import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <img 
                src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/KrDbg/ffheuWHl7tCOm2YOFDI16cMUVY3mrZ6kroCi3StA.png" 
                alt="مؤسسة أعمال المسبح التجارية" 
                className="footer-logo"
              />
              <h3 className="footer-title">مؤسسة أعمال المسبح التجارية</h3>
              <p className="footer-description">
                متخصصون في تصميم وتنفيذ شلالات ونوافير المياه المبتكرة، 
                بالإضافة إلى توريد منتجات السلامة المتطورة للمسابح والمنشآت المائية.
              </p>
            </div>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="footer-contact">
              <h4 className="footer-section-title">معلومات التواصل</h4>
              <div className="contact-item">
                <i className="fas fa-envelope text-primary me-2"></i>
                <a href="mailto:Projects@aamal.com.sa" className="contact-link">
                  Projects@aamal.com.sa
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone text-primary me-2"></i>
                <a href="tel:+966504480025" className="contact-link">
                  +966504480025
                </a>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp text-success me-2"></i>
                <a href="https://wa.me/966504480025" target="_blank" rel="noopener noreferrer" className="contact-link">
                  واتساب
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-globe text-primary me-2"></i>
                <a href="https://aamal.com.sa" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Aamal.com.sa
                </a>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="footer-services">
              <h4 className="footer-section-title">خدماتنا</h4>
              <ul className="services-list">
                <li>تصميم شلالات المياه</li>
                <li>نوافير المياه التفاعلية</li>
                <li>منتجات سلامة المسابح</li>
                <li>أنظمة التصفية المتطورة</li>
                <li>أجهزة الإنذار والمراقبة</li>
                <li>استشارات هندسية متخصصة</li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center">
          <Col md={4}>
            <div className="footer-copyright">
              <p className="copyright-text">
                © 2024 مؤسسة أعمال المسبح التجارية. جميع الحقوق محفوظة.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-links text-md-center">
              <a href="#about" className="footer-link">من نحن</a>
              <a href="#products" className="footer-link">منتجاتنا</a>
              <a href="#contact" className="footer-link">تواصل معنا</a>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-social text-md-start">
              <a href="https://www.youtube.com/@aamalalmasbah" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="يوتيوب">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@aamalalmasbah" target="_blank" rel="noopener noreferrer" className="social-icon tiktok" aria-label="تيك توك">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://x.com/aamalalmasbah" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="تويتر">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/Aamalalmasbah" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="انستجرام">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
