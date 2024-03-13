import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="mr-auto">Ceramica Roma</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Quienes Somos</Nav.Link>
            <CartWidget />
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
};
