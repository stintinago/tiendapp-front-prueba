import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TiendappLogo from "../../images/navbar/logo-tiendapp.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import EditModal from './EditModal';

function Home() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
    return (
      <>
        <Container className="">
          <Row className="justify-content-center ml-5 my-5">

            <Col >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TiendappLogo} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Size (S, M, L).
                    Description...something here to ad observations about the product from tiendapp, a shop from another level.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Brand: brand</ListGroup.Item>
                  <ListGroup.Item>Stock: stock</ListGroup.Item>
                  <ListGroup.Item>Boarding date: boarding date</ListGroup.Item>
                </ListGroup>
              </Card>
              <Button onClick={handleShow} className="mt-3" variant="primary">Edit product</Button>
              <Button className="mt-3 mx-5" variant="danger">Delete product</Button>
            </Col>

            <Col >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TiendappLogo} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Size (S, M, L).
                    Description...something here to ad observations about the product from tiendapp, a shop from another level.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Brand: brand</ListGroup.Item>
                  <ListGroup.Item>Stock: stock</ListGroup.Item>
                  <ListGroup.Item>Boarding date: boarding date</ListGroup.Item>
                </ListGroup>
              </Card>
              <Button className="mt-3" variant="primary">Edit product</Button>
              <Button className="mt-3 mx-5" variant="danger">Delete product</Button>
            </Col>

            <Col >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TiendappLogo} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Size (S, M, L).
                    Description...something here to ad observations about the product from tiendapp, a shop from another level.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Brand: brand</ListGroup.Item>
                  <ListGroup.Item>Stock: stock</ListGroup.Item>
                  <ListGroup.Item>Boarding date: boarding date</ListGroup.Item>
                </ListGroup>
              </Card>
              <Button className="mt-3" variant="primary">Edit product</Button>
              <Button className="mt-3 mx-5" variant="danger">Delete product</Button>
            </Col>
          </Row>
        </Container>
        <EditModal show={show} handleShow={handleShow}/>
      </>
    )
}
export default Home;
