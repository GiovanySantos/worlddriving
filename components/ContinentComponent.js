import Link from "next/link";
import React, { useContext } from "react";
import { ContinentsContext } from "../contexts/ContinentsContext";
import { Col } from "react-bootstrap";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import styledEngine from "@mui/styled-engine";

const ContinentComponent = () => {
  const { continents, setContinentName, setCountries, setContinentBG } =
    useContext(ContinentsContext);

  const CardContinent = styledEngine(Card)`
      background: #292929;
      color: #d4d4d4;
      radius: 5px;
      textAlign: center;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
  `;

  return (
    <>
      {continents.map((continent) => {
        return (
          <Col key={continent.continentImageId}>
            <Link href={`/Continent`}>
              <CardContinent>
                <CardActionArea
                  onClick={() => {
                    setContinentName(continent.continentName);
                    setCountries(continent.continentCountries);
                    setContinentBG(continent.continentImageId);
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`https://source.unsplash.com/${continent.continentImageId}/1980x1024`}
                    alt="Continent"
                  />
                  <CardContent>
                    <Typography variant="h5">
                      {continent.continentName}
                    </Typography>
                    <Typography variant="body2">
                      {continent.continentDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </CardContinent>
            </Link>
          </Col>
        );
      })}
    </>
  );
};

export default ContinentComponent;
