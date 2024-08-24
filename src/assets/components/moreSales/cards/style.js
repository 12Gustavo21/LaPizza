import styled from "styled-components";

export const Card = styled.article`
  width: 17.5rem;
  height: 18.75rem;
  background-color: #fefbf4;
  border: 0.2rem solid #fff5de;
  border-radius: 1rem;
  position: relative;
  padding: 6rem 1rem 0 1rem;

  @media only screen and (width <= 768px) {
    background-color: rgba(254, 251, 244, .4);
  }
`;

export const PizzaWrapper = styled.figure`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const HeartWrapper = styled.div`
  position: absolute;
  top: -1rem;
  right: 1rem;

  .checked {
    padding-top: 0.2rem;
    justify-content: center;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const CardTitle = styled.div`
  font: 600 1.2rem "Inter", sans-serif;
  padding-bottom: 1rem;
`;

export const CardDescription = styled.div`
  font: 400 1.1rem/1.5rem "Inter", sans-serif;
`;

export const PizzaPrice = styled.div`
  font: 600 2rem "Inter", sans-serif;
  padding: 1rem 0;
`;

export const BuyNow = styled.div`
  position: absolute;
  bottom: -1rem;

  button {
    cursor: pointer;
    width: 13rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    border: 0;
    background-color: #ffbd48;
    font: 600 1rem "Inter", sans-serif;
    text-transform: uppercase;
  }
`;
