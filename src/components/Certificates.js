// src/components/Certificates.js
import React from "react";
import cert1 from "../Assets/Linux.png";
import cert2 from "../Assets/IBM.png";
import cert3 from "../Assets/AWS.png";
import cert4 from "../Assets/Docker.png";
import cert5 from "../Assets/python-internship.png";
import cert6 from "../Assets/web-development.png";
import cert7 from "../Assets/python.png";
import cert8 from "../Assets/Postman.png";

import { Container, Row, Col, Card } from "react-bootstrap";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certificates I have earned.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert1} />
              <Card.Body>
                <Card.Title>Complete Linux Training Course Certificate </Card.Title>
                <Card.Text>
                  Issued by Udemy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
             <Card.Img variant="top" src={cert2} />
              <Card.Body>
                <Card.Title>IBM PBEL Internship Certificate in Cloud Computing</Card.Title>
                <Card.Text>
                  Issued by IBM
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert3} />
              <Card.Body>
                <Card.Title>AWS Cloud Practioner Essential </Card.Title>
                <Card.Text>
                  Issued by AWS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

           <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert4} />
              <Card.Body>
                <Card.Title>Fundamentals of Docker and Kubernetes </Card.Title>
                <Card.Text>
                  Issued by Scaler
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert5} />
              <Card.Body>
                <Card.Title>Python Internship Certificate </Card.Title>
                <Card.Text>
                  Issued by Softpro PVT. LTD.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert6} />
              <Card.Body>
                <Card.Title>Complete Web development Bootcamp Certificate </Card.Title>
                <Card.Text>
                  Issued by Udemy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert7} />
              <Card.Body>
                <Card.Title>Python Programming Language Certificate</Card.Title>
                <Card.Text>
                  Issued by Softpro PVT.LTD.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="project-card-view">
                <Card.Img variant="top" src={cert8} />
              <Card.Body>
                <Card.Title>Postman API Fundamental Student Expert </Card.Title>
                <Card.Text>
                  Issued by Postman
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;

