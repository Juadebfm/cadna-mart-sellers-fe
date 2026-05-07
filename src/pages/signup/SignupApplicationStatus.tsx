import { CheckCircle2, CircleDashed, Clock3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";

interface SignupStatusState {
  email?: string;
}

const statusItems = [
  {
    title: "Application submitted",
    description: "Your seller onboarding details have been captured successfully.",
    icon: CheckCircle2,
    tone: "bg-green-100 text-green-600",
  },
  {
    title: "Email verification completed",
    description: "Your contact email is confirmed and ready for seller updates.",
    icon: CheckCircle2,
    tone: "bg-green-100 text-green-600",
  },
  {
    title: "Review in progress",
    description: "Cadna Mart is reviewing your registration and business information.",
    icon: Clock3,
    tone: "bg-amber-100 text-amber-600",
  },
  {
    title: "Approval pending",
    description: "You will receive the next update as soon as onboarding is completed.",
    icon: CircleDashed,
    tone: "bg-[#EFEFFD] text-[#5D5FEF]",
  },
];

export default function SignupApplicationStatus() {
  const location = useLocation();
  const state = (location.state as SignupStatusState | null) ?? null;

  return (
    <div className="min-h-screen bg-[#FAFAFF] px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-[30px] font-semibold text-[#4C4D60]">
            Application status
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-[#696A7A]">
            {state?.email
              ? `We are currently reviewing the seller setup for ${state.email}.`
              : "We are currently reviewing your seller setup."}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {statusItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5"
              >
                <div className={`rounded-full p-3 ${item.tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-[#4C4D60]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#696A7A]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
          >
            Back to homepage
          </Link>
          <Link
            to="/signup"
            className="flex-1 rounded-lg border border-[#D7D7DB] px-5 py-3 text-center text-sm font-medium text-[#4C4D60] transition hover:bg-gray-50"
          >
            Start new application
          </Link>
        </div>

        <img
          src={logo}
          alt="Cadna Mart logo"
          className="mx-auto mt-10 h-8 w-28 object-contain"
        />
      </div>
    </div>
  );
}
