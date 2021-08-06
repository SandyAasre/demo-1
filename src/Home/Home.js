import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyledContainer = styled.div`
  height: auto;
  width: 150px;
  margin: auto;
`;
const Home = () => {
  return (
    <>
      <Heading>
        Welcome to Food's <br /> Kitchen
      </Heading>
      <StyledContainer>
        <Button component={Link} to={'/product'} color="primary" variant="contained">Go To Menu</Button>
      </StyledContainer>
    </>
  );
};

export default Home;
