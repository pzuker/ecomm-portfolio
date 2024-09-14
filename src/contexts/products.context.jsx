import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";
// import {
//   onAuthStateChangedListener,
//   createUserDocFromAuth,
// } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  // useEffect(() => {
  //   const unsuscribe = onAuthStateChangedListener((user) => {
  //     if (user) createUserDocFromAuth(user);
  //     setCurrentUser(user);
  //   });

  //   return unsuscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
