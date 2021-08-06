import React, { useContext } from "react";
import ProductCard from "../Card/Card";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { ProductsContext } from "../context/context";
const ProductContainer = styled.div`
  height: auto;
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Product = () => {
  const history = useHistory();
  const cardProduct = useContext(ProductsContext).products;

  React.useEffect(() => {
    let auth = localStorage.getItem("user");
    if (!auth || auth === "false") {
      history.push("/login");
    }
  }, [history]);
  const ProductList = cardProduct.map((product) => {
    return <ProductCard {...product} key={product.id} />;
  });
  return (
    <>
      <ProductContainer>{ProductList}</ProductContainer>
    </>
  );
};

export default Product;
