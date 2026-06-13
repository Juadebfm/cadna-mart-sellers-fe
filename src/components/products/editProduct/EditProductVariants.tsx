import ProductVariants from "@/components/products/variants/ProductVariants";
import type { VariantGroup } from "@/components/products/variants/types";

interface Props {
  hasVariants: boolean;
  onToggle: (v: boolean) => void;
  initialGroups?: VariantGroup[];
}

export default function EditProductVariants({
  hasVariants,
  onToggle,
  initialGroups,
}: Props) {
  return (
    <ProductVariants
      hasVariants={hasVariants}
      onToggle={onToggle}
      {...(initialGroups && { initialGroups })}
    />
  );
}
