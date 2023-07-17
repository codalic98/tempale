import "bootstrap/dist/css/bootstrap.min.css";
import "./allvideo.css";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
const AllVideo = () => {
  return (
    <div className="container-fluid">
      <nav className="nav d-flex flex-nowrap overflow-auto justify-content-between">
        <a className="nav-link checked" href="#">
          ALL
        </a>
        <a className="nav-link" href="#">
          VIDEO SLOTS
        </a>
        <a className="nav-link" href="#">
          INSTANT GAMES
        </a>
        <a className="nav-link" href="#">
          TABLE GAMES
        </a>
        <a className="nav-link" href="#">
          CLASSICS
        </a>
        <a className="nav-link" href="#">
          BONUS BUY
        </a>
        <a className="nav-link" href="#">
          JACKBOT
        </a>
        <Form className="d-flex ">
          <Col className="d-none d-md-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Col>
        </Form>
      </nav>
      <Form className="d-flex">
        <Col className="d-flex d-md-none">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Col>
      </Form>
    </div>
  );
};

export default AllVideo;