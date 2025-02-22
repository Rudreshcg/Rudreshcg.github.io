import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import Particle from "../Particle";

import hackathonCashPrize from "../../Assets/Acheivements/hackathoncashprize.JPG";
import hackathonWinnerCerti from "../../Assets/Acheivements/hackathoncerti.JPG";
import quarterlyAward from "../../Assets/Acheivements/quarterlyaward.JPG";
import spotlightAward from "../../Assets/Acheivements/spotlight.JPG";

const achievements = [
  
  {
    imgPath: spotlightAward,
    title: "Spotlight Award",
    description: "Awarded for demonstrating exceptional problem-solving and leadership skills.",
  },
  {
    imgPath: hackathonCashPrize,
    title: "Hackathon Cash Prize",
    description: "Received a cash prize for winning the 2024 company-wide hackathon.",
  },
  {
    imgPath: quarterlyAward,
    title: "Committed Developer",
    description: "Recognized as a 'Committed Developer' for outstanding contributions in Q2 2024.",
  },
  {
    imgPath: hackathonWinnerCerti,
    title: "Hackathon Winner",
    description: "Won the 2024 company-wide hackathon for building an AI-powered automation tool.",
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
