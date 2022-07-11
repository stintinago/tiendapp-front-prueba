import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import TiendappLogo from "../../images/navbar/logo-tiendapp.png";
const Layout = () => {
    return (
        <>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="/"><img src={TiendappLogo}/></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/AddProudct">Add products</Nav.Link>
                            <Nav.Link href="/Brand">Brands</Nav.Link>
                            <Nav.Link href="/AddBrand">Add Brand</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            <Outlet />
        </>
    )
};

export default Layout;