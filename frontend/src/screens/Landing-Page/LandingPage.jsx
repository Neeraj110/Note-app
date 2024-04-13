import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./landing.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div className="small">
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all note</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button variant="primary" size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Sign up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
