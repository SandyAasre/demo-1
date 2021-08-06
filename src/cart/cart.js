import React, { useContext } from "react";
import ProductCard from "../Card/Card";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "../context/context";

import SimpleModal from "../CustomModal/CustomModal";
const ProductContainer = styled.div`
  height: auto;
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const H2 = styled.h2`
  text-align: center;
`;
const Cart = () => {
  const cardProduct = useContext(ProductsContext).products.filter((value) => {
    if (value.quantity > 0) {
      return value;
    }
  });

  const history = useHistory();
  React.useEffect(() => {
    let auth = localStorage.getItem("user");
    if (!auth || auth === "false") {
      history.push("/login");
    }
  }, [history]);

  const ProductList = cardProduct?.map((product) => {
    return <ProductCard {...product} cart="true" key={product.id} />;
  });
  return (
    <>
      <ProductContainer>{ProductList}</ProductContainer>
      {!ProductList ? <H2>Cart is empty</H2> : ""}
      <SimpleModal />
    </>
  );
};

export default Cart;
