export interface VariantOption {
  label: string;
  stock: number;
  priceAdjustment: number;
}

export interface ColourOption {
  label: string;
  hex: string;
}

export interface VariantGroup {
  type: string;
  options: VariantOption[];
  colours?: ColourOption[];
}

export interface TableRow {
  key: string;
  size: string;
  colour?: string;
  stock: number;
  priceAdjustment: number;
}