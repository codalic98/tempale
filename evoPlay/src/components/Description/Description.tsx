import "./description.css";
const Description: React.FC = () => {
  return (
    <section className="section-padding section-desc-game">
      <div className="container">
        <div className="desc-video-container">
          <h3 className="section-title desc-xs-title">Description</h3>
          <div className="desc-video-col desc-video-inner">
            <div className="desc-video-size">
              <img
                src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="desc-video-col desc-video-txt">
            <h3 className="section-title">Description</h3>
            <p>
              Do you like to play soccer? Are you the terror of your rivals? Or
              maybe you are an avid fan of your favorite football team? In any
              case, this game will satisfy both of thesepassions.
            </p>
            <p>
              Penalty shoot-out is a dynamic gambling instant game where you
              need to beat the goalkeeper, score a penalty shootout and get the
              prize! The rules of the game are simple and understandable for
              everyone. You need to choose the country for which you will play,
              make a bet, and start playing. You can select a specific area
              between the goalposts, or relying on the will of chance to send
              the ball to the goal and earn bonuses. Each goal scored will bring
              you a bonus, while winning the whole penalty shootout will give a
              super bonus.
            </p>
            <p>
              The game will amaze you with colorful animation, simple controls
              and a user-friendly interface, as well as delight with its fast
              gameplay.
            </p>
          </div>
        </div>
      </div>

      <div className="container container-fluid-xs">
        <div
          className="game-img-wrapper js-gallery-slider swiper-container swiper-container-initialized swiper-container-horizontal"
          id="js-gallery-slider"
        >
          <div
            className="game-img-slider swiper-wrapper"
            aria-live="off"
            style={{
              transition: " all 0ms ease 0s",
              transform: "translate3d(72.3333px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide game-img-slide swiper-slide-duplicate swiper-slide-active"
              data-swiper-slide-index="2"
              role="group"
              aria-label="1/4"
            >
              <a
                href="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                className="magnific-popup"
              >
                <img
                  src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="swiper-slide game-img-slide swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index="3"
              role="group"
              aria-label="2/4"
            >
              <a
                href="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                className="magnific-popup"
              >
                <img
                  src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="swiper-slide game-img-slide"
              data-swiper-slide-index="0"
              role="group"
              aria-label="3/4"
            >
              <a
                href="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                className="magnific-popup"
              >
                <img
                  src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="swiper-slide game-img-slide swiper-slide-duplicate-prev"
              data-swiper-slide-index="1"
              role="group"
              aria-label="4/4"
            >
              <a
                href="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                className="magnific-popup"
              >
                <img
                  src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg"
                  alt=""
                />
              </a>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
        <div className="pagination-game-wrapper">
          <div className="swiper-pagination pagination-game-img swiper-pagination-clickable swiper-pagination-bullets">
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              area-label="Go to slide 1"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              area-label="Go to slide 2"
            ></span>
            <span
              className="swiper-pagination-bullete"
              tabIndex={0}
              role="button"
              area-label="Go to slide 3"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              area-label="Go to slide 4"
            ></span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="game-links-row">
          <div className="product-row row">
            <div className="product-col-2">
              <a href="" className="btn-blue-xl-ico btn" target="_blank">
                <span className="txt">
                  Product
                  <br /> sheet
                </span>
              </a>
            </div>
            <div className="product-col-2">
              <a href="" className="btn-blue-xl-ico btn" target="_blank">
                <span className="txt">
                  Promotion
                  <br /> pack
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Description;
