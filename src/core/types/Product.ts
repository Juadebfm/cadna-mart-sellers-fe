export type ProductStatus = "Draft" | "Live" | "Deactivated";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  stock: number;
  sales: number;
  status: ProductStatus;
}