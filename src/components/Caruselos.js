import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import toronto1 from "../images/carousel-sources/toronto1.jpg";
import toronto2 from "../images/carousel-sources/toronto2.jpg";
import toronto4 from "../images/carousel-sources/toronto4.jpg";
import toronto3 from "../images/carousel-sources/toronto3.jpg";
import montreal1 from "../images/carousel-sources/montreal1.jpg";
import montreal2 from "../images/carousel-sources/montreal2.jpg";
import bear1 from "../images/carousel-sources/bear1.jpg";
import cougar from "../images/carousel-sources/cougar.jpg";
import moose from "../images/carousel-sources/moose.jpg";
import calgary from "../images/carousel-sources/calgary.jpg";
import edmonton from "../images/carousel-sources/edmonton.jpg";
import vancouver from "../images/carousel-sources/vancouver.jpg";
import icefishing from "../images/carousel-sources/ice-fishing.jpg";
import ontariofishing from "../images/carousel-sources/ontario-fishing.jpg";

const Caruselos = () => {
  return (
    <section id="caruselos">
      <div className="container">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide d-none d-lg-block"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto1}
                      alt="Toronto 1 Skyline"
                    />
                    <p>
                      <small>Toronto 1 Skyline</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto2}
                      alt="Toronto 2 Skyline"
                    />
                    <p>
                      <small>Toronto 2 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto3}
                      alt="Toronto 3 Skyline"
                    />
                    <p>
                      <small>Toronto 3 Skyline</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto4}
                      alt="Toronto 4 Skyline"
                    />
                    <p>
                      <snall>Toronto 4 Skyline</snall>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={montreal1}
                      alt="Montreal 1 Skyline"
                    />
                    <p>
                      <small>Montreal 1 Skyline</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={montreal2}
                      alt="Montreal 2 Skyline"
                    />
                    <p>
                      <small>Montreal 2 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={bear1}
                      alt="Bear"
                    />
                    <p>
                      <small>Big Bear</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={cougar}
                      alt="Cougar"
                    />
                    <p>
                      <small>Cougar</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={moose}
                      alt="Moose"
                    />
                    <p>
                      <small>Moose</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={calgary}
                      alt="Calgary Skyline"
                    />
                    <p>
                      <small>Calgary Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={edmonton}
                      alt="Edmonton Skyline"
                    />
                    <p>
                      <small>Edmonton Skyline</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={vancouver}
                      alt="Vancouver Skyline"
                    />
                    <p>
                      <small>Vancouver Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={icefishing}
                      alt="Ice Fishing"
                    />
                    <p>
                      <small>Ice Fishing</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={ontariofishing}
                      alt="Ontario Fishing"
                    />
                    <p>
                      <small>Ontario Fishing</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

          <div
            id="carouselExampleControlsSmallScreen"
            className="carousel carousel-dark slide d-md-block d-lg-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto1}
                      alt="Toronto 1 Skyline"
                    />
                    <p>
                      <small>Toronto 1 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto2}
                      alt="Toronto 2 Skyline"
                    />
                    <p>
                      <small>Toronto 2 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto3}
                      alt="Toronto 3 Skyline"
                    />
                    <p>
                      <small>Toronto 3 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={toronto4}
                      alt="Toronto 4 Skyline"
                    />
                    <p>
                      <small>Toronto 4 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={montreal1}
                      alt="Montreal 1 Skyline"
                    />
                    <p>
                      <small>Montreal 1 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={montreal2}
                      alt="Montreal 2 Skyline"
                    />
                    <p>
                      <small>Montreal 2 Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={bear1}
                      alt="Bear"
                    />
                    <p>
                      <small>Big Bear</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={cougar}
                      alt="Cougar"
                    />
                    <p>
                      <small>Cougar</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={moose}
                      alt="Moose"
                    />
                    <p>
                      <small>Moose</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={calgary}
                      alt="Calgary Skyline"
                    />
                    <p>
                      <small>Calgary Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={edmonton}
                      alt="Edmonton Skyline"
                    />
                    <p>
                      <small>Edmonton Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={vancouver}
                      alt="Vancouver Skyline"
                    />
                    <p>
                      <small>Vancouver Skyline</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={icefishing}
                      alt="Ice fishing"
                    />
                    <p>
                      <small>Ice Fishing</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={ontariofishing}
                      alt="Ontario Fishing"
                    />
                    <p>
                      <small>Ontario Fishing</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleControlsSmallScreen"
              role="button"
              data-bs-target="#carouselExampleControlsSmallScreen"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControlsSmallScreen"
              role="button"
              data-bs-target="#carouselExampleControlsSmallScreen"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caruselos;
