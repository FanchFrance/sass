import React from "react";
import logo from "./img/moino_white.svg";
import Bordeaux1 from "./img/Bordeaux_street.jpeg";
import Bordeaux2 from "./img/Bordeaux_statue.jpeg";
import Bordeaux3 from "./img/Bordeaux_sunnySide.jpeg";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { SiApachecloudstack } from "react-icons/si";

import "./sass/main.scss";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Bretagne</span>
            <span className="heading-primary--sub">
              la cote bretonne vu par des cons
            </span>
          </h1>
          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              exciting tour for adventurus people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                you're going to fall in love with me !
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident asperiores debitis in minima ex nemo, modi fugiat
                cupiditate est tempore ab id quos dolor nisi, sapiente ullam
                reiciendis, voluptatem assumenda?
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Have fun with me like you've never had before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi ipsa incidunt minima in?
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={Bordeaux1}
                  alt="photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={Bordeaux2}
                  alt="photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={Bordeaux3}
                  alt="photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <FaBeer className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the body
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <AiFillAlert className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the soul
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <BiAtom className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Blow the mind
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <SiApachecloudstack className="feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Free the beast
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              most weird trips
            </h2>
          </div>
          <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
        </div>
        </section>
      </main>

      {/* <section className="grid-test">
        <div className="row">
          <div className="col-1-of-2">Col 1 of 2</div>
          <div className="col-1-of-2">Col 1 of 2</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-1-of-3">Col 1 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">Col 1 of 3</div>
          <div className="col-2-of-3">Col 2 of 3</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-2-of-4">Col 2 of 4</div>
        </div>
        <div className="row">
          <div className="col-1-of-4">Col 1 of 4</div>
          <div className="col-3-of-4">Col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
