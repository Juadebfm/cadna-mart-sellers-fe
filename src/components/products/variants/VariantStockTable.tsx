import { PRESET_COLOURS } from "./Constants";
import type { TableRow } from "./Types";

interface Props {
  tableRows: TableRow[];
  hasColourGroup: boolean;
  onStockChange: (rowKey: string, delta: number) => void;
  onPriceChange: (rowKey: string, value: string) => void;
}

export default function VariantStockTable({
  tableRows,
  hasColourGroup,
  onStockChange,
  onPriceChange,
}: Props) {
  if (tableRows.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-[14px] font-medium text-[#9899A3] uppercase tracking-wider">
        Stock & Pricing per Variant
      </p>

      {/* Desktop */}
      <div className="hidden sm:block rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead>
            <tr className="text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider border-b border-[#E5E7EB] bg-[#F3F3F8]">
              <th className="px-4 py-3">Size</th>
              {hasColourGroup && <th className="px-4 py-3">Colour</th>}
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Price Adjustment (₦)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB]">
            {tableRows.map((row) => (
              <tr key={row.key}>
                <td className="px-4 py-3 text-[13px] font-medium text-[#4C4D60]">
                  {row.size}
                </td>
                {hasColourGroup && (
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {row.colour && (
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{
                            backgroundColor: PRESET_COLOURS.find(
                              (c) => c.label === row.colour,
                            )?.hex,
                          }}
                        />
                      )}
                      <span className="text-[13px] text-[#4C4D60]">
                        {row.colour}
                      </span>
                    </div>
                  </td>
                )}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onStockChange(row.key, -1);
                      }}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#4C4D60] hover:bg-[#FAFAFF] transition text-[16px] shrink-0"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-[13px] font-medium text-[#4C4D60]">
                      {row.stock}
                    </span>
                    <button
                      onClick={() => {
                        onStockChange(row.key, 1);
                      }}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#4C4D60] hover:bg-[#FAFAFF] transition text-[16px] shrink-0"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min="0"
                    value={row.priceAdjustment}
                    onChange={(e) => {
                      onPriceChange(
                        row.key,
                        String(Math.max(0, Number(e.target.value))),
                      );
                    }}
                    className="w-full max-w-[90px] px-3 py-1.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="sm:hidden space-y-3">
        {tableRows.map((row) => (
          <div
            key={row.key}
            className="rounded-xl border border-[#E5E7EB] px-4 py-4 space-y-3"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[13px] font-semibold text-[#4C4D60]">
                Size: {row.size}
              </p>
              {row.colour && (
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: PRESET_COLOURS.find(
                        (c) => c.label === row.colour,
                      )?.hex,
                    }}
                  />
                  <p className="text-[13px] text-[#4C4D60]">{row.colour}</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#9899A3] uppercase tracking-wider">
                Stock
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onStockChange(row.key, -1);
                  }}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#4C4D60] hover:bg-[#FAFAFF] transition text-[16px]"
                >
                  −
                </button>
                <span className="w-6 text-center text-[13px] font-medium text-[#4C4D60]">
                  {row.stock}
                </span>
                <button
                  onClick={() => {
                    onStockChange(row.key, 1);
                  }}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#4C4D60] hover:bg-[#FAFAFF] transition text-[16px]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#9899A3] uppercase tracking-wider">
                Price Adj. (₦)
              </p>
              <input
                type="number"
                min="0"
                value={row.priceAdjustment}
                onChange={(e) => {
                  onPriceChange(
                    row.key,
                    String(Math.max(0, Number(e.target.value))),
                  );
                }}
                className="w-[90px] px-3 py-1.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
