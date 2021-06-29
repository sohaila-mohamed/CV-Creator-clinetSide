import "./profile.css";
// import "./profileResponsive.css";
import settings from "./assets/settings 1.svg";
import logout from "./assets/logout 1.svg";
import avatar from "./assets/emily.jpeg";
import share from "./assets/share 1.svg";
import view from "./assets/view 2.svg";
import download from "./assets/download 1.svg";
import cv1 from "./assets/cv1.jpg";
import cv2 from "./assets/cv2.png";
import addSign from "./assets/add 1.svg";
import uploadIco from "./assets/upload.svg";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
  return (
    <div>
      <div className="cover d-flex flex-column">
        <p className="text-uppercase text-center justify-content-end mt-5 pt-5">
          {" "}
          cover image
        </p>
        <label htmlFor="coverImg ">
          <img
            src={uploadIco}
            alt="Uploaded"
            className="d-none d-lg-block d-md-block w-50"
          />
        </label>
        {/* <input type="file" className="align-content-end" id="coverImg" /> */}
      </div>
      <Row>
        <Col lg="3" className="position-relative">
          <div className="sideNav d-lg-inline-block d-md-inline-block d-none">
            <div className="d-lg-flex d-md-flex align-items-center justify-content-center">
              <img
                alt="avatar"
                className="rounded-circle sideNav__profilePic d-block"
                src={avatar}
              />
            </div>
            <p className="sideNav__profileName text-uppercase">emily blunt</p>
            <div className="ml-5 mb-3 mr-5">
              <div className="sideNav__type1 shadow pl-3 pl-lg-2 pb-2 pr-5 mb-3">
                <a href="#" className="font-weight-bold text-uppercase ">
                  my cv's
                </a>
              </div>
              <div className="sideNav__type2 pb-1 mb-3">
                <a href="#" className="text-uppercase">
                  cv creator
                </a>
              </div>
              <div className="sideNav__type2 pb-1 mb-3">
                <a href="#" className="text-uppercase">
                  best practices guide
                </a>
              </div>
              <div className="mt-5">
                <a href="#" className="sideNav__type3 text-uppercase">
                  <img src={settings} alt="settings" />
                  settings
                </a>
              </div>
              <div className="mt-3">
                <a href="#" className="sideNav__type3 text-uppercase">
                  <img src={logout} alt="logout" />
                  logout
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="9">
          <div className="d-flex justify-content-center text-uppercase mt-5 mb-5">
            <div className="cvContainerLabel w-75 shadow p-3 Custom-Container">
              <p className="m-0">profile / my CV's</p>
            </div>
          </div>

          <div className="d-flex flex-wrap row-cols-4 justify-content-center mb-5">
            <Card
              className="w-25 border-custom mr-1 apper mb-5 mr-3"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={cv2}
                className=" img-fluid  p-2 "
                style={{ background: "#6b82b7" }}
              />
              <div className="cvContainer__cvCard__panel d-flex align-items-center justify-content-center">
                <img alt="hover" src={share} className="mr-4" />
                <img alt="hover" src={view} className="mr-4" />
                <img alt="hover" src={download} className="mr-4" />
              </div>
            </Card>
            <Card
              className="w-25   border-custom mr-1 apper mb-5 mr-3"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={cv2}
                className=" img-fluid  p-2 "
                style={{ background: "#6b82b7" }}
              />
              <div className="cvContainer__cvCard__panel d-flex align-items-center justify-content-center">
                <img alt="hover" src={share} className="mr-4" />
                <img alt="hover" src={view} className="mr-4" />
                <img alt="hover" src={download} className="mr-4" />
              </div>
            </Card>
            <Card
              className="w-25  border-custom mr-1 apper mb-5 mr-3"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={cv2}
                className=" img-fluid  p-2 "
                style={{ background: "#6b82b7" }}
              />
              <div className="cvContainer__cvCard__panel d-flex align-items-center justify-content-center">
                <img alt="hover" src={share} className="mr-4" />
                <img alt="hover" src={view} className="mr-4" />
                <img alt="hover" src={download} className="mr-4" />
              </div>
            </Card>
            <Card
              className="p-5 border-custom align-items-center justify-content-center"
              style={{ width: "18rem" }}
            >
              <p
                className="mt-5 text-capitalize font-weight-bold pl-2"
                style={{ color: " #6b82b7" }}
              >
                create new for new job profile
              </p>
              <Card.Img
                src={addSign}
                className="mb-4"
                variant="top"
                style={{ width: "55px" }}
              ></Card.Img>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
