import styled from "styled-components";

export const HeartWrapper = styled.section`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: #FFD4C9;
  padding-top: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .2rem solid #FF3536;
  border-radius: 0.5rem;
`;

export const Heart = styled.div`
  svg {
    fill: #FF3536;
    stroke: #FF3536;
    transition: all 0.3s linear;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;