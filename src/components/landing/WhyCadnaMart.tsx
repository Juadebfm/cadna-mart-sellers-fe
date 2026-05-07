import { CirclePlus, SquareCheck, Dock, Menu, type LucideIcon } from "lucide-react";
import SectionPill from "@/components/ui/SectionPill";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CirclePlus,
    title: "Reach more customers",
    description:
      "Tap into a growing buyer base actively searching for baby products, gadgets, cosmetics, household items and more. Your products get discovered by people ready to buy.",
  },
  {
    icon: SquareCheck,
    title: "Zero listing fees",
    description:
      "List as many products as you want at no cost. You only pay a small commission when you successfully make a sale — so we grow when you grow.",
  },
  {
    icon: Dock,
    title: "Secure, timely payouts",
    description:
      "Your earnings are protected and settled directly to your bank account after order confirmation. No chasing payments, no delays, no hidden deductions.",
  },
  {
    icon: Menu,
    title: "Simple product management",
    description:
      "Add, edit, pause, or remove listings from a clean dashboard. Bulk upload support for power sellers with large catalogues — no spreadsheet juggling required.",
  },
];

export default function WhyCadnaMart() {
  return (
    <section>
      <div className="mx-auto w-[95%] md:w-[85%] mt-20">
        <div className="text-center">
          <SectionPill color="green" className="mx-auto">
            Why Cadna Mart
          </SectionPill>
          <h2 className="pt-3 font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-gray-600">
            Built for{" "}
            <span className="text-green-600">Nigerian sellers</span>
          </h2>
          <p className="py-2 text-gray-500 text-[18px]">
            Everything you need to run a successful online store, without the
            complexity.
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-[#EFFBF7] p-6 sm:p-[50px] rounded-3xl">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="py-7 px-6 sm:px-10 bg-white rounded-2xl border border-gray-100 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="text-indigo-500 bg-indigo-100 py-3 px-3 rounded-xl w-13 h-13" />
              <h3 className="text-lg font-semibold pt-6 text-gray-700">
                {title}
              </h3>
              <p className="w-full lg:w-[75%] text-sm pt-2 text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
