import styled from "styled-components";

// images
import herobg from "../../img/hero-bg.svg";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 60vh;
  background: url(${herobg}) no-repeat center center/cover;
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