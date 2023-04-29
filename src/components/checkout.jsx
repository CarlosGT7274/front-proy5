import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Checkout = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="mb-4">Checkout</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>

            <Form.Group controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>

            <Form.Group controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" />
            </Form.Group>

            <Form.Group controlId="formBasicZip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control type="text" placeholder="Enter zip code" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Place order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
