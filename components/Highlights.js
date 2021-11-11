import React, { useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const CarouselContainer = styled.div`
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 0 #000;
`;
const Description = styled.p`
  font-size: 30px;
  text-shadow: -1px -1px 0 #000;
`;

const Highlights = () => {
  return (
    <>
      <CarouselContainer>
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <Image
              src={`https://source.unsplash.com/mOEqOtmuPG8/1920x465`}
              alt="First Country"
              width={1920}
              height={465}
              quality="100"
              layout="responsive"
            />
            <Carousel.Caption>
              <Title>London</Title>
              <Description>London is waiting for you</Description>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={`https://source.unsplash.com/SVVTZtTGyaU/1920x465`}
              alt="Second Country"
              width={1920}
              height={465}
              quality="100"
              layout="responsive"
            />
            <Carousel.Caption>
              <Title>New York</Title>
              <Description>New York is waiting for you</Description>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={`https://source.unsplash.com/hwLAI5lRhdM/1920x465`}
              alt="Third Country"
              width={1920}
              height={465}
              quality="100"
              layout="responsive"
            />
            <Carousel.Caption>
              <Title>Japan</Title>
              <Description>Japan is waiting for you</Description>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default Highlights;
