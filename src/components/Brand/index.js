import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditModal from './EditModal';
import axios from 'axios';
import Swal from 'sweetalert2'

function Brand() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        await axios.get(`http://localhost:8000/api/brands`).then(({ data }) => {
            setBrands(data)
        })
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const deleteBrand = async (id) => {
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
          fetchBrands()
        }).catch(({ response: { data } }) => {
          Swal.fire({
            text: data.message,
            icon: "error"
          })
        })
      }
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
                        {
                            brands.length > 0 ? brands.map((row, key) => (

                                <tr key={key}>
                                    <td>{row.name}</td>
                                    <td>{row.reference}</td>
                                    <td><Button >Edit</Button><Button onClick={()=>deleteBrand(row.id)} className="mx-2" variant="danger">Delete</Button></td>
                                </tr>
                            )) : <h1>No data</h1>
                    }
                    </tbody>
                </Table>
            </Container>

        </>
    )
}
export default Brand;