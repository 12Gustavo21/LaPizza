import styled from "styled-components";

// images
import Bg from "../../img/bg.svg";

export const MoreSalesWrapper = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${Bg}) no-repeat center center/cover;

  @media only screen and (width <= 1220px) {
    height: auto;
    padding: 7rem 0;
  }
`;

export const MoreSlaesTitle = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font: 600 2.5rem "Inter", sans-serif;
  }

  @media only screen and (width <= 1220px) {
    padding-bottom: 6rem;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7rem 2rem;
`;
