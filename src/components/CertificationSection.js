import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./CertificationSection.css";

const CertificationSection = () => {
  return (
    <section id="certification" className="certification-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="certification-card text-center p-5 shadow-sm">
              <h2 className="fw-bold mb-3">
                مؤسسة أعمال المسبح التجارية موثقة رسمياً
              </h2>
              <p className="text-muted mb-4">
                يمكنكم التحقق من التوثيق عبر المنصة الرسمية للمركز السعودي للأعمال الاقتصادية.
              </p>
              <Button
                href="https://eauthenticate.saudibusiness.gov.sa/certificate-details"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="verify-btn px-5 rounded-pill"
              >
                عرض التوثيق
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CertificationSection;
