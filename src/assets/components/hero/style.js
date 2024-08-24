import styled from "styled-components";

// images
import herobg from "../../img/hero-bg.svg";

export const HeroWrapper = styled.header`
  width: 100%;
  height: 60vh;
  background: url(${herobg}) no-repeat center center/cover;

  @media only screen and (width <= 768px) {
    height: 40vh;
  }

  @media only screen and (width <= 500px) {
    height: 30vh;
  }
`;

export const LogoWrapper = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 65%;
    height: 65%;
  }
`;