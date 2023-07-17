import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./cards.css";

const Cards: React.FC = () => {
  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1";
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  const imageUrls = [
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
  ];

  const grid = [];

  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      grid.push(
        <div className="row grid-row" key={i}>
          <div className="col-lg-6 col-sm-6 mb-3">
            <div className="image-container">
              <img
                src={imageUrls[i % imageUrls.length]}
                alt={`Image ${i + 1}`}
                className="img-fluid"
              />
              <div className="overlay">
                <div className="game-name">GAMES</div>
                <button className="btn btn-primary">Play Now</button>
                <button className="btn btn-secondary">Game Info</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 1) % imageUrls.length]}
                    alt={`Image ${i + 2}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 2) % imageUrls.length]}
                    alt={`Image ${i + 3}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 3) % imageUrls.length]}
                    alt={`Image ${i + 4}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 4) % imageUrls.length]}
                    alt={`Image ${i + 5}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      grid.push(
        <div className="row grid-row" key={i}>
          <div className="col-lg-6 col-sm-6">
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[i % imageUrls.length]}
                    alt={`Image ${i + 1}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 1) % imageUrls.length]}
                    alt={`Image ${i + 2}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 2) % imageUrls.length]}
                    alt={`Image ${i + 3}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-3">
                <div className="image-container">
                  <img
                    src={imageUrls[(i + 3) % imageUrls.length]}
                    alt={`Image ${i + 4}`}
                    className="img-fluid"
                  />
                  <div className="overlay">
                    <div className="game-name">GAMES</div>
                    <button className="btn btn-primary">Play Now</button>
                    <button className="btn btn-secondary">Game Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mb-3">
            <div className="image-container">
              <img
                src={imageUrls[(i + 4) % imageUrls.length]}
                alt={`Image ${i + 5}`}
                className="img-fluid"
              />
              <div className="overlay">
                <div className="game-name">GAMES</div>
                <button className="btn btn-primary">Play Now</button>
                <button className="btn btn-secondary">Game Info</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container">
      {grid}

      <div className="d-flex justify-content-center">
        <div
          className="card mb-3"
          style={{
            maxWidth: "540px",
            margin: "20px",
            backgroundColor: "whitesmoke",
          }}
        ></div>
      </div>
      <br />

      <br />
    </div>
  );
};

export default Cards;
