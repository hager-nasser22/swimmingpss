import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './SiteNavbar.css';

const SiteNavbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg" className="site-navbar" fixed="top" bg="light">
      <Container>
        <Navbar.Brand onClick={() => scrollTo('hero')} className="brand clickable">
          <img
            src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/KrDbg/ffheuWHl7tCOm2YOFDI16cMUVY3mrZ6kroCi3StA.png"
            alt="Aamal"
            className="brand-logo"
          />
          <span className="brand-text">مؤسسة أعمال المسبح التجارية</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link onClick={() => scrollTo('about')}>من نحن</Nav.Link>
            <Nav.Link onClick={() => scrollTo('products')}>منتجاتنا</Nav.Link>
            <Nav.Link onClick={() => scrollTo('contact')}>تواصل معنا</Nav.Link>
            <a className="btn btn-whatsapp nav-whatsapp" href="https://wa.me/966504480025" target="_blank" rel="noreferrer">
              واتساب
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;


