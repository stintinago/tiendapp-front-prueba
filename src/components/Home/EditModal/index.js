import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

function EditModal(props) {

    // state={
    //   options: []
    //}

    const navigate = useNavigate();

    const { id } = useParams()

    const [name, setName] = useState("");
    const [size, setSize] = useState("")
    const [brand, setBrand] = useState("");
    const [stock, setStock] = useState(0);
    const [boarding, setBoarding] = useState("");
    const [observations, setObservations] = useState("");
    const [validationError, setValidationError] = useState({})

    useEffect(() => {
        
    }, [])

    const fetchProduct = async () => {
        await axios.get(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
            const { name, size, brand, stock, boarding, observations } = data.product
            setName(name)
            setSize(size)
            setBrand(brand)
            setStock(stock)
            setBoarding(boarding)
            setObservations(observations)
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('name', name);
        formData.append('size', size);
        formData.append('brand', brand);
        formData.append('stock', stock);
        formData.append('boarding', boarding);
        formData.append('observations', observations);

        await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/")
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidationError(response.data.errors)
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: "error"
                })
            }
        })
    }

    return (
        <>
            <div className="form-wrapper">
                {
                    Object.keys(validationError).length > 0 && (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {
                                            Object.entries(validationError).map(([key, value]) => (
                                                <li key={key}>{value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                <Modal show={props.show} onHide={props.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="my-5">
                            <Form onSubmit={updateProduct}>

                                <Row className="mb-3">

                                    <Form.Group as={Col} md="4" controlId="Name">
                                        <Form.Label>Product name</Form.Label>
                                        <Form.Control
                                            onChange={(event) => setName(event.target.value)}
                                            required
                                            type="text"
                                            placeholder="Product name"
                                            value={name}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="Size">
                                        <Form.Label>Product size</Form.Label>
                                        <Form.Select
                                            onChange={(event) => setSize(event.target.value)}
                                        >
                                            {
                                                //this.state.map(elemento=>{
                                                //<option key={elemento.id} value={elemento.id}>{elemento.size}</option>
                                                //})
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="Brand">
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Select
                                            onChange={(event) => setBrand(event.target.value)}
                                        >
                                            {
                                                //this.state.map(elemento=>{
                                                //<option key={elemento.id} value={elemento.id}>{elemento.brand}</option>
                                                //})
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                </Row>

                                <Row className="mb-3">

                                    <Form.Group as={Col} md="4" controlId="Stock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            onChange={(event) => setStock(event.target.value)}
                                            required
                                            type="number"
                                            placeholder="Stock"
                                            value={stock}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="Boarding">
                                        <Form.Label>Boarding date</Form.Label>
                                        <Form.Control
                                            onChange={(event) => setBoarding(event.target.value)}
                                            required
                                            type="date"
                                            placeholder="Boarding date"
                                            value={boarding}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group as={Col} md="12" controlId="Observations">
                                        <Form.Label>Product observations</Form.Label>
                                        <Form.Control
                                            onChange={(event) => setObservations(event.target.value)}
                                            required
                                            as="textarea"
                                            placeholder="Product observations"
                                            value={observations}
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
            </div>
        </>
    );
}

export default EditModal;