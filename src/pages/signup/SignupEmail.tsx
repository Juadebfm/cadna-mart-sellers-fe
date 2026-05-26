import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import SignupImage from "@/assets/images/signup/signup-email-image.png";
import { validateEmail } from "@/schemas/signup";

export default function SignupEmail() {
  const location = useLocation();
  const [email, setEmail] = useState<string>(
    (location.state as { email?: string } | null)?.email ?? "",
  );
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const isValid = email.trim().length > 0;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    const validation = validateEmail(email);

    if (!validation.isValid) {
      setError(validation.error ?? "Invalid email");
      return;
    }

    void navigate("/signupemailverify", { state: { email } });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAFAFF]">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 py-8">
        <div className="my-6 text-center lg:hidden">
          <img src={logo} alt="CadnaMart logo" className="w-40 h-12" loading="lazy" />
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

          <div className="w-full mt-8 px-4 py-1 border border-[#CDCDFA] rounded-md text-[#5D5FEF] text-[11px] md:text-[16px] bg-[#EFEFFD] flex items-center">
            <Info className="w-4 h-4 mr-2" />
            We'll send a verification code to this email
          </div>

          {error && (
            <div className="w-full mt-4 px-4 py-3 border border-red-300 rounded-md text-red-600 text-sm bg-red-50">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter email"
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 text-[14px]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 px-4 font-medium rounded-md transition text-[16px] mt-4 ${
                isValid
                  ? "bg-[#5D5FEF] text-white hover:opacity-90 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </form>

          <div className="my-4 text-center text-[16px] text-[#4C4D60]">
            Already have an account?
            <span className="px-1 bg-white text-[#5D5FEF] underline cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center h-screen">
        <img src={SignupImage} alt="Signup Email image" className="w-full" loading="lazy" />
      </div>
    </div>
  );
}