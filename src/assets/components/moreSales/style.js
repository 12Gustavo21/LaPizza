import styled from "styled-components";

// images
import Bg from "../../img/bg.svg";

export const MoreSalesWrapper = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${Bg}) no-repeat center center/cover;
`;

export const MoreSlaesTitle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font: 600 2.5rem "Inter", sans-serif;
  }
`;
