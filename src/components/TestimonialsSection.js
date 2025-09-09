import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'عميل شركة',
    text: 'تنفيذ احترافي وسرعة في الإنجاز. الشلالات أعطت المكان طابع فاخر.',
    role: 'مشروع في الرياض',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'مالك فيلا',
    text: 'منتجات السلامة ممتازة وخدمتهم بعد البيع رائعة. أنصح بالتعامل معهم.',
    role: 'فيلا خاصة - جدة',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4
  },
  {
    name: 'مشرف موقع',
    text: 'فريق متمكن وملتزم بالمواعيد. تجربة ناجحة بكل المقاييس.',
    role: 'منتجع - الدمام',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5
  },
  {
    name: 'م. نورة العتيبي',
    text: 'خدمة العملاء ممتازة والتواصل سريع. جودة المنتجات عالية جداً.',
    role: 'مشروع خاص - مكة',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  },
  {
    name: 'أ. خالد الزهراني',
    text: 'التزام بالمواعيد واحترافية في التنفيذ. شكراً لكم.',
    role: 'شركة مقاولات - الطائف',
    img: 'https://randomuser.me/api/portraits/men/12.jpg',
    rating: 4
  },
  {
    name: 'م. سارة العنزي',
    text: 'المنتجات رائعة والدعم الفني متعاون جداً.',
    role: 'مشروع حكومي - القصيم',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
    rating: 5
  },
];

const VISIBLE_COUNT = 3;

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = React.useState(0);

  // السلايدر التلقائي
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // تحكم يدوي
  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  // حساب العملاء الظاهرين دائماً (مع الدوران)
  const getVisibleTestimonials = () => {
    const arr = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      arr.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return arr;
  };

  return (
    <section className="testimonials-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <div className="section-header mb-4">
              <h2 className="section-title">قالوا عنا</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">آراء حقيقية من عملائنا</p>
            </div>
          </Col>
        </Row>
        <div className="testimonials-slider-wrapper">
          <Button
            variant="light"
            className="testimonial-arrow slider-arrow slider-arrow-right"
            onClick={handlePrev}
            aria-label="السابق"
          >
            <svg width="28" height="28" fill="#007bff" viewBox="0 0 24 24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </Button>
          <div className="testimonials-slider">
            <div className="testimonials-slider-inner">
              {getVisibleTestimonials().map((t, i) => (
                <div key={i} className="slider-card-col">
                  <div className="testimonial-card-custom flex-fill mx-2">
                    <div className="testimonial-avatar-wrapper">
                      <Image
                        src={t.img}
                        alt={t.name}
                        roundedCircle
                        className="testimonial-avatar"
                      />
                    </div>
                    <div className="testimonial-quote-icon-top">
                      <svg width="32" height="32" fill="#007bff" viewBox="0 0 24 24"><path d="M7.17 17.93c-1.1 0-2-.9-2-2v-2.24c0-2.09 1.7-3.79 3.79-3.79.55 0 1 .45 1 1s-.45 1-1 1c-1.03 0-1.79.76-1.79 1.79v2.24c0 .55-.45 1-1 1zm7.66 0c-1.1 0-2-.9-2-2v-2.24c0-2.09 1.7-3.79 3.79-3.79.55 0 1 .45 1 1s-.45 1-1 1c-1.03 0-1.79.76-1.79 1.79v2.24c0 .55-.45 1-1 1z"/></svg>
                    </div>
                    <div className="testimonial-rating mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx} style={{color: idx < t.rating ? '#ffc107' : '#e4e5e9', fontSize: '1.1rem'}}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-text-custom mb-0">{t.text}</p>
                    <div className="testimonial-author-custom">{t.name}</div>
                    <div className="testimonial-role-custom">{t.role}</div>
                    <div className="testimonial-quote-icon-bottom">
                      <svg width="28" height="28" fill="#25d366" viewBox="0 0 24 24"><path d="M7.17 17.93c-1.1 0-2-.9-2-2v-2.24c0-2.09 1.7-3.79 3.79-3.79.55 0 1 .45 1 1s-.45 1-1 1c-1.03 0-1.79.76-1.79 1.79v2.24c0 .55-.45 1-1 1zm7.66 0c-1.1 0-2-.9-2-2v-2.24c0-2.09 1.7-3.79 3.79-3.79.55 0 1 .45 1 1s-.45 1-1 1c-1.03 0-1.79.76-1.79 1.79v2.24c0 .55-.45 1-1 1z"/></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="light"
            className="testimonial-arrow slider-arrow slider-arrow-left"
            onClick={handleNext}
            aria-label="التالي"
          >
            <svg width="28" height="28" fill="#007bff" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;



