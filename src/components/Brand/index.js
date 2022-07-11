import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditModal from './EditModal';

function Brand() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
    return (
        <>
            <Container className="mt-4">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Brand Name</th>
                            <th>Reference</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button onClick={handleShow}>Edit</Button><Button className="mx-2" variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><Button>Edit</Button><Button className="mx-2" variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button>Edit</Button><Button className="mx-2" variant="danger">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <EditModal show={show} handleShow={handleShow}/>
        </>
    )
}
export default Brand;