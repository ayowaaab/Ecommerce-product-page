import Nav from "./components/nav";
import Product from "./components/product";

function App() {
  const thumbnail = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];
  const product = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
  return (
    <>
      <Nav />
      <Product thumbnail={thumbnail} product={product} />
    </>
  );
}

export default App;
