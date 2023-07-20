import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./cards.css";
import { Link } from "react-router-dom";

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
    "https://lumiere-a.akamaihd.net/v1/images/sw-jedi-survivor-key-art-1080x1080_c38222d5.jpeg?region=0%2C0%2C1080%2C1080",
    "https://lumiere-a.akamaihd.net/v1/images/star-wars-outlaws-key-art-square_b893fc9e.jpeg?region=0%2C0%2C1080%2C1080",
    "https://insomniac.games/wp-content/uploads/2020/10/msm_remastered_keyart_square_1080x1080.jpg",
    "https://evoplay.games/wp-content/uploads/2021/03/PenaltyShootOut_270x270.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/sw-jedi-survivor-key-art-1080x1080_c38222d5.jpeg?region=0%2C0%2C1080%2C1080",
    "https://lumiere-a.akamaihd.net/v1/images/star-wars-hunters-poster-2983_b0_bda3b35f.jpeg?region=0%2C0%2C864%2C864",
    "https://lumiere-a.akamaihd.net/v1/images/sw-s-key-art-rgb_8a2e03ab_08d7ebb1.jpeg?region=0%2C0%2C1000%2C1000",
  ];

  const grid = [];

  for (let i = 0; i < 11; i++) {
    if (i % 3 === 0 && i < 3) {
      // For the first three rows with even i values, render one big image and four small images
      grid.push(
        <div className="row grid-row" key={i}>
          <div className="col-lg-6 col-sm-6 mb-3">
            {/* Big Image */}
            <div className="image-container">
              <img
                src={imageUrls[i % imageUrls.length]}
                alt={`Image ${i + 1}`}
                className="img-fluid"
              />
              {/* Overlay and Buttons */}
              <div className="overlay">
                <div className="game-name">GAMES</div>
                <button
                  style={{
                    marginBottom: "10px",
                    backgroundColor: "#0099fa !important",
                  }}
                  className="btn btn-secondary"
                >
                  Play Now
                </button>
                <Link to="/oneGames" className="btn btn-secondary">
                  GAME INFO
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="row">
              {[1, 2, 3, 4].map((j) => (
                // Four Small Images
                <div className="col-lg-6 col-sm-6 mb-3" key={j}>
                  <div className="image-container">
                    <img
                      src={imageUrls[(i + j) % imageUrls.length]}
                      alt={`Image ${i + j + 2}`}
                      className="img-fluid"
                    />
                    {/* Overlay and Buttons */}
                    <div className="overlay">
                      <div className="game-name">GAMES</div>
                      <button
                        className="btn btn-secondary"
                        style={{
                          marginBottom: "10px",
                          backgroundColor: "#0099fa !important",
                        }}
                      >
                        Play Now
                      </button>
                      <Link to="/oneGames" className="btn btn-secondary">
                        GAME INFO
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (i >= 3 && i % 4 === 1) {
      // For rows after the third row and when i is divisible by 4, render four cards in a row
      grid.push(
        <div className="row grid-row" key={i}>
          {[0, 1, 2, 3].map((j) => (
            <div className="col-lg-3 col-sm-6 mb-3" key={j}>
              <div className="image-container">
                <img
                  src={imageUrls[(i + j) % imageUrls.length]}
                  alt={`Image ${i + j + 1}`}
                  className="img-fluid"
                />
                {/* Overlay and Buttons */}
                <div className="overlay">
                  <div className="game-name">GAMES</div>
                  <button
                    style={{
                      marginBottom: "10px",
                      backgroundColor: "#0099fa !important",
                    }}
                    className="btn btn-secondary"
                  >
                    Play Now
                  </button>
                  <Link to="/oneGames" className="btn btn-secondary">
                    GAME INFO
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
