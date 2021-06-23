import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navigator.css";
function Navigator() {
  const history = useHistory();
  const backHomeHandler = () => {
    history.push("/");
  };

  return (
    <div className="navigator-container ">
      <div className="cv-image-upload">
        Upload Your Image
        {/* <input type="file" /> */}
      </div>

      {/* <div className="each-section">Education</div> */}

      <div className="each-section">
        <NavLink
          to="/Editor/PersonalInfo"
          exact
          className="each-section-link"
          activeClassName="active-route"
        >
          Personal <br /> information
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Career-objective"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Career <br />
          Objective
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Education"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Education
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Experiences"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Experiences
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Projects"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Projects
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Skills"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Skills
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Languages"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Courses
        </NavLink>
      </div>

      <div className="each-section">
        <NavLink
          to="/Editor/Languages"
          className="each-section-link"
          exact
          activeClassName="active-route"
        >
          Languages
        </NavLink>
      </div>

      <div className="back-home-icon" onClick={backHomeHandler}>
        <FontAwesomeIcon icon={faHome} size="2x" />
      </div>
    </div>
  );
}

export default Navigator;
