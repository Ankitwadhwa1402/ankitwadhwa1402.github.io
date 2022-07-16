import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dairy from "../../Assets/Projects/Interactive-dairy.png";
import StockPricePrediction from "../../Assets/Projects/StockPricePrediction.png";
import Tableau from "../../Assets/Projects/Tableau.png";

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
              imgPath={Tableau}
              isBlog={false}
              title="Tableau"
              description="Made Covid-19 Dashboards using tableau in which we can
              analyse the number of Confirmed cases, Number of Recovered
              cases for various states.Also made one more Dashboard on various states forRecovery ,
              death"
              demoLink="https://ankitwadhwa1402.github.io/Covid-19_Dashboard/tableau1.html"
              // ghLink="https://ankitwadhwa1402.github.io/Covid-19_Dashboard/tableau.html"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockPricePrediction}
              isBlog={false}
              title="Stock Price Prediction"
              description={"Predict future Price of stock on previous days data using Machine learning.Achieve 93% Accuracy"}
              ghLink="https://github.com/Ankitwadhwa1402/Stock-Price-Prediction"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dairy}
              isBlog={false}
              title="Interactive-Diary"
              description="You Can Add your story with discription & tags and later on edit it also."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
