import React from "react";
import AllVechiles from "../components/Products/AllVechiles";
import OurFleetHead from "../components/Products/OurFleetHead";

const ProductsPage = () => {
  return (
    <React.Fragment>
      <OurFleetHead />
      <AllVechiles />
    </React.Fragment>
  );
};

export default ProductsPage;
