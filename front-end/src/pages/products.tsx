import { useEffect } from "react";

function Products() {
  useEffect(() => {
    document.title = "NeLtech - Products";
  }, []);

  return <div>Products</div>;
}

export default Products;
