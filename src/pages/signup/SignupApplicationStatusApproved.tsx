import { CheckCircle2, Mail, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import circle from "@/assets/images/signup/Circle1.png";
import circle2 from "@/assets/images/signup/Circle2.png";

export default function SignupApplicationSuccess() {
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

          {/* HEADER */}
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
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-[24px] font-semibold text-white">Approved!</h1>
              </div>
              <p className="mt-2 text-[13px] text-[#EFEFFD]">
                Congratulations! Your seller account has been verified and is ready to go.
              </p>
            </div>
          </div>

          {/* BODY */}
          <div className="px-8 py-6">
            <h2 className="text-[14px] font-semibold text-[#5D5FEF] mb-5">Review Progress</h2>

            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-[#5D5FEF]" />

              <div className="space-y-6">

                {/* Step 1 — Done */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5D5FEF] z-10">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-[#4C4D60]">Application Submitted</h3>
                      <span className="text-[11px] text-[#696A7A]">29/10/25</span>
                    </div>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Your application has been received successfully.
                    </p>
                  </div>
                </div>

                {/* Step 2 — Done */}
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

                {/* Step 3 — Approved (green) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22C55E] z-10">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-[#4C4D60]">Decision</h3>
                      <span className="text-[11px] text-[#696A7A]">28/10/25 · 14:02</span>
                    </div>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Your application was approved. You can now start selling on Cadna Mart.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ACTIVE BANNER */}
            <div className="mt-7 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] px-4 py-4">
              <div className="flex items-start gap-3">
                < Mail className="h-5 w-5 shrink-0 text-[#16A34A] mt-0.5" />
                <div>
                  <p className="text-[14px] font-semibold text-[#15803D]">
                    Your seller account is active
                  </p>
                  <p className="text-[12px] text-[#16A34A] mt-0.5">
                    You can now list products, manage orders, and access your full seller dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <Link
              to="/seller"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#5D5FEF] hover:bg-[#4446D0] transition text-white text-[14px] font-semibold py-3"
            >
              Go to my dashboard
            </Link>
            <p className="text-center text-[12px] text-[#9898A6] mt-2">
              You'll be taken to your seller dashboard.
            </p>
          </div>

        </div>
      </div>

      {/* NEED HELP */}
      <p className="pb-6 text-center text-[16px] text-[#575757]">
        Need help?{" "}
        <Link to="/" className="text-[#5D5FEF] underline underline-offset-2">
          Contact Support
        </Link>
      </p>
    </div>
  );
}