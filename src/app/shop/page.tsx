import { productsAPI } from "../services/api";
import ShopClient from "./ShopClient";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const products = await productsAPI.getProducts();

  return <ShopClient initialProducts={products} />;
}
