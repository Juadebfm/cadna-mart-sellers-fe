import { CheckCircle2, XCircle, LogOut, RefreshCcw, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import circle from "@/assets/images/signup/Circle1.png";
import circle2 from "@/assets/images/signup/Circle2.png";

export default function SignupApplicationRejected() {
  return (
    <div className="min-h-screen bg-[#FAFAFF]">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <img src={logo} alt="Cadna Mart logo" className="h-8 w-28 object-contain" />
        <Link
          to="/"
          className="flex items-center gap-2 text-[13px] text-[#E22B80] hover:text-red-700 transition"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl rounded-3xl border border-gray-100 bg-white shadow-lg overflow-hidden">

          {/* HEADER — same navy, Not Approved title */}
          <div className="relative bg-[#272864] px-6 py-7 overflow-hidden">
            <div className="absolute right-0 my-6 lg:flex hidden">
              <img src={circle} alt="circle" loading="lazy" />
            </div>
            <div className="absolute -top-10 right-0 my-6 lg:flex hidden">
              <img src={circle2} alt="circle" loading="lazy" />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-medium">
                Application Status
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <XCircle className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-[24px] font-semibold text-white">Not Approved</h1>
              </div>
              <p className="mt-2 text-[13px] text-[#EFEFFD]">
                Your application was not approved at this time. See the reasons below.
              </p>
            </div>
          </div>

          {/* BODY */}
          <div className="px-8 py-6">
            <h2 className="text-[14px] font-semibold text-[#5D5FEF] mb-5">Review Progress</h2>

            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gray-100" />

              <div className="space-y-6">

                {/* Step 1 — Done */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5D5FEF] z-10">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1 flex-1">
                    <h3 className="text-[14px] font-semibold text-[#4C4D60]">Application Submitted</h3>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Your application has been received successfully.
                    </p>
                  </div>
                </div>

                {/* Step 2 — Done with timestamp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5D5FEF] z-10">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-[#4C4D60]">Under Review</h3>
                      <span className="text-[11px] text-[#696A7A]">29/10/25 · 14:02</span>
                    </div>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Our team reviewed your business information and documents.
                    </p>
                  </div>
                </div>

                {/* Step 3 — Rejected (solid red circle with X) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF4444] z-10">
                    <XCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-[#4C4D60]">Decision</h3>
                      <span className="text-[11px] text-[#696A7A]">29/10/25 · 14:02</span>
                    </div>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Your application was not approved at this time. See the reasons below.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* REASONS FOR REJECTION */}
            <div className="mt-6 rounded-xl border border-[#FECACA] bg-[#FFF5F5] px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-4 w-4 text-[#EF4444]" />
                <p className="text-[13px] font-semibold text-[#EF4444]">Reasons for rejection</p>
              </div>
              <ul className="space-y-1.5">
                {[
                  "The bank account details submitted do not match the registered business name.",
                  "A valid government-issued ID was not included with the application.",
                  "The business registration document provided could not be verified.",
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF4444]" />
                    <p className="text-[12px] text-[#696A7A]">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* YOU CAN REAPPLY */}
            <div className="mt-3 rounded-xl border border-[#DAB0FF] bg-[#FAF5FF] px-4 py-3">
              <div className="flex items-center gap-2">
                <RefreshCcw className="h-4 w-4 text-[#7D00E8]" />
                <div>
                  <p className="text-[13px] font-semibold text-[#7D00E8]">You can reapply</p>
                  <p className="text-[12px] text-[#A133FF]">
                    Address the issues above and submit a new application. There is no waiting period.
                  </p>
                </div>
              </div>
            </div>

            {/* REAPPLY BUTTON */}
            <Link
              to="/signup"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#5D5FEF] hover:bg-[#4446D0] transition text-white text-[14px] font-semibold py-3"
            >
              <RefreshCcw className="h-4 w-4" />
              Reapply Now
            </Link>

            {/* CONTACT SUPPORT BUTTON */}
            <Link
              to=""
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-[#696A7A] text-[14px] font-medium py-3"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}