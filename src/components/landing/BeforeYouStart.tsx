import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import SectionPill from "@/components/ui/SectionPill";

interface Requirement {
  title: string;
  description: string;
}

const requirements: Requirement[] = [
  {
    title: "Valid email address",
    description: "Used for verification and account communications",
  },
  {
    title: "Personal details",
    description: "Your full name and phone number",
  },
  {
    title: "Business name & address",
    description: "CAC number is optional for informal sellers",
  },
  {
    title: "Bank account details",
    description: "Bank name, account number, and account name",
  },
  {
    title: "Business type",
    description: "Sole proprietor, LLC, or partnership",
  },
  {
    title: "Password",
    description: "At least 8 characters with letters and numbers",
  },
];

export default function BeforeYouStart() {
  return (
    <section>
      <div className="mx-auto w-[95%] md:w-[85%] my-20">
        <SectionPill color="indigo">Before you start</SectionPill>
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
          <h2 className="pt-3 font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-gray-600">
            What you need to{" "}
            <span className="font-semibold text-indigo-600">register</span>
          </h2>
          <ButtonLink
            to="/signup"
            variant="primary"
            className="self-start lg:self-auto"
          >
            Start Selling
          </ButtonLink>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {requirements.map(({ title, description }) => (
            <div
              key={title}
              className="border border-indigo-100 p-4 rounded-xl"
            >
              <div className="flex gap-5 items-center">
                <div>
                  <Check className="text-indigo-500 bg-indigo-50 py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                </div>
                <div>
                  <h4 className="text-gray-600 font-medium">{title}</h4>
                  <p className="text-gray-500">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
