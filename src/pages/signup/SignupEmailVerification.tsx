import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import SignupImage from "@/assets/images/signup/signup-email-image.png";

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain || !local) return email;
  return `${local.slice(0, 3)}***@${domain}`;
}

export default function SignupEmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const email: string =
    (location.state as { email?: string } | null)?.email ?? "";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const isValid = code.trim().length === 6;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    if (!isValid) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    void navigate("/signupdetails", { state: { email, code } });
  };

  const handleGoBack = () => {
    void navigate("/signup", { state: { email } });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAFAFF]">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 py-8">
        <div className="my-6 text-center lg:hidden">
          <img
            src={logo}
            alt="CadnaMart logo"
            className="w-40 h-12"
            loading="lazy"
          />
        </div>

        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <h1 className="md:text-[30px] text-[20px] font-semibold text-[#5D5FEF]">
              Start Selling on Cadna Mart
            </h1>
            <p className="mt-2 text-[12px] md:text-[14px] text-[#696A7A]">
              Please provide your email address to create your seller account
            </p>
          </div>

          <div className="w-full mt-6 px-4 py-2 border border-[#CDCDFA] rounded-md text-[#5D5FEF] text-[11px] md:text-[13px] bg-[#EFEFFD] flex items-center gap-2">
            <Info className="w-4 h-4 shrink-0" />
            <span>
              Verification code has been sent to{" "}
              <span className="font-semibold">{maskEmail(email)}</span>.
            </span>
          </div>

          {error && (
            <div className="w-full mt-4 px-4 py-3 border border-red-300 rounded-md text-red-600 text-sm bg-red-50">
              {error}
            </div>
          )}

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-gray-50 text-gray-500 text-[14px] cursor-not-allowed focus:outline-none"
            />

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                if (error) setError("");
              }}
              placeholder="Enter the verification code"
              className={`w-full px-3 py-2.5 border rounded-md text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition ${
                error
                  ? "border-red-500 focus:ring-red-400"
                  : isValid
                    ? "border-[#5D5FEF] focus:ring-[#5D5FEF]"
                    : "border-gray-300 focus:ring-[#5D5FEF]"
              }`}
            />

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 px-4 font-medium rounded-md transition text-[16px] ${
                isValid
                  ? "bg-[#5D5FEF] text-white hover:opacity-90 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoBack}
            className="w-full py-2 px-4 border border-[#D7D7DB] text-[#4C4D60] font-medium rounded-md hover:opacity-90 transition mt-4 text-[16px]"
          >
            Go Back
          </button>

          <div className="my-4 text-center text-[16px] text-[#4C4D60]">
            Already have an account?{" "}
            <span className="px-1 text-[#5D5FEF] underline cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center h-screen">
        <img
          src={SignupImage}
          alt="Signup Email image"
          className="w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
