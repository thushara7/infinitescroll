import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  padding: 20px;
  margin: -20px auto;
  text-align: center;
  color: white;
`;

const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 1em;
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Thushara Joseph</H1>
      <p>The Infinite scroll gallery</p>
    </Header>
  );
};
