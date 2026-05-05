import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/cadna-mart-main-logo.png";
import { Check, CircleAlert } from "lucide-react";
import type { SignupDetailsData } from "../../core/utils/signupValidation";
import { validateSignupDetails } from "../../core/utils/signupValidation";

export default function SignupDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+234"); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SignupDetailsData, string>>>({});
  const navigate = useNavigate();

  const detailsData: Partial<SignupDetailsData> = {
    firstName,
    lastName,
    countryCode,
    phoneNumber,
    businessName,
    businessRegistrationNumber,
    businessType,
    businessAddress,
    city,
    state,
    bankName,
    accountName,
    accountNumber,
  };

  const validation = validateSignupDetails(detailsData);

  const canSubmit = validation.isValid && agreedToTerms;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the Terms of Use and Privacy Policy to continue.");
      return;
    }

    localStorage.setItem("signupDetails", JSON.stringify(detailsData));
    void navigate("/signuppassword", { state: { details: detailsData } });
  };

  const handleGoBack = () => {
    void navigate("/signup");
  };

  return (
    <div className="px-4 bg-[#FAFAFF] min-h-screen">
      <div className="flex flex-col items-center py-10">
        {/* Step indicators */}
        <div className="flex items-center justify-center">
          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white border-2 border-[#E5E7FF]">
              <Check size={18} />
            </div>
          </div>
          <div className="w-12 h-[2px] bg-[#5D5FEF]"></div>
          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white border-2 border-[#E5E7FF]">
              2
            </div>
          </div>
          <div className="w-12 h-[2px] bg-[#CDCDFA]"></div>
          <div className="w-20 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#E5E7FF] flex items-center justify-center text-[#5D5FEF] font-semibold">
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

        {/* Step labels */}
        <div className="flex justify-center mt-2 text-xs text-[#696A7A]">
          <span className="w-32 text-center text-[#4C4D60]">Email</span>
          <span className="w-32 text-center text-[#4C4D60]">Details</span>
          <span className="w-32 text-center text-[#BABAC1]">Password</span>
          <span className="w-32 text-center text-[#BABAC1]">Verify</span>
        </div>
      </div>

      <div className="text-center lg:w-[70%] sm:w-[85%] w-[95%] mx-auto mb-10">
        <h2 className="md:text-[30px] text-[20px] font-semibold text-[#5D5FEF]">
          Tell us about you and your business
        </h2>
        <p className="mt-2 text-[12px] md:text-[14px] text-[#696A7A]">
          Kindly provide your personal and business information. This information
          helps us set up your seller account correctly
        </p>
      </div>

      <div>
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Personal Information */}
          <div className="lg:w-[70%] sm:w-[85%] w-[95%] bg-white rounded-2xl shadow-md sm:p-8 p-4 border border-gray-100 mx-auto text-[14px]">
            <h2 className="mb-4 font-semibold text-[#4C4D60]">Personal Information</h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errors.firstName) setErrors({ ...errors, firstName: "" });
                  }}
                  placeholder="First Name"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (errors.lastName) setErrors({ ...errors, lastName: "" });
                  }}
                  placeholder="Last Name"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className={`flex w-full border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 mt-5 ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}>
              <select
                value={countryCode}
                onChange={(e) => {setCountryCode(e.target.value)}}
                className="px-3 bg-white outline-none text-[#4C4D60] text-[14px]"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                <option value="+27">+27</option>
              </select>
              <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                }}
                placeholder="Phone number (Optional)"
                className="flex-1 px-3 py-2 outline-none text-[#4C4D60] text-[14px]"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Business Details */}
          <div className="lg:w-[70%] sm:w-[85%] w-[95%] bg-white rounded-2xl shadow-md sm:p-8 p-4 border border-gray-100 mx-auto text-[14px]">
            <h2 className="mb-4 font-semibold text-[#4C4D60]">Business Details</h2>

            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                if (errors.businessName) setErrors({ ...errors, businessName: "" });
              }}
              placeholder="Business Name"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                errors.businessName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
            )}

            <input
              id="businessRegistrationNumber"
              type="text"
              value={businessRegistrationNumber}
              onChange={(e) => {setBusinessRegistrationNumber(e.target.value)}}
              placeholder="Business Registration / CAC Number (Optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] mt-5"
            />

            <div className="flex gap-3 mt-5 items-center">
              <input
                id="businessType"
                type="text"
                value={businessType}
                onChange={(e) => {
                  setBusinessType(e.target.value);
                  if (errors.businessType) setErrors({ ...errors, businessType: "" });
                }}
                placeholder="Business Type (e.g. Retail, Wholesale)"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                  errors.businessType ? "border-red-500" : "border-gray-300"
                }`}
              />
              <CircleAlert size={22} className="text-[#5D5FEF] shrink-0" />
            </div>
            {errors.businessType && (
              <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
            )}

            <input
              id="businessAddress"
              type="text"
              value={businessAddress}
              onChange={(e) => {
                setBusinessAddress(e.target.value);
                if (errors.businessAddress) setErrors({ ...errors, businessAddress: "" });
              }}
              placeholder="Business Address"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] mt-5 ${
                errors.businessAddress ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.businessAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.businessAddress}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <div className="w-full sm:w-1/2">
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (errors.city) setErrors({ ...errors, city: "" });
                  }}
                  placeholder="City"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    if (errors.state) setErrors({ ...errors, state: "" });
                  }}
                  placeholder="State"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className="lg:w-[70%] sm:w-[85%] w-[95%] bg-white rounded-2xl shadow-md sm:p-8 p-4 border border-gray-100 mx-auto text-[14px]">
            <h2 className="mb-4 font-semibold text-[#4C4D60]">Bank Details</h2>

            <input
              id="bankName"
              type="text"
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
                if (errors.bankName) setErrors({ ...errors, bankName: "" });
              }}
              placeholder="Bank Name"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] ${
                errors.bankName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.bankName && (
              <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
            )}

            <input
              id="accountName"
              type="text"
              value={accountName}
              onChange={(e) => {
                setAccountName(e.target.value);
                if (errors.accountName) setErrors({ ...errors, accountName: "" });
              }}
              placeholder="Account Name"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] mt-5 ${
                errors.accountName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.accountName && (
              <p className="text-red-500 text-sm mt-1">{errors.accountName}</p>
            )}

            <input
              id="accountNumber"
              type="text"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
                if (errors.accountNumber) setErrors({ ...errors, accountNumber: "" });
              }}
              placeholder="Account Number"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#4C4D60] text-[14px] mt-5 ${
                errors.accountNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
            )}
          </div>

          {/* Legal Agreement */}
          <div className="lg:w-[70%] sm:w-[85%] w-[95%] bg-white rounded-2xl shadow-md sm:p-8 p-4 border border-gray-100 mx-auto text-[14px]">
            <h2 className="mb-4 font-semibold text-[#4C4D60]">Legal Agreement</h2>
            <div className="w-full px-3 py-2 bg-[#F5F5FF] border border-[#CDCDFA] rounded-lg text-[#4C4D60] mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => {setAgreedToTerms(e.target.checked)}}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span className="text-[#696A7A]">
                  I have read and agree to the{" "}
                  <span className="text-[#5D5FEF] cursor-pointer">Terms of Use</span>{" "}
                  and{" "}
                  <span className="text-[#5D5FEF] cursor-pointer">Privacy Policy</span>{" "}
                  of Cadna Mart.
                </span>
              </label>
            </div>
            {validation.isValid && !agreedToTerms && (
              <p className="text-amber-500 text-sm mt-2">
                Please agree to the terms to continue.
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`py-2 px-4 font-medium rounded-lg transition lg:w-[70%] sm:w-[85%] w-[95%] mx-auto block ${
              canSubmit
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
          className="py-2 px-4 border border-[#D7D7DB] text-[#4C4D60] font-medium rounded-lg hover:opacity-90 transition mt-4 lg:w-[70%] sm:w-[85%] w-[95%] mx-auto block"
        >
          Go Back
        </button>
      </div>

      <div className="my-10">
        <img
          src={logo}
          alt="CadnaMart logo"
          className="w-40 h-12 mx-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}