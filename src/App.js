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
            <span className="heading-primary--main">
              La grande traversée européenne nord-sud du tourisme durable
            </span>
            <span className="heading-primary--sub">
              projet de développement du nouveau slow tourisme par la
              valorisation d'une culture commune européenne
            </span>
          </h1>
          <a href="#section-tours" className="btn btn--white btn--animated">
            voir mes compétences
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Editorial</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                La grande traversée européenne nord-sud du tourisme durable
              </h3>
              <p className="paragraph">
                J'ai toujours été plus proche de ce qui unit que de ce qui
                divise. J'ai construit une route Charlemagne pour unifier et
                féderer les peuples européens à partir de leur culture commune
                que l'on retrouve à partir de l'époque Carolingienne et des
                légendes qu'elle a produite dans toute les créations
                artistiques.
              </p>
              <p className="paragraph">
                J'ai matérialisé cette convergenace, cette collaboration sous un
                angle géographique, après avoir constaté que 8 routes
                Européennes culturelles et sportives avaient un trajet
                paralléle, convergeantr, alors qu'elles utilisaient souvent un
                moyen de locomotion différent et complémentaire.
              </p>
              <p className="paragraph">
                J'ai trouvé qu'il y avait matière en nous regroupant, à créér
                des services communs qui correspondent aux besoins primaires des
                randonneursquand ils se déplacent, c'est à dire ou manger, ou
                dormir, ou boire, ou trouver de l'ombre, ou réparer son vélo, ou
                soigner son cheval, etc.
              </p>
              <p className="paragraph">
                Mais l'Homme a aussi des besoins ou des désir d'appartenanc, des
                besoins d'estime de soin et d'accomplisssement. il s'enrichit
                par la Culture, marques sa satisfaction auprès des guides
                culturels chaque fois qu'il a pu bénéficier d'une visite.
              </p>
              <p className="paragraph">
                Le tourisme vert et durablepermet de diffuser aux randonneurs ou
                aux simples visiteurs la connaissance de leur histoire commune
                en marchant dans les traces du père de l'ERurope: Charlemagne,
                de ses épopées commes "les chansons de gestes", celle de Roland,
                celle de Renaud, du cheval Bayart, des légendes de Bretagnes
                avec Arthur, Lancelot, de Galaad, de la fée Morgane, de la reine
                Guenièvre, de l'enchanteur Merlin, des 9 Preux et des 9 Preuses.
              </p>
              <p className="paragraph">
                De suivre les aventures des 3 Mousquetaires qui renopuvelenbt le
                genre du romantisme et sont si emblématique de la construction
                européene part la devise "Un pour tous et tous pour un" qui
                semble avoir été écrite pour une équipe de Rugby. Les chemins de
                Saint Jacques de Compostelle et les multiples routes d'Eurovélo
                irriguent aussi largement les campagnes de toutes l'Europe.
              </p>
              <p className="paragraph">
                Toutes ces routes participent grandement à la diffusion de
                l'Esprit Européen, c'est pourquoi, j'ai proposé aux responsables
                de ces routes de nous regrouper afin de proposer à la commission
                européene ces aménagement communs pour découvrir l'Europe tout
                en préservant le plus possible son patrimoine et sa
                biodiversité.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Noël Orsat, coordonateur et fondateur du regroupement des
                acteurs de la Grande Traversée.
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
            <h2 className="heading-secondary">most weird trips</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-1">
                  <div className="card__picture card__picture--1">&nbsp;</div>

                  <h4 className="card__heading">
                    <span className="card__heading--span card__heading--span-1">
                      React / redux
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul className="">
                      <li className="">Wild Code School</li>
                      <li className="">Tricky</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">270$</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-2">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <div className="card__heading">
                    <span className="card__heading--span card__heading--span-2">
                      CSS / SASS
                    </span>
                  </div>
                  <div className="card__details">
                    <ul className="">
                      <li className="">Wild Code School</li>
                      <li className="">Tricky</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">270$</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front card__side--front-3">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <div className="card__heading">
                    <span className="card__heading--span card__heading--span-3">
                      nodeJS
                    </span>
                  </div>
                  <div className="card__details">
                    <ul className="">
                      <li className="">Wild Code School</li>
                      <li className="">Tricky</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">270$</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
