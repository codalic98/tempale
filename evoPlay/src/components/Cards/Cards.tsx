import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css";
import img from "../../assets/aaa.jpg";

const Cards = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card">
              <div className="card-img-top">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card">
              <div className="card-img-top">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card">
              <div className="card-img-top">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card">
              <div className="card-img-top">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card text-center">
              <div className="card-img-top text-center">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-3">
            <div className="card custom-card">
              <div className="card-img-top">
                <img src={img} alt="Slika" />
              </div>

              <div className="card-body text-center">
                <p className="card-text">GAMES</p>
                <button className="btn btn-primary">Dugme 1</button>
                <br />
                <br />
                <button className="btn btn-secondary">Dugme 2</button>
              </div>
            </div>
          </div>
          {/* Dodajte ostale kartice ovde */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
