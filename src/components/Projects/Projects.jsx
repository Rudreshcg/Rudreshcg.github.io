import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tireplanet from "../../Assets/Projects/tireplanet.png";
import dktire from "../../Assets/Projects/dktire.png";
import secprism from "../../Assets/Projects/secprism.png";
import tvashta from "../../Assets/Projects/tvashta.png";
import sportsblog from "../../Assets/Projects/sportsblog.png";
import mikloset from "../../Assets/Projects/mikloset.png";

const projects = [
  {
    imgPath: mikloset,
    title: "MikloSet",
    description:
      "MikloSet is a digital closet platform that helps users manage, organize, and plan their outfits efficiently.",
  },

  {
    imgPath: tvashta,
    title: "Tvashta",
    description:
      "Tvashta is an interior design company website showcasing modern and elegant design solutions for homes and offices.",
  },
  {
    imgPath: sportsblog,
    title: "SportsBlog",
    description:
      "SportsBlog is a blogging platform where users can write sports-related blogs and earn revenue from their content.",
  },

  {
    imgPath: tireplanet,
    title: "TirePlanet",
    description:
      "TirePlanet is a tires e-commerce website catering to business-to-customer (B2C) transactions, offering a seamless shopping experience.",
  },
  {
    imgPath: dktire,
    title: "DK Tire",
    description:
      "DK Tire is a tires e-commerce platform designed for business-to-business (B2B) transactions, providing bulk purchasing options.",
  },
  {
    imgPath: secprism,
    title: "SecPrism",
    description:
      "SecPrism is a security lifecycle management platform that helps organizations manage application security efficiently.",
  },
];


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                // ghLink={project.ghLink}
                // demoLink={project.demoLink}
                isBlog={false}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
