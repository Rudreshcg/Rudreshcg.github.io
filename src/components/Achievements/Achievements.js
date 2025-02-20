import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import Particle from "../Particle";

// Import your award images
import performanceAward from "../../Assets/Projects/leaf.png";
import hackathonWinner from "../../Assets/Projects/leaf.png";
import quarterlyAward from "../../Assets/Projects/leaf.png";

const achievements = [
  {
    imgPath: hackathonWinner,
    title: "Hackathon Winner",
    description: "Won the 2024 company-wide hackathon for building an AI-powered automation tool.",
  },
  {
    imgPath: performanceAward,
    title: "Performance Award",
    description: "Recognized as a 'Committed Developer' for outstanding contributions in Q2 2024.",
  },
  {
    imgPath: quarterlyAward,
    title: "Quarterly Excellence Award",
    description: "Awarded for continuous innovation and problem-solving capabilities in the team.",
  },
];

function Achievements() {
  return (
    <Container fluid className="achievements-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some awards and recognitions I have received.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {achievements.map((achievement, index) => (
            <Col md={4} className="project-card" key={index}>
              <AchievementCard
                imgPath={achievement.imgPath}
                title={achievement.title}
                description={achievement.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
