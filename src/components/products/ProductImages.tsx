export default function ProductImage({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400 text-sm font-semibold overflow-hidden">
      {name.charAt(0)}
    </div>
  );
}