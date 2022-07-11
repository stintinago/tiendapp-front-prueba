
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function AddProudct() {

  return (
    <>
      <Container className="my-5">
        <Form>

          <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="peoductName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product name"
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Product brand</Form.Label>
              <Form.Select required>
                <option disabled selected>Select size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="productBrand">
              <Form.Label>Brand</Form.Label>
              <Form.Select required>
                <option disabled selected>Select brand</option>
                <option>Brand 1</option>
              </Form.Select>
            </Form.Group>

          </Row>

          <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="peoductName">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Stock"
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="productSize">
              <Form.Label>Boarding date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Boarding date"
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="productBrand">
              <Form.Label>Product observations</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Product observations"
              />
            </Form.Group>

          </Row>

          <Button type="submit">Add product</Button>
        </Form>
      </Container>
    </>
  )

}
export default AddProudct;