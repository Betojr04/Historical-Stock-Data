import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HowToUse = () => (
  <Container className="py-3">
    <Container className="py-3 bg-light mb-3 rounded">
      <h1>How to Use</h1>
    </Container>
    <Card>
      <Card.Body>
        <Card.Title>Step 1: Navigate to Home</Card.Title>
        <Card.Text>
          Start by navigating to the home page, where you'll find the search
          input to get the stock data.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Step 2: Enter Stock Symbol</Card.Title>
        <Card.Text>
          Enter a valid stock symbol into the search input. Be sure that the
          symbol you enter is listed in the stock market.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Step 3: Analyze the Chart</Card.Title>
        <Card.Text>
          After you've entered the symbol, the chart will populate with data for
          that stock symbol.
        </Card.Text>
      </Card.Body>
    </Card>
    <Container className="py-3 bg-light mt-3 rounded"></Container>
  </Container>
);

export default HowToUse;
