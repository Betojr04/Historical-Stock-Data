import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../../styles/landingpage.css";

const LandingPage = () => {
  return (
    <Container fluid className="landing-page-bg py-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="text-light">Historical Stock Data Viewer</h1>
          <p className="lead text-light">
            Enter a stock symbol to get historical data
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Form.Group controlId="formStockSymbol">
                  <Form.Label>Stock Symbol</Form.Label>
                  <Form.Control type="text" placeholder="Enter stock symbol" />
                  <Form.Text className="text-muted">
                    For example: AAPL, GOOG, MSFT, etc.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
