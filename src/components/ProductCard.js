import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, description, image, hoverImage, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="product-card h-100"
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
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            اطلب الآن
          </Button>
        </div>
      </div>
      <Card.Body className="text-start">
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-description">{description}</Card.Text>
        <div className="product-features">
          {features?.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


