import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rudresh </span>
            from <span className="purple">Bengaluru, India.</span>
            <br />
            I am currently working as an Executive Software Engineer,
            where I specialize in designing and developing scalable solutions
            that drive efficiency and innovation.
            <br />
            With a Bachelor's degree in Engineering, I have built a strong
            foundation in software development, problem-solving, and system architecture.
            <br />
            <br />
            I am always eager to explore new technologies, optimize processes,
            and contribute to meaningful projects that make an impact.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, innovate with passion, and build for the future."
          </p>
          <footer className="blockquote-footer">Rudresh</footer>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
