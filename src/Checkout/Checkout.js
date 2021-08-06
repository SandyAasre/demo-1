import React, { useEffect } from "react";
import styled from "styled-components";

const Paper = styled.div`
  height: 50vh;
  width: 60%;
  margin: 20px auto;
  background-color: white;
  box-shadow: 10px -45px -45px 15px #f2f2f2;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`;
const Checkout = () => {
  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (!auth || auth === "false") {
      this.props.history.push("/login");
    }
  }, []);
  return (
    <Paper>
      <h1>Checkout </h1>
      <h4>Thank you for your order</h4>
    </Paper>
  );
};

export default Checkout;
