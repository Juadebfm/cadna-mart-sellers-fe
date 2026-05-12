import type { SyntheticEvent } from "react";
import { useState, useRef, useEffect } from "react";
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
  if (!name || !domain) return "";
  if (name.length <= 2) return `${name[0] ?? ""}*@${domain}`;
  return `${name.slice(0, 2)}${"*".repeat(Math.max(name.length - 2, 1))}@${domain}`;
};

export default function SignupVerify() {
  const [codes, setCodes] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state as SignupVerifyState | null) ?? null;
  const maskedEmail = state?.email ? maskEmail(state.email) : "";
  const fullCode = codes.join("");
  const validation = validateVerificationCode(fullCode);

  useEffect(() => {
    if (countdown === 0) {
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCodes = [...codes];
    newCodes[index] = value.slice(-1);
    setCodes(newCodes);
    if (error) setError("");
    if (notice) setNotice("");
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length === 6) {
      setCodes(pasted.split(""));
      inputRefs.current[5]?.focus();
    }
  };

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
    if (countdown !== 0) return;
    setCodes(["", "", "", "", "", ""]);
    setError("");
    setCountdown(60);
    setNotice(
      maskedEmail
        ? `A fresh verification code has been sent to ${maskedEmail}.`
        : "A fresh verification code has been generated for your email.",
    );
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFF] px-4">
      {/* STEPPER */}
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center justify-center">
          <div className="flex w-20 justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={18} />
            </div>
          </div>
          <div className="h-[2px] w-12 bg-[#5D5FEF]"></div>
          <div className="flex w-20 justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={18} />
            </div>
          </div>
          <div className="h-[2px] w-12 bg-[#5D5FEF]"></div>
          <div className="flex w-20 justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              <Check size={18} />
            </div>
          </div>
          <div className="h-[2px] w-12 bg-[#CDCDFA]"></div>
          <div className="flex w-20 justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E5E7FF] bg-[#5D5FEF] text-white">
              4
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center text-xs text-[#696A7A]">
          <span className="w-32 text-center">Email</span>
          <span className="w-32 text-center">Details</span>
          <span className="w-32 text-center">Password</span>
          <span className="w-32 text-center">Verify</span>
        </div>
      </div>

      {/* CARD */}
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
              We've sent an email to{" "}
              <span className="font-semibold text-[#4C4D60]">
                {maskedEmail}
              </span>
              .
              <br />
              Please enter the code below or click the link in the email.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            {/* 6 BOXES */}
            <div
              className="flex items-center justify-center gap-2"
              onPaste={handlePaste}
            >
              {codes.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    handleChange(i, e.target.value);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDown(i, e);
                  }}
                  className="h-11 w-11 rounded-lg border border-gray-300 text-center text-[18px] font-semibold text-[#4C4D60] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              ))}
            </div>

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

            {/* RESEND */}
            <div className="text-center">
              {countdown === 0 ? (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#5D5FEF]"
                >
                  <RefreshCcw size={16} />
                  Resend code
                </button>
              ) : (
                <p className="text-[13px] text-[#696A7A]">
                  Didn't receive the verification code? It could take a bit of
                  time. Request a new code in{" "}
                  <span className="font-bold text-[#5D5FEF]">{countdown}s</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!validation.isValid}
              className={`w-full rounded-lg py-3 text-sm font-medium text-white transition ${
                validation.isValid
                  ? "bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] hover:opacity-90"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >
              Verify & Continue
            </button>

            <button
              type="button"
              onClick={() => {
                void navigate("/signuppassword", { state });
              }}
              className="w-full rounded-lg border border-[#D7D7DB] py-3 text-sm font-medium text-[#4C4D60] transition hover:bg-gray-50"
            >
              Go Back
            </button>

            <Link
              to="/signup"
              className="block w-full rounded-lg py-3 text-center text-sm font-medium text-[#5D5FEF] underline underline-offset-4"
            >
              Start over
            </Link>
          </form>
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
