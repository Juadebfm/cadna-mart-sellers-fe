import { ButtonLink } from "@/components/ui/Button";
import SectionPill from "@/components/ui/SectionPill";
import Sec2Img from "@/assets/images/landing/landing-page-section-1-img.png";

const steps = [
  { label: "Create your account under 5 minutes", filled: true },
  { label: "Set up your storefront", filled: true },
  { label: "Upload your products", filled: false },
  { label: "Receive orders & get paid", filled: false },
];

export default function HowItWorks() {
  return (
    <section>
      <hr className="w-[70%] mx-auto my-10 border-t border-indigo-50" />

      <div className="mx-auto w-[85%] my-15">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* LEFT IMAGE */}
          <div className="hidden lg:flex lg:w-1/2">
            <img
              src={Sec2Img}
              alt="Section 2 image"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div>
              <SectionPill color="purple">HOW IT WORKS</SectionPill>

              <p className="pt-3 font-semibold text-3xl text-gray-600">
                Start selling in{" "}
                <span className="text-purple-600">4 simple steps</span>
              </p>

              <p className="pt-2 text-gray-500 text-xs">
                From sign-up to your first payout — the whole journey is
                designed to be fast and straightforward.
              </p>
            </div>

            <div className="relative rounded-md border border-purple-100 bg-purple-50/50 px-5 py-7 mt-5">
              {/* DOTTED LINE */}
              <div className="absolute left-9 top-8 bottom-8 w-[2px] border-l-3 border-dashed border-purple-700" />

              <ol className="space-y-6 relative">
                {steps.map((step, i) => (
                  <li
                    key={step.label}
                    className="flex items-start gap-5 text-gray-600 font-medium relative z-10"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium z-10 ${
                        step.filled
                          ? "bg-purple-600 text-white"
                          : "bg-purple-100 text-purple-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {step.label}
                  </li>
                ))}
              </ol>
            </div>

            <ButtonLink to="/signup" variant="primary" size="sm" className="mt-10 px-10">
              Start Selling
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}