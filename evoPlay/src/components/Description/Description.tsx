import "./description.css";
import Carousel from "react-bootstrap/Carousel";

const Description: React.FC = () => {
  const images = [
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg", // Add other image URLs here
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/1:1/w_960,c_limit/100-best-games-hp-b.jpg",
    // ...
  ];
  const isDesktop = window.innerWidth >= 768;
  const numberOfImages = isDesktop ? 5 : 2;
  const carouselImages = images.slice(0, numberOfImages);

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
      <div className="container">
        {" "}
        <Carousel data-bs-theme="dark" controls={false}>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt=""
                style={{ width: "100px" }}
                className="imgSlide"
              />{" "}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <div className="game-links-row">
          <div className="product-row row">
            <a href="" className="btn-blue-xl-ico btn" target="_blank">
              <span className="txt">
                Product
                <br /> sheet
              </span>
            </a>

            <a href="" className="btn-blue-xl-ico btn" target="_blank">
              <span className="txt">
                Promotion
                <br /> pack
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Description;
