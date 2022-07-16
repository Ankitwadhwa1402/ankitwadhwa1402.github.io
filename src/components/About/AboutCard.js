import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Wadhwa </span>
            from <span className="purple"> Sonipat, Haryana, India.</span>
            <br />I am final year Information Technology Undergraduate Student from UIET, 
            Panjab University
            Chandigarh.
            <br />
            <br />
            I've done Projects in Machine Learning and Web Development apart from these, some other activities that I love to do!
          </p>
          <ul>
       
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Loves to convert ideas into code!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
