import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function EditModal(props) {

    return (
        <Modal show={props.show} onHide={props.handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="my-5">
                    <Form>

                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" controlId="peoductName">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product name"
                                    value="value"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Product brand</Form.Label>
                                <Form.Select>
                                    <option disabled selected>Select size</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="productBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product brand"
                                    value="value"
                                />
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">

                            <Form.Group as={Col} md="4" controlId="peoductName">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Stock"
                                    value="value"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="productSize">
                                <Form.Label>Boarding date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Boarding date"
                                    value="value"
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="12" controlId="productBrand">
                                <Form.Label>Product observations</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    placeholder="Product observations"
                                    value="value"
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleShow}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;