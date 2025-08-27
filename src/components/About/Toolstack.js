import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { FaLinux } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />    
       </Col>

      <Col xs={4} md={2} className="tech-icons">
         < FaLinux />    
      </Col>

      <Col xs={4} md={2} className="tech-icons">
         <FaDocker />    
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /> 
       </Col>
       <Col xs={4} md={2} className="tech-icons">
           <FaJenkins />  
       </Col>



      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
