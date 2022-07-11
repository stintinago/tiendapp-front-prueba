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
                <Modal.Title>Edit brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="my-5">
                    <Form>

                        <Row className="mb-3">

                            <Form.Group as={Col} md="6" controlId="peoductName">
                                <Form.Label>Brand name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product name"
                                    value="value"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="peoductName">
                                <Form.Label>Brand reference</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Product name"
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