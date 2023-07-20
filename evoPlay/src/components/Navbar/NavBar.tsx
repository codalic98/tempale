import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
const NavBar: React.FC = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          collapseOnSelect
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-4"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">ABOUT US</Nav.Link>
                  <NavDropdown
                    title="GAMES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Video slots
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Instant games
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Classic games
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Table games
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Bonus buy games
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Jackpot games
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">PARTNERSHIPS</Nav.Link>
                  <Nav.Link href="#action2">NEW & EVENTS</Nav.Link>
                  <Nav.Link href="#action2">CONTACT US</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
