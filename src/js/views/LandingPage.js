import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Historical Stock Data Viewer</h1>
          <p className="lead">Enter a stock symbol to get historical data</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
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
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>How to Use</Card.Title>
              <Card.Text>
                To use this application, simply enter the stock symbol of the
                company you're interested in into the input field above, then
                click "Submit". The application will fetch and display
                historical data for the stock. For example, you could enter
                "AAPL" for Apple, "GOOG" for Google, or "MSFT" for Microsoft.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
