import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              HI THERE, <span className="purple"> I'M A DEVELOPER </span> WITH A PASSION FOR INNOVATION
            </h1>
            <p className="home-about-body">
              I love turning ideas into reality through clean, efficient, and scalable code.
              With a strong background in backend and full-stack development, I specialize in building high-performance applications.
              <br />
              <br />My core tech stack includes:
              <i>
                <b className="purple"> Python, Django, FastAPI, and React. </b>
              </i>
              <br />
              <br />
              I enjoy working on projects that involve:
              <i>
                <b className="purple"> Web Development, API Design, and Scalable Architectures. </b>
              </i>
              <br />
              <br />
              In addition to Python, I have hands-on experience with <b className="purple">Node.js</b>,
              and I love exploring modern JavaScript frameworks like
              <i>
                <b className="purple"> React.js </b>
              </i>
              to build dynamic and responsive user interfaces.
              <br />
              <br />
              Whether it's crafting robust backend systems or developing seamless frontend experiences,
              I'm always eager to learn and push the boundaries of technology.
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
                  href="https://github.com/Rudreshcg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rudreshcg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rudreshcg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thenameis_rudresh"
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
