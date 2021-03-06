
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddProudct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [size, setSize] = useState("")
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(0);
  const [boarding, setBoarding] = useState("");
  const [observations, setObservations] = useState("");
  const [validationError, setValidationError] = useState({})
  const [brands, setBrands] = useState("")

  const createProduct = async (e) => {

    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('size', size)
    formData.append('brand_id', brand)
    formData.append('stock', stock)
    formData.append('boarding', boarding)
    formData.append('observations', observations)

    await axios.post(`http://localhost:8000/api/products`, formData).then(({ data }) => {
      Swal.fire({
        icon: "success",
        text: data.message,
        button: "OK!"
      })
      navigate("/")
    }).catch(({ response }) => {
      if (response.status === 422) {
        setValidationError(response.data.errors)
      } else {
        Swal.fire({
          text: response.data.message,
          icon: "error",
        })
      }
    })

  }

  const fetchBrands = async () => {
    await axios.get(`http://localhost:8000/api/brands`).then(({ data }) => {
      setBrands(data)
    })
  }

  useEffect(() => {
    fetchBrands()
  }, [])

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

        <Container className="my-5">

          <Form onSubmit={createProduct}>

            <Row className="mb-3">

              <Form.Group as={Col} md="4" controlId="Name">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  value={name}
                  required
                  type="text"
                  placeholder="Product name"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="Size">
                <Form.Label>Product size</Form.Label>
                <Form.Select value={size} required onChange={(event) => { setSize(event.target.value) }}>
                  <option></option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="productBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Select required value={brand} onChange={(event) => setBrand(event.target.value)}>
                  <option></option>
                  {
                    brands.length > 0 ? brands.map((row, key) => (
                      
                      <option value={row.id}>{row.name}</option>
                    )) : <option disabled>no brands</option>
                  }
                </Form.Select>
              </Form.Group>

            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} md="4" controlId="Stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  onChange={(event) => { setStock(event.target.value) }}
                  required
                  type="number"
                  placeholder="Stock"
                />
              </Form.Group>

              <label className="mt-3" for="birthdaytime">Boarding date</label>
              <div className="mb-3">
                
                <input value={boarding} onChange={(event)=>{setBoarding(event.target.value)}} style={{ width: "410px", height: "30" }} type="datetime-local" id="boarding" controlId="Boarding" />
              </div>

              { /* <Form.Group as={Col} md="4" controlId="Boarding">
                <Form.Label>Boarding date</Form.Label>
                <Form.Control
                  onChange={(event)=>{setBoarding(event.target.value)}}
                  required
                  type="dateTime"
                  placeholder="Boarding date"
                />
              </Form.Group>
*/}
              <Form.Group as={Col} md="4" controlId="Observations">
                <Form.Label>Product observations</Form.Label>
                <Form.Control
                  onChange={(event) => setObservations(event.target.value)}
                  required
                  as="textarea"
                  placeholder="Product observations"
                />
              </Form.Group>
            </Row>

            <Button onClick={createProduct} type="submit">Add product</Button>
          </Form>
        </Container>
      </div>
    </>
  )

}
export default AddProudct;