import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

function EditBrand() {

    const navigate = useNavigate();

    const { id } = useParams()

    const [name, setName] = useState("")
    const [reference, setReference] = useState(0)


    const [validationError, setValidationError] = useState({})

    useEffect(() => {
        fetchBrand()
    }, [])

    const fetchBrand = async () => {
        await axios.get(`http://127.0.0.1:8000/api/brand/${id}`).then(({ data }) => {
            const { name, reference } = data
            setName(name)
            setReference(reference)
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }



    const updateBrand = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('name', name);
        formData.append('reference', reference);

        await axios.post(`http://127.0.0.1:8000/api/brandsUpdate/${id}`, formData).then(({ data }) => {
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
            <div>
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
                <Container className="mt-4">

                    <Form>
                        <Row>

                            <Form.Group as={Col} md="4" controlId="Name">
                                <Form.Label>Brand name</Form.Label>
                                <Form.Control
                                    value={name}
                                    required
                                    type="text"
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="Reference">
                                <Form.Label>Brand reference</Form.Label>
                                <Form.Control
                                    value={reference}
                                    onChange={(event) => setReference(event.target.value)}
                                    required
                                    type="number"
                                />
                            </Form.Group>
                        </Row>

                        <Button onClick={updateBrand} className="mt-5" variant="primary">Edit brand</Button>

                    </Form>

                </Container>
            </div>
        </>
    );
}
export default EditBrand;