import "./similar.css";
import Carousel from "react-bootstrap/Carousel";

const SimilarGame: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h3 className="section-title text-center">Similar Game</h3>
        <div className="text-center">
          <a href="#" className="link-arrow">
            All Games
          </a>
        </div>
      </div>
      <div className="container-20 container-fluid-xs">
        <div className="swiper-container js-similar-slider">
          <div className="similar-games-wrapper swiper-wrapper">
            <div
              className="similar-game-item swiper-slide swiper-slide-active"
              role="group"
              aria-label="1/2"
            >
              <a href="#" className="game-box-link">
                <span className="similar-thumb-cropper">
                  <img
                    src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                    alt=""
                  />
                </span>
                <span className="btn btn-primary">Open</span>
              </a>
            </div>
            <div
              className="similar-game-item swiper-slide"
              role="group"
              aria-label="2/2"
            >
              <a href="#" className="game-box-link">
                <span className="similar-thumb-cropper">
                  <img
                    src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                    alt=""
                  />
                </span>
                <span className="btn btn-primary">Open</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SimilarGame;
