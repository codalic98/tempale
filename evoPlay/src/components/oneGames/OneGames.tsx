import { Col, Row } from "react-bootstrap";
import Description from "../Description/Description";
import Form from "../Form/Form";
import SimilarGame from "../SimilarGame/SimilarGame";
import "./oneGames.css";
// import {
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const OneGames: React.FC = () => {
  return (
    <>
      <div className="back-image">
        <div className="container">
          <div className="desc">
            <Row>
              <Col>
                <Row style={{ maxWidth: "100%" }}>
                  <h1
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "50px",
                      marginLeft: "50px",
                    }}
                  >
                    PENALTY SHOOT-OUT
                  </h1>
                  <ul className="game-widgets">
                    <li className="game-widget-item">
                      <span
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        RTP
                      </span>
                      <span
                        className="value white-txt"
                        style={{ color: "white" }}
                      >
                        96.00%
                      </span>
                    </li>

                    <li className="game-widget-item">
                      <span
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        MAX WIN
                      </span>

                      <span
                        className="value white-txt"
                        style={{ color: "white" }}
                      >
                        € 2,304
                      </span>
                    </li>
                  </ul>
                </Row>
                <Row>
                  <div className="game-info-rows">
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        CATEGORY
                      </div>
                      <div className="content">"Instant Games"</div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        RELEASE DATE
                      </div>
                      <div className="content">05.2020.</div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        TAGS
                      </div>
                      <div className="content">
                        <ul className="game-tags-top">
                          <li>
                            <a
                              className="game-tag-top"
                              style={{ transition: ".2s", cursor: "pointer" }}
                            >
                              Sports / Betting
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        LANGUAGES
                      </div>
                      <div className="content">"Instant Games"</div>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col>
                <div className="iphonex" id="iphone2">
                  <div className="front">
                    <div className="screen">
                      <div className="screen__view">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{
                            position: "absolute",
                            top: "80%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "10px 25px 10px 25px",
                            width: "200px",
                            backgroundColor: "#0099FF",
                          }}
                        >
                          Play Now
                        </button>
                        <a
                          className="icon-link icon-link-hover"
                          style={{
                            position: "absolute",
                            top: "88%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          Play on Desktop
                        </a>
                      </div>

                      <div className="screen__front">
                        <div className="screen__front-speaker"></div>
                        <div className="screen__front-camera"></div>
                      </div>
                      <div>
                        <img
                          src="https://evoplay.games/wp-content/uploads/2021/03/Penalty-Shoot-Out.jpg"
                          alt=""
                          style={{
                            borderRadius: "35px",
                            width: "16em",
                            height: "34.5em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="phone"
            style={{ paddingTop: "23px", paddingBottom: "23px" }}
          >
            <Col>
              <Row>
                <div
                  className="iphonex"
                  id="iphone2"
                  style={{
                    position: "static",
                    margin: "0 0 0 0",
                  }}
                >
                  <div className="front">
                    <div className="screen">
                      <div className="screen__front">
                        <div className="screen__front-speaker"></div>
                        <div className="screen__front-camera"></div>
                      </div>
                      <div>
                        <img
                          src="https://evoplay.games/wp-content/uploads/2021/03/Penalty-Shoot-Out.jpg"
                          alt=""
                          style={{
                            borderRadius: "35px",
                            width: "16em",
                            height: "28.5em",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "200px",
                    marginTop: "30px",
                    backgroundColor: "#0099FF",
                  }}
                >
                  Play Now
                </button>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                <Row style={{ maxWidth: "100%" }}>
                  <h1
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    PENALTY SHOOT-OUT
                  </h1>
                  <ul className="game-widgets d-flex justify-content-center">
                    <li className="game-widget-item">
                      <span
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        RTP
                      </span>
                      <span
                        className="value white-txt"
                        style={{ color: "white" }}
                      >
                        96.00%
                      </span>
                    </li>

                    <li className="game-widget-item">
                      <span
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        MAX WIN
                      </span>

                      <span
                        className="value white-txt"
                        style={{ color: "white" }}
                      >
                        € 2,304
                      </span>
                    </li>
                  </ul>
                </Row>
                <Row>
                  <div className="game-info-rows" style={{ width: "100%" }}>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        CATEGORY
                      </div>
                      <div className="content">"Instant Games"</div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        RELEASE DATE
                      </div>
                      <div className="content">05.2020.</div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        TAGS
                      </div>
                      <div className="content">
                        <ul className="game-tags-top">
                          <li>
                            <a
                              className="game-tag-top"
                              style={{ transition: ".2s", cursor: "pointer" }}
                            >
                              Sports / Betting
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="game-info-row">
                      <div
                        className="name blue-txt"
                        style={{ color: "#0099fa" }}
                      >
                        LANGUAGES
                      </div>
                      <div className="content">"Instant Games"</div>
                    </div>
                  </div>
                </Row>
              </Row>
            </Col>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Description />
      </div>

      <SimilarGame />
      <Form />
    </>
  );
};
export default OneGames;
