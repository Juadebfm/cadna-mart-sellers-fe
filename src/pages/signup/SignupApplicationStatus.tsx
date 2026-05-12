import { CheckCircle2, Clock3, Mail, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import circle from "@/assets/images/signup/Circle1.png";
import circle2 from "@/assets/images/signup/Circle2.png";

export default function SignupApplicationStatus() {


  return (
    <div className="min-h-screen bg-[#FAFAFF]">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <img
          src={logo}
          alt="Cadna Mart logo"
          className="h-8 w-28 object-contain"
        />
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
          {/* DARK HEADER */}
          <div className="relative bg-[#272864] px-6 py-7 overflow-hidden">
            {/* Circles top right */}
            <div className=" absolute  right-0 my-6 text-center lg:flex hidden">
              <img src={circle} alt="circle " className="" loading="lazy" />
            </div>
            <div className=" absolute -top-10 right-0 my-6 text-center lg:flex hidden">
              <img src={circle2} alt="circle " className="" loading="lazy" />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-medium">
                Application Status
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Clock3 className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-[24px] font-semibold text-white">
                  Under Review
                </h1>
              </div>
              <p className="mt-2 text-[13px] text-[#EFEFFD]">
                Your application is being currently reviewed by our seller
                verification team.
              </p>
            </div>
          </div>

          {/* REVIEW PROGRESS */}
          <div className="px-8 py-6">
            <h2 className="text-[14px] font-semibold text-[#5D5FEF] mb-5">
              Review Progress
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-5 bottom-5 w-[2px] bg-gray-100" />

              <div className="space-y-6">
                {/* Step 1 - Done */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5D5FEF] z-10">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[14px] font-semibold text-[#4C4D60]">
                      Application Submitted
                    </h3>
                    <p className="text-[13px] text-[#696A7A] mt-0.5">
                      Your application has been received successfully.
                    </p>
                  </div>
                </div>

                {/* Step 2 - In progress */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CDCDFA] z-10">
                    <CheckCircle2 className="h-5 w-5 text-[#5D5FEF]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[14px] font-semibold text-[#BABAC1]">
                      Under Review
                    </h3>
                    <p className="text-[13px] text-[#BABAC1] mt-0.5">
                      Our team is verifying your business information and
                      documents.
                    </p>
                  </div>
                </div>

                {/* Step 3 - Pending */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFEFFD] z-10">
                    <CheckCircle2 className="h-5 w-5 text-[#CDCDFA]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[14px] font-semibold text-[#BABAC1]">
                      Decision
                    </h3>
                    <p className="text-[13px] text-[#BABAC1] mt-0.5">
                      You will be notified of the outcome within 24 – 72 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NOTIFICATION BANNER */}
            <div className="mt-7 rounded-xl border border-[#DAB0FF] bg-[#FAF5FF] px-4 py-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#7D00E8] mt-0.5" />
                <div>
                  <p className="text-[18px] font-semibold text-[#7D00E8]">
                    Notification will be sent to your mail
                  </p>
                  <p className="text-[12px] text-[#A133FF] mt-0.5">
                    Check your spam/junk folder if you do not receive an email
                    in 24 – 72 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEED HELP */}
      <p className="pb-6 text-center text-[16px] text-[#575757]">
        Need help?{" "}
        <Link
          to="/"
          className=" text-[#5D5FEF] underline underline-offset-2"
        >
          Contact Support
        </Link>
      </p>
    </div>
  );
}
