import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

const ProductCard = ({ title, code, description, image, hoverImage, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card
        className="product-card h-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-image-container">
          <Card.Img
            variant="top"
            src={isHovered && hoverImage ? hoverImage : image}
            alt={title}
            className="product-image"
          />
          <div className="product-overlay">
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              اطلب الآن
            </Button>
          </div>
        </div>
        <Card.Body className="text-start">
          <Card.Title className="product-title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">كود المنتج: {code}</Card.Subtitle>
          <Card.Text className="product-description">{description}</Card.Text>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setShowModal(true)}
          >
            عرض التفاصيل
          </Button>
        </Card.Body>
      </Card>

      {/* ✅ Modal بتصميم جديد */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="custom-modal"
      >
        <Modal.Header className="border-0">
          <Modal.Title className="modal-title-custom">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="product-code">كود المنتج: {code}</p>
          <ul className="features-list">
            {features?.map((feature, index) => (
              <li key={index}>
                <CheckCircle className="feature-icon" /> {feature}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            إغلاق
          </Button>
          <Button
            className="gradient-btn"
            onClick={() => {
              setShowModal(false);
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            اطلب الآن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;
