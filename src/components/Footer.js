import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <img 
                src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/KrDbg/ffheuWHl7tCOm2YOFDI16cMUVY3mrZ6kroCi3StA.png" 
                alt="مؤسسة أعمال المسبح التجارية" 
                className="footer-logo"
              />
              <h3 className="footer-title">مؤسسة أعمال المسبح التجارية</h3>
              <p className="footer-description">تصنيع المسابح والنوافير الشفافة ومنتجات الأمان والاكسسوارات الخاصة بها
              </p>
            </div>
          </Col>

          {/* Links */}
          <Col lg={4} md={6}>
            <h4 className="footer-section-title">روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="#about">من نحن</a></li>
              <li><a href="#products">منتجاتنا</a></li>
              <li><a href="#services">خدمتنا</a></li>
            </ul>
          </Col>

          {/* Contact + Social */}
          {/* Contact + Social */}
<Col lg={4} md={12}>
  <h4 className="footer-section-title" >تواصل معنا</h4>
  <ul className="footer-contact">
    <li>
      <i className="fas fa-envelope contact-icon"></i>
      <a href="mailto:Projects@aamal.com.sa">Projects@aamal.com.sa</a>
    </li>
    <li>
      <i className="fas fa-phone contact-icon"></i>
      <a href="tel:+966504480025">+966504480025</a>
    </li>
    <li>
      <i className="fab fa-whatsapp contact-icon whatsapp"></i>
      <a href="https://wa.me/966504480025" target="_blank" rel="noreferrer">
        واتساب مباشر
      </a>
    </li>
  </ul>

  <div className="footer-social">
    <a href="https://www.youtube.com/@aamalalmasbah" target="_blank" rel="noreferrer" className="social-icon youtube">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="https://www.tiktok.com/@aamalalmasbah" target="_blank" rel="noreferrer" className="social-icon tiktok">
      <i className="fab fa-tiktok"></i>
    </a>
    <a href="https://x.com/aamalalmasbah" target="_blank" rel="noreferrer" className="social-icon twitter">
  <FontAwesomeIcon icon={faXTwitter} />
</a>

    <a href="https://www.instagram.com/Aamalalmasbah" target="_blank" rel="noreferrer" className="social-icon instagram">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</Col>

        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="copyright">©  مؤسسة أعمال المسبح التجارية. جميع الحقوق محفوظة.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
