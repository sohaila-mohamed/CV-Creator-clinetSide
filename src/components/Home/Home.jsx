import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import hero from "../../images/All.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import verified from "../../images/verified.svg";
import descImg_1 from '../../images/description/description-img1.png';
import number_01 from '../../images/description/01.png';

function Home() {
  return (
    <Fragment>
      <div className="card position-relative border-0 mb-3">
        <img src={hero} alt="hero" className="img-fluid w-100" id="heroimg" />
        <div className="card-img-overlay card-center-text p-0 d-flex">
          <div className="align-self-start">
            <p className="font">
              Build The Perfect Resume With Our Online Resume Maker
          </p>
            <p className="card-text font-textt">
              Get expert tips and step-by-step guidance on how to use our online
              resume maker to create the customized resume.
          </p>
            <Button className="btn-custom text-white">
              Build resume <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Button>
            <Button className="btn-custon-outline text-color">
              Show tempaltes{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Button>
          </div>
          <div className="position-absolute d-lg-flex cards-container align-self-end  d-md-flex d-sm-flex d-none " >
            <div
              className="Floating-card p-4 shadow position-relative align-self-end"

            >
              <p>Create Multiple Versions</p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
            <div
              className="Floating-card p-4 shadow position-relative align-self-center"

            >
              <p>Custom Layout</p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
            <div
              className="Floating-card p-4 shadow position-relative align-self-start"

            >
              <p
              >
                3 Page CV
              </p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-desc-section">
        <Container className="p-0 home-desc-container">
          <div className="row m-0">
            <div className="col-8 ml-1 ml-sm-0 d-flex">
              <span className="home-desc-header">How to make a resume?</span>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12  m-0 position-relative ">
              <img src={number_01} className="home-desc-numbers "/>
            </div>
          </div>
          <div className="row m-0 home-desc-line position-relative">
            <div className="col-lg-8 col-md-8 col-sm-8 col-12 home-desc-sideText ">
              <h1 >
                Register in a Flash
            </h1>
              <span>
                It only takes a couple of seconds to start using our online resum builder.
    The resume creator is offered completely through our website, meaning
     there is no software to download.
            </span>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-8 offset-2 offset-lg-0 offset-md-0  offset-sm-0 d-flex">
              <img src={descImg_1} className="home-desc-sideImg align-self-end"></img>

            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
export default Home;
