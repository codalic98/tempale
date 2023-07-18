import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./cards.css";
import { Col, Container, Row } from "react-bootstrap";

const Cards: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1";
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageUrls = [
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg", // Add more image URLs as needed
    // ...
  ];

  const repeatArray = (array: any[], times: number) => {
    const repeatedArray: any[] = [];
    for (let i = 0; i < times; i++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      repeatedArray.push(...array);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return repeatedArray;
  };

  const repeatedImageUrls = repeatArray(imageUrls, 40);

  const isMobileView = windowWidth < 768;

  return (
    <Container>
      {isMobileView ? (
        <Row className="grid-row">
          {repeatedImageUrls.map((imageUrl, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3}>
              <div className="image-container">
                <img
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="img-fluid"
                  style={{ margin: "5px" }}
                />
                <div className="overlay">
                  <div className="game-name">GAMES</div>
                  <button className="btn btn-primary">Play Now</button>
                  <button className="btn btn-secondary">Game Info</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <Row className="grid-row">
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className="image-container">
                <img
                  src={imageUrls[0]}
                  alt="Image 1"
                  className="img-fluid"
                  style={{ margin: "5px" }}
                />
                <div className="overlay">
                  <div className="game-name">GAMES</div>
                  <button className="btn btn-primary">Play Now</button>
                  <button className="btn btn-secondary">Game Info</button>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="grid-row">
            <Col xs={6} sm={6} md={6} lg={6}>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className="image-container">
                <img
                  src={imageUrls[0]}
                  alt="Image 1"
                  className="img-fluid"
                  style={{ margin: "5px" }}
                />
                <div className="overlay">
                  <div className="game-name">GAMES</div>
                  <button className="btn btn-primary">Play Now</button>
                  <button className="btn btn-secondary">Game Info</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="grid-row">
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className="image-container">
                <img
                  src={imageUrls[0]}
                  alt="Image 1"
                  className="img-fluid"
                  style={{ margin: "5px" }}
                />
                <div className="overlay">
                  <div className="game-name">GAMES</div>
                  <button className="btn btn-primary">Play Now</button>
                  <button className="btn btn-secondary">Game Info</button>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="image-container">
                    <img
                      src={imageUrls[0]}
                      alt="Image 1"
                      className="img-fluid"
                      style={{ margin: "5px" }}
                    />
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button className="btn btn-primary">Play Now</button>
                      <button className="btn btn-secondary">Game Info</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="grid-row">
            {repeatedImageUrls.map((imageUrl, index) => (
              <Col key={index} xs={6} sm={6} md={4} lg={3}>
                <div className="image-container">
                  <img
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                    style={{ margin: "5px" }}
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}

      <div className="d-flex justify-content-center">
        <div
          className="card mb-3"
          style={{
            maxWidth: "800px",
            margin: "20px",
            backgroundColor: "whitesmoke",
          }}
        ></div>
      </div>
    </Container>
  );
};

export default Cards;
