import React, { useContext, useEffect } from "react";
import { ContinentsContext } from "../contexts/ContinentsContext.js";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import axios from "axios";

import ContinentComponent from "../components/ContinentComponent.js";
import Highlights from "../components/Highlights.js";

import styledEngine from "@mui/styled-engine";
import styled from "styled-components";

const Title = styled.h1`
  opacity: 0.8;
`;

const SearchField = styledEngine(Input)({
  color: "#ffffff",
  fontFamily: "inherit",
  fontSize: "30px",
  borderColor: "#ffffff",
});

const HeaderBox = styledEngine(Box)({
  display: "flex",
  alignItems: "flex-end",
});

const Home = () => {
  const { setContinents } = useContext(ContinentsContext);

  useEffect(() => {
    axios.get("/api/API.json").then((res) => {
      setContinents(res.data);
    });
  }, []);

  return (
    <Container fluid>
      <Row className="p-5 d-flex justify-content-center align-items-center">
        <Col md="3">
          <Title>World Driving</Title>
        </Col>
        <Col md="6" className="justify-content-center">
          <HeaderBox>
            <FontAwesomeIcon
              className="me-3 mb-2"
              icon={faMapMarked}
              size="2x"
              style={{ color: "#fafafa", opacity: "0.5" }}
            />
            <SearchField
              placeholder="Pesquisar"
              variant="standard"
              autoComplete="autoComplete_OFF"
            />
          </HeaderBox>
        </Col>
      </Row>
      <Row className="pb-5">
        <Highlights />
      </Row>
      <Row className="p-5">
        <ContinentComponent />
      </Row>
    </Container>
  );
};

export default Home;
