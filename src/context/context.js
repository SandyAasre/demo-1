import React, { useState } from "react";
import data from "../data";
export const ProductsContext = React.createContext({
  products: [],
  remove: (id) => {},
  add: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([...data]);

  const removeProduct = (productId) => {
    setProductsList((currentProdList) => {
      let updatedProduct = currentProdList.map((value) => {
        if (value.id === productId && value.quantity > 0) {
          value.quantity--;
        }
        return value;
      });
      return updatedProduct;
    });
  };
  const addProduct = (productId) => {
    setProductsList((currentProdList) => {
      let updatedProduct = currentProdList.map((value) => {
        if (value.id === productId) {
          value.quantity++;
        }
        return value;
      });
      return updatedProduct;
    });
  };
  return (
    <ProductsContext.Provider
      value={{
        products: productsList,
        remove: removeProduct,
        add: addProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
