import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/anab1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Computer Science undergraduate who fell in love with programming and
              technology. 
              <br />
              <br />I am currently learning and working on AWS and DevOps Technologies.
              <i>
                <b className="purple"> AWS, Docker, Kubernetes, Jenkins and Linux. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">web applications, automating deployments, and 
                   exploring tools like Docker, Kubernetes, and Jenkins </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Development.
                </b>
              </i>
              <br /> 
              <br />
              I am always eager to learn new technologies and use them to solve real-world problems while growing as a  
              <b className="purple"> Cloud</b> and
              <i>
                <b className="purple">
                  {" "}
                  DevOps Enthusiast
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FatimaAnab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fatima-anab-3ba34a299/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fatimaanabbb/?next=%2F&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
