import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';

function AddBrand() {

  //validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [reference, setReference] = useState(0)

  const [validationError, setValidationError] = useState({})

  const createBrand = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('reference', reference)

    await axios.post(`http://localhost:8000/api/brands`, formData).then(({ data }) => {
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

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>

            <Form.Group as={Col} md="4">
              <Form.Label>Brand Name</Form.Label>

              <Form.Control

                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please type a name.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Brand reference</Form.Label>
              <Form.Control
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                required
                type="number"
              />
            </Form.Group>
          </Row>

          <Button type="submit" onClick={createBrand} className="mt-5" variant="primary">Add brand</Button>

        </Form>

      </Container>
    </>
  );
}
export default AddBrand;