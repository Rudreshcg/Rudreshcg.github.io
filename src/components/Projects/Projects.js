import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projects = [
  {
    imgPath: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace built with React.js, Material-UI, and Firebase. Features real-time messaging, image sharing, and reactions.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "Personal blog page built with Next.js and Tailwind CSS, supports markdown-based blogging, dark mode, and easy content creation.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: editor,
    title: "Editor.io",
    description:
      "Online code and markdown editor with live preview, built using React.js. Supports HTML, CSS, JS, and auto-save using Local Storage.",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: leaf,
    title: "Plant AI",
    description:
      "Trained a CNN model using PyTorch to detect plant diseases from images. Achieved 98% accuracy using a ResNet34 pretrained model.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
  },
  {
    imgPath: suicide,
    title: "AI For Social Good",
    description:
      "Uses Natural Language Processing (NLP) to detect suicide-related posts and help in suicide prevention through early detection.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
    demoLink: "https://your-demo-link.com", // Add correct demo link here
  },
  {
    imgPath: emotion,
    title: "Face Recognition & Emotion Detection",
    description:
      "Trained a CNN model with the FER-2013 dataset to classify human emotions. Integrated OpenCV for real-time face detection.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    demoLink: "https://your-demo-link.com", // Add correct demo link here
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
                ghLink={project.ghLink}
                demoLink={project.demoLink}
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
