import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';




function Nevbar() {
  return (
    <>
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white", fontSize: "30px" }}>Shopping Cart</Navbar.Brand>



          <Nav>
            <Link to="/Add"><Button variant="dark" style={{ color: "white", fontSize: "30px" }} >Cart{''}<AiOutlineShoppingCart /></Button></Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Nevbar