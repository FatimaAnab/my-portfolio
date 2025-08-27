import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AWS Serverless Ride Sharing website"
              description="Developed a serverless ride-sharing application leveraging 7 AWS services including Lambda, IAM, Cognito, Amplify, GitHub, CloudWatch, and DynamoDB. The app handles user authentication, ride booking, and monitoring seamlessly without traditional servers."
              ghLink="https://github.com/FatimaAnab/wildrydes-site11"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Amplify Vite react TO-DO website"
              description="A starter project built with React + Vite and AWS Amplify, designed for quick setup of authentication, API, and database. Pre-configured with Amazon Cognito for secure login, AWS AppSync for GraphQL APIs, and DynamoDB for real-time database functionality—making it scalable and developer-friendly."
              ghLink="https://github.com/FatimaAnab/amplify-vite-react-project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Capital Quiz"
              description="A fun web quiz app built with HTML, CSS, and JavaScript, where users test their knowledge of world capitals through interactive questions."
              ghLink="https://github.com/FatimaAnab/Capital-quiz"     
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
