import type { SyntheticEvent } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Check, MailCheck, RefreshCcw } from "lucide-react";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import { validateVerificationCode } from "@/schemas/signup";

interface SignupVerifyState {
  email?: string;
  details?: unknown;
  password?: string;
}

const maskEmail = (email: string) => {
  const [name, domain] = email.split("@");

  if (!name || !domain) {
    return "";
  }

  if (name.length <= 2) {
    return `${name[0] ?? ""}*@${domain}`;
  }

  return `${name.slice(0, 2)}${"*".repeat(Math.max(name.length - 2, 1))}@${domain}`;
};

export default function SignupVerify() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state as SignupVerifyState | null) ?? null;
  const validation = validateVerificationCode(code);
  const maskedEmail = state?.email ? maskEmail(state.email) : "";

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validation.isValid) {
      setError(validation.error ?? "Please enter a valid verification code.");
      return;
    }

    setError("");
    setNotice("");
    void navigate("/signupstatus", {
      state: { email: state?.email ?? "" },
    });
  };

  const handleResendCode = () => {
    setCode("");
    setError("");
    setNotice(
      maskedEmail
        ? `A fresh verification code has been sent to ${maskedEmail}.`
        : "A fresh verification code has been generated for your email.",
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFF] px-4">
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center justify-center">
          <div className="flex w-12 sm:w-20 justify-center">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={16} />
            </div>
          </div>
          <div className="h-0.5 w-6 sm:w-12 bg-[#5D5FEF]"></div>
          <div className="flex w-12 sm:w-20 justify-center">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={16} />
            </div>
          </div>
          <div className="h-0.5 w-6 sm:w-12 bg-[#5D5FEF]"></div>
          <div className="flex w-12 sm:w-20 justify-center">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={16} />
            </div>
          </div>
          <div className="h-0.5 w-6 sm:w-12 bg-[#CDCDFA]"></div>
          <div className="flex w-12 sm:w-20 justify-center">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white text-sm sm:text-base">
              4
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-center text-[10px] sm:text-xs text-[#696A7A]">
          <span className="w-16 sm:w-32 text-center">Email</span>
          <span className="w-16 sm:w-32 text-center">Details</span>
          <span className="w-16 sm:w-32 text-center">Password</span>
          <span className="w-16 sm:w-32 text-center">Verify</span>
        </div>
      </div>

      <div className="flex items-center justify-center pb-10">
        <div className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFEFFD] text-[#5D5FEF]">
              <MailCheck size={24} />
            </div>
            <h1 className="mt-4 text-[28px] font-semibold text-[#5D5FEF]">
              Verify your email
            </h1>
            <p className="mt-2 text-[14px] text-[#696A7A]">
              {maskedEmail
                ? `Enter the 6-digit code we sent to ${maskedEmail}.`
                : "Enter the 6-digit code we sent to your email address."}
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <input
              id="verificationCode"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(event) => {
                setCode(event.target.value.replace(/\D/g, ""));
                if (error) {
                  setError("");
                }
                if (notice) {
                  setNotice("");
                }
              }}
              placeholder="Enter verification code"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-[18px] tracking-[0.35em] text-[#4C4D60] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {error && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {notice && (
              <p
                className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                role="status"
              >
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={!validation.isValid}
              className={`w-full rounded-lg py-3 text-sm font-medium text-white transition ${
                validation.isValid
                  ? "bg-linear-to-r from-[#5B5BD6] to-[#7B61FF] hover:opacity-90"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >
              Confirm email
            </button>
          </form>

          <button
            type="button"
            onClick={handleResendCode}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#5D5FEF]"
          >
            <RefreshCcw size={16} />
            Resend code
          </button>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                void navigate("/signup/password", { state });
              }}
              className="w-full rounded-lg border border-[#D7D7DB] py-3 text-sm font-medium text-[#4C4D60] transition hover:bg-gray-50"
            >
              Go Back
            </button>

            <Link
              to="/signup"
              className="w-full rounded-lg border border-transparent py-3 text-center text-sm font-medium text-[#5D5FEF] underline underline-offset-4"
            >
              Start over
            </Link>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <img
          src={logo}
          alt="Cadna Mart logo"
          className="mx-auto h-8 w-28 object-contain"
        />
      </div>
    </div>
  );
}
