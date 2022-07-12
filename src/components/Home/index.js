import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TiendappLogo from "../../images/navbar/logo-tiendapp.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import EditModal from './EditModal';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function Home() {

  const [products, setProducts] = useState([])

  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/products`).then(({ data }) => {
      setProducts(data)
    })
  }
  const fetchBrands = async () => {
    await axios.get(`http://localhost:8000/api/brands`).then(({data})=>{
        setBrands(data)
    })
}


  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      return result.isConfirmed
    });

    if (!isConfirm) {
      return;
    }

    await axios.delete(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
      Swal.fire({
        icon: "success",
        text: data.message
      })
      fetchProducts()
    }).catch(({ response: { data } }) => {
      Swal.fire({
        text: data.message,
        icon: "error"
      })
    })
  }


  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <>
      <Container className="">

        <Row className="justify-content-center ml-5 my-5">

          {
            products.length > 0 ? 
              products.map((row, key) => (
                <Col className="mt-4" md={4}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={TiendappLogo} />
                    <Card.Body>
                      <Card.Title>{row.name}</Card.Title>
                      <Card.Text>
                        Size {row.size}
                        {row.options}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Brand: {row.brand}</ListGroup.Item>
                      <ListGroup.Item>Stock: {row.stock}</ListGroup.Item>
                      <ListGroup.Item>Boarding date: {row.boarding}</ListGroup.Item>
                    </ListGroup>
                  </Card>

                  <Link to={`/EditProduct/${row.id}`} >
                    <Button  className="mt-3" variant="primary">Edit product</Button>
                  </Link>

                  <Button onClick={() => deleteProduct(row.id)} className="mt-3 mx-5" variant="danger">Delete product</Button>
                </Col>
              )) : <h1>No data</h1>
            
          }

        </Row>
      </Container>
      
    </>
  )
}
export default Home;
