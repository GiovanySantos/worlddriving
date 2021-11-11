import React, { useContext, useEffect } from "react";
import { ContinentsContext } from "../contexts/ContinentsContext";
import { Col, Container, Row } from "react-bootstrap";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import styledEngine from "@mui/styled-engine";

const CardContinent = styledEngine(Card)`
background: #292929;
color: #d4d4d4;
radius: 5px;
textAlign: center;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
`;

const CountryComponent = () => {
  const { countries } = useContext(ContinentsContext);

  return (
    <>
      <Container fluid>
        <Row className="p-5 d-flex justify-content-center align-items-center">
          {countries &&
            countries.map((country) => {
              return (
                <Col key={country.countryImageId}>
                  <CardContinent>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={`https://source.unsplash.com/${country.countryImageId}/1980x1024`}
                        alt="Continent"
                      />
                      <CardContent>
                        <Typography variant="h5">
                          {country.countryName}
                        </Typography>
                        <Typography variant="body2">
                          {country.countryDescription}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </CardContinent>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CountryComponent;
