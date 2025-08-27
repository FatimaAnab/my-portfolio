import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fatima Anab </span>
            from <span className="purple"> Bareilly, India.</span>
            <br />
            I am a CSE Ungergraduate currently learning and working on DevOps and AWS.
            <br />
            I'm pursuing my B-Tech from SRMS college of Engineering, Technology and Research, Bareilly.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web series and Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fatima Anab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
