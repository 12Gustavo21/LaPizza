import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FEFBF4;

  @media only screen and (width <= 1000px) {
    height: auto;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media only screen and (width <= 1000px) {
    width: 95%;
    flex-direction: column; 
    gap: 3rem;
  }
`;

export const Landscape = styled.figure`
  width: 80%;
  height: 31.25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media only screen and (width <= 1000px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  font-family: "Inter", sans-serif;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  button {
    width: 12rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 1s all ease;
  }

  button:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffbd48;
    border-radius: 10rem;
    z-index: -2;
  }

  button:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #60bb28;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }

  button:hover:before {
    width: 100%;
  }

  @media only screen and (width <= 1000px) {
    gap: 2rem;
    padding-bottom: 3rem; 
  }
`;
