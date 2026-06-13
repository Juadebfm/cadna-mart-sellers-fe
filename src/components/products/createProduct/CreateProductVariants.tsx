import ProductVariants from "@/components/products/variants/ProductVariants";

interface Props {
  hasVariants: boolean;
  onToggle: (v: boolean) => void;
}

export default function CreateProductVariants({ hasVariants, onToggle }: Props) {
  return <ProductVariants hasVariants={hasVariants} onToggle={onToggle} />;
}