import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/svg/airbnb.svg'
import './TopNav.css'
export default function TopNav(props){

return (
<Navbar collapseOnSelect expand="lg" className="bg-body-white nav-container">
  <Container className="d-flex justify-content-between">
    <Navbar.Brand href="#home"><img src={logo}/> <span className="text-danger"> Airbnb</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav ">
      <Nav className="mx-auto">
        <Nav.Link href="#stay" className="active">Stay</Nav.Link>
        <Nav.Link href="#exprience">Experience</Nav.Link>
        <Nav.Link href="#online-exprience">Online Experience</Nav.Link>
      </Nav>
      <Nav>
      
        <Nav.Link eventKey={2} href="#memes">
        <img src={props.icon} className='profile__img'/>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

}