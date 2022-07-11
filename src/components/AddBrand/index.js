import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function AddBrand() {
    return (
        <>
            <Container className="mt-4">
                <Form>
                    <Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Brand reference</Form.Label>
                            <Form.Control
                                required
                                type="number"
                            />
                        </Form.Group>
                    </Row>
                    <Button className="mt-5" variant="primary">Add brand</Button>
                </Form>
            </Container>
        </>
    );
}
export default AddBrand;