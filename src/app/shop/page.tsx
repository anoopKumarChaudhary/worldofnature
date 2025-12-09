import { productsAPI } from "../services/api";
import ShopClient from "./ShopClient";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await productsAPI.getProducts();

  return <ShopClient initialProducts={products} />;
}
