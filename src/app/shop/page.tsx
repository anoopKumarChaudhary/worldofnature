import { productsAPI } from "../services/api";
import ShopClient from "./ShopClient";

export default async function ShopPage() {
  const products = await productsAPI.getProducts();

  return <ShopClient initialProducts={products} />;
}
