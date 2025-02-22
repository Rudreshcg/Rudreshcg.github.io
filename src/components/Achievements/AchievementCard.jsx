import React from "react";
import Card from "react-bootstrap/Card";

function AchievementCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="achievement-img" />
            <Card.Body>
                <Card.Title className="purple" style={{fontWeight: 600}}>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AchievementCard;

