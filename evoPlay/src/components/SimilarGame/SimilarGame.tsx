import "./similar.css";

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
                    src="https://evoplay.games/wp-content/uploads/2021/03/PenaltyShootOut_270x270.jpg"
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
                    src="https://evoplay.games/wp-content/uploads/2021/03/PenaltyShootOut_270x270.jpg"
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
