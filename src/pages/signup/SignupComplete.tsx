import { CheckCheck, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";

interface SignupCompleteState {
  email?: string;
}

export default function SignupComplete() {
  const location = useLocation();
  const state = (location.state as SignupCompleteState | null) ?? null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFF] px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCheck size={30} />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-[30px] font-semibold text-[#4C4D60]">
            Seller setup completed
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-[#696A7A]">
            {state?.email
              ? `Your email ${state.email} has been verified and your seller setup is ready for review.`
              : "Your seller setup has been verified and is ready for review."}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#CDCDFA] bg-[#F6F6FE] p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 text-[#5D5FEF]" />
            <div>
              <h2 className="text-sm font-semibold text-[#4C4D60]">
                What happens next
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#696A7A]">
                Our team will review your information, confirm your onboarding
                details, and contact you when your seller access is approved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/signup/status"
            state={state}
            className="flex-1 rounded-lg bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
          >
            View application status
          </Link>
          <Link
            to="/"
            className="flex-1 rounded-lg border border-[#D7D7DB] px-5 py-3 text-center text-sm font-medium text-[#4C4D60] transition hover:bg-gray-50"
          >
            Back to homepage
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
