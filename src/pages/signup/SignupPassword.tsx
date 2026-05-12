import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import { Eye, EyeOff, Check, Info } from "lucide-react";
import type { SignupDetailsData } from "@/schemas/signup";
import {
  validatePassword,
  validatePasswordMatch,
} from "@/schemas/signup";

export default function SignupPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const flowState =
    (location.state as {
      email?: string;
      details?: Partial<SignupDetailsData>;
    } | null) ?? null;

  const rules = validatePassword(password);

  const validRules = Object.values(rules).filter(Boolean).length;

  const strength =
    validRules <= 1
      ? { label: "Weak", color: "text-red-500" }
      : validRules <= 3
        ? { label: "Medium", color: "text-yellow-500" }
        : { label: "Strong", color: "text-green-500" };

  const validation = validatePasswordMatch(password, confirmPassword);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validation.isValid) {
      return;
    }

    void navigate("/signupverify", {
      state: {
        email: flowState?.email,
        details: flowState?.details,
        password,
      },
    });
  };

  const handleGoBack = () => {
    void navigate("/signupdetails", {
      state: {
        email: flowState?.email,
        details: flowState?.details,
      },
    });
  };

  return (
    <div className="bg-[#FAFAFF] min-h-screen">
      <div className="flex flex-col items-center py-10">
        {/* Icons + Lines */}
        <div className="flex items-center justify-center">
          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white border-2 border-[#E5E7FF]">
              <Check size={18} />
            </div>
          </div>

          <div className="w-12 h-[2px] bg-[#5D5FEF]"></div>

          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white border-2 border-[#E5E7FF]">
              <Check size={18} />
            </div>
          </div>

          <div className="w-12 h-[2px] bg-[#CDCDFA]"></div>

          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white font-semibold border-2 border-[#E5E7FF]">
              3
            </div>
          </div>

          <div className="w-12 h-[2px] bg-[#CDCDFA]"></div>

          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#E5E7FF] flex items-center justify-center text-[#5D5FEF] font-semibold">
              4
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-center mt-2 text-xs text-[#696A7A]">
          <span className="w-32 text-center">Email</span>
          <span className="w-32 text-center">Details</span>
          <span className="w-32 text-center">Password</span>
          <span className="w-32 text-center">Verify</span>
        </div>
      </div>

      <div className="py-5 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-md">
          {/* Heading */}
          <h2 className="text-[32px] font-semibold text-center text-[#5D5FEF] mb-2">
            Secure your account
          </h2>

          <p className="text-[16px] text-[#696A7A] text-center mb-6">
            Choose a strong password to protect your seller account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Password Input */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#4C4D60] text-[14px]"
                  required
                />

                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Rules */}
              {password && (
                <div className="mt-3 bg-[#F4F4FF] border border-[#CDCDFA] rounded-lg p-4 text-sm space-y-2">
                  <p className={`flex items-center gap-2 ${strength.color}`}>
                    <Info size={16} />
                    Password strength: {strength.label}
                  </p>

                  <Rule
                    valid={rules.length}
                    text="Must be at least 8 characters"
                  />
                  <Rule
                    valid={rules.number}
                    text="Must contain at least one number"
                  />
                  <Rule
                    valid={rules.symbol}
                    text="Must contain at least one symbol"
                  />
                  <Rule valid={rules.space} text="Cannot contain spaces" />
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#4C4D60] text-[14px]"
                />

                <button
                  type="button"
                  onClick={() => {
                    setShowConfirm(!showConfirm);
                  }}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={
                    showConfirm
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!validation.isValid}
              className={`w-full h-[48px] rounded-lg text-white text-sm font-medium transition-all duration-300 ${
                validation.isValid
                  ? "bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Continue
            </button>

            {/* Go back Button */}
            <button
              type="button"
              onClick={handleGoBack}
              className={
                "w-full h-[48px] rounded-lg text-[#4C4D60] text-[16px] font-medium border border-[#D7D7DB]"
              }
            >
              Go Back
            </button>
          </form>
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center py-7">
        <img
          src={logo}
          alt="Cadna Mart logo"
          className="w-28 h-8 object-contain"
        />
      </div>
    </div>
  );
}

function Rule({ valid, text }: { valid: boolean; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {valid ? (
        <Check size={16} className="text-green-500" />
      ) : (
        <Check size={16} className="text-red-500" />
      )}
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
