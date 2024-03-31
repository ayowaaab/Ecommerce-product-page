import { useState } from "react";
import Nav from "./components/nav";
import Product from "./components/product";
import { product, thumbnail } from "./db";

function App() {
  const [quantity, setQuatity] = useState(0);
  const [added, setAdded] = useState(false);
  const updateQte = (x: number) => {
    setQuatity(x);
  };
  const updateAdded = (x: boolean) => {
    setAdded(x);
  };


  return (
    <>
      <Nav added={added} quantity={quantity} />
      <Product
        addToCard={updateAdded}
        updateQte={updateQte}
        thumbnail={thumbnail}
        product={product}
      />
    </>
  );
}

export default App;
