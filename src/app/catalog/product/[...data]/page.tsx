import { AddToCartButton } from "./add-to-cart-button";
import { Test } from "./test";

interface ProductProps {
  params: {
    data: string[];
  };
}

export default async function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  );
}
