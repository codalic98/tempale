import React, { useState, useEffect } from "react";
import "./description.css";
import Carousel from "react-bootstrap/Carousel";

const Description: React.FC = () => {
  const images = [
    "https://evoplay.games/wp-content/uploads/2021/03/1-27.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/4-10.png",
    "https://evoplay.games/wp-content/uploads/2021/03/1-27.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/4-10.png",
    "https://evoplay.games/wp-content/uploads/2021/03/1-27.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/4-10.png",
    "https://evoplay.games/wp-content/uploads/2021/03/1-27.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/3-23.png",
    "https://evoplay.games/wp-content/uploads/2021/03/4-10.png",
    // ...
  ];

  // State to hold the number of images per slide
  const [numberOfImagesPerSlide, setNumberOfImagesPerSlide] = useState(2);

  // Function to update the number of images per slide based on screen width
  const updateNumberOfImagesPerSlide = () => {
    const isDesktop = window.innerWidth;

    if (isDesktop <= 900) setNumberOfImagesPerSlide(isDesktop ? 2 : 1);
    if (isDesktop >= 1000) setNumberOfImagesPerSlide(isDesktop ? 3 : 1);
    if (isDesktop >= 1223) setNumberOfImagesPerSlide(isDesktop ? 4 : 1);
  };

  useEffect(() => {
    // Add event listener to update the number of images per slide on window resize
    window.addEventListener("resize", updateNumberOfImagesPerSlide);

    // Call the function once on component mount to set the initial value
    updateNumberOfImagesPerSlide();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNumberOfImagesPerSlide);
    };
  }, []);

  const carouselImages = images.slice(0, numberOfImagesPerSlide);

  return (
    <section className="section-padding section-desc-game">
      <div className="container">
        <div className="desc-video-container">
          <h3 className="section-title desc-xs-title">Description</h3>
          <div className="desc-video-col desc-video-inner">
            <div className="desc-video-size">
              <img
                src="https://evoplay.games/wp-content/uploads/2021/03/PenaltyShootOut_270x270.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="desc-video-col desc-video-txt">
            <h3 className="section-title">Description</h3>
            <p>
              Do you like to play soccer? Are you the terror of your rivals? Or
              maybe you are an avid fan of your favorite football team? In any
              case, this game will satisfy both of these passions.
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
        <Carousel data-bs-theme="dark" controls={false}>
          {/* Loop through images in groups of numberOfImagesPerSlide */}
          {carouselImages.map((_, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-group">
                {images
                  .slice(
                    index * numberOfImagesPerSlide,
                    (index + 1) * numberOfImagesPerSlide
                  )
                  .map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt=""
                      style={{
                        width: `calc(100% / ${numberOfImagesPerSlide})`,
                      }} // Adjust width based on the number of images per slide
                      className="imgSlide"
                    />
                  ))}
              </div>
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
