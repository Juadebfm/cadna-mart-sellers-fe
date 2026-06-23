import { useState } from "react";
import { PRESET_SIZES } from "./Constants";
import type { ColourOption, TableRow, VariantGroup } from "./Types";

export function useVariants(initialGroups: VariantGroup[] = []) {
  const [variantGroups, setVariantGroups] =
    useState<VariantGroup[]>(initialGroups);
  const [newSizeInput, setNewSizeInput] = useState("");

  const sizeGroup = variantGroups.find((g) => g.type === "Size");
  const colourGroup = variantGroups.find((g) => g.type === "Colour");
  const hasSizeGroup = !!sizeGroup;
  const hasColourGroup = !!colourGroup;

  const handleAddSize = () => {
    if (hasSizeGroup) return;
    setVariantGroups((prev) => [
      ...prev,
      {
        type: "Size",
        options: PRESET_SIZES.map((s) => ({
          label: s,
          stock: 0,
          priceAdjustment: 0,
        })),
      },
    ]);
  };

  const handleTogglePresetSize = (size: string) => {
    setVariantGroups((prev) =>
      prev.map((g) => {
        if (g.type !== "Size") return g;
        const exists = g.options.find((o) => o.label === size);
        return {
          ...g,
          options: exists
            ? g.options.filter((o) => o.label !== size)
            : [...g.options, { label: size, stock: 0, priceAdjustment: 0 }],
        };
      }),
    );
  };

  const handleAddCustomSize = () => {
    const trimmed = newSizeInput.trim().toUpperCase();
    if (!trimmed) return;
    setVariantGroups((prev) =>
      prev.map((g) => {
        if (g.type !== "Size") return g;
        if (g.options.find((o) => o.label === trimmed)) return g;
        return {
          ...g,
          options: [
            ...g.options,
            { label: trimmed, stock: 0, priceAdjustment: 0 },
          ],
        };
      }),
    );
    setNewSizeInput("");
  };

  const handleRemoveSizeTag = (size: string) => {
    setVariantGroups((prev) =>
      prev.map((g) =>
        g.type !== "Size"
          ? g
          : { ...g, options: g.options.filter((o) => o.label !== size) },
      ),
    );
  };

  const handleAddColour = () => {
    if (hasColourGroup) return;
    setVariantGroups((prev) => [
      ...prev,
      { type: "Colour", options: [], colours: [] },
    ]);
  };

  const handleToggleColour = (colour: ColourOption) => {
    setVariantGroups((prev) =>
      prev.map((g): VariantGroup => {
        if (g.type !== "Colour") return g;
        const exists = g.colours?.find((c) => c.label === colour.label);
        return {
          ...g,
          colours:
            (exists
              ? g.colours?.filter((c) => c.label !== colour.label)
              : [...(g.colours ?? []), colour]) ?? [],
        };
      }),
    );
  };

  const handleRemoveColourTag = (label: string) => {
    setVariantGroups((prev) =>
      prev.map(
        (g): VariantGroup =>
          g.type !== "Colour"
            ? g
            : {
                ...g,
                colours: g.colours?.filter((c) => c.label !== label) ?? [],
              },
      ),
    );
  };

  const handleRemoveGroup = (type: string) => {
    setVariantGroups((prev) => prev.filter((g) => g.type !== type));
  };

  const handleStockChange = (rowKey: string, delta: number) => {
    setVariantGroups((prev) =>
      prev.map((g) => {
        if (g.type !== "Size") return g;
        return {
          ...g,
          options: g.options.map((o) =>
            o.label === rowKey
              ? { ...o, stock: Math.max(0, o.stock + delta) }
              : o,
          ),
        };
      }),
    );
  };

  const handlePriceChange = (rowKey: string, value: string) => {
    setVariantGroups((prev) =>
      prev.map((g) => {
        if (g.type !== "Size") return g;
        return {
          ...g,
          options: g.options.map((o) =>
            o.label === rowKey ? { ...o, priceAdjustment: Number(value) } : o,
          ),
        };
      }),
    );
  };

  const tableRows: TableRow[] = (() => {
    if (!sizeGroup) return [];
    const sizes = sizeGroup.options;
    const colours = colourGroup?.colours ?? [];
    if (colours.length === 0) {
      return sizes.map((o) => ({
        key: o.label,
        size: o.label,
        stock: o.stock,
        priceAdjustment: o.priceAdjustment,
      }));
    }
    return sizes.flatMap((o) =>
      colours.map((c) => ({
        key: `${o.label}-${c.label}`,
        size: o.label,
        colour: c.label,
        stock: o.stock,
        priceAdjustment: o.priceAdjustment,
      })),
    );
  })();

  return {
    variantGroups,
    sizeGroup,
    colourGroup,
    hasSizeGroup,
    hasColourGroup,
    newSizeInput,
    setNewSizeInput,
    tableRows,
    handleAddSize,
    handleTogglePresetSize,
    handleAddCustomSize,
    handleRemoveSizeTag,
    handleAddColour,
    handleToggleColour,
    handleRemoveColourTag,
    handleRemoveGroup,
    handleStockChange,
    handlePriceChange,
  };
}
