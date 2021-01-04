import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = props => {
  console.log(">>>>", props);
  return (
    <>
      <Img key={props.name} src={props.url} alt="" />
      <div>
        <div>{props.name}</div>
        <div>{props.created_at}</div>
      </div>
    </>
  );
};
