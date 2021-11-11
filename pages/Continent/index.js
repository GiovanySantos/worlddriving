import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import CountryComponent from "../../components/CountryComponent";
import { ContinentsContext } from "../../contexts/ContinentsContext";

const Continent = () => {
  const { continentName, continentBG } = useContext(ContinentsContext);

  const ContinentTitle = styled.h1`
    margin: 50px;
    font-size: 80px;
  `;

  const Background = styled.div`
    background-image: linear-gradient(0deg, #3b3e65, rgba(0, 0, 0, 0)),
      url("https://source.unsplash.com/${continentBG}/1920x1080");

    height: 100vh;
  `;

  return (
    <Background>
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center text center">
            <ContinentTitle>{continentName}</ContinentTitle>
          </Col>
        </Row>
        <Row>
          <CountryComponent />
        </Row>
      </Container>
    </Background>
  );
};

export default Continent;
