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
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-[72px]">
          <div className="hidden lg:flex lg:w-1/2">
            <img
              src={Sec2Img}
              alt="Section 2 image"
              className="h-[650px] w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[80%]">
              <SectionPill color="purple">HOW IT WORKS</SectionPill>

              <p className="pt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-tight text-gray-600 lg:whitespace-nowrap">
                Start selling in{" "}
                <span className="font-semibold text-purple-600">
                  4 simple steps
                </span>
              </p>

              <p className="pt-2 text-[20px] font-normal text-gray-500">
                From sign-up to your first payout — the whole journey is
                designed to be fast and straightforward.
              </p>
            </div>

            <div className="relative mt-5 rounded-md border border-purple-100 bg-purple-50/50 px-5 py-7">
              <ol className="space-y-8">
                {steps.map((step, i) => (
                  <li
                    key={step.label}
                    className="grid min-h-[44px] lg:min-h-[55px] grid-cols-[44px_minmax(0,1fr)] lg:grid-cols-[55px_minmax(0,1fr)] items-center gap-x-4 lg:gap-x-6 text-[15px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.3] text-gray-600"
                  >
                    <div className="relative flex h-[44px] w-[44px] lg:h-[55px] lg:w-[55px] items-center justify-center">
                      <span
                        className={`flex h-[44px] w-[44px] lg:h-[55px] lg:w-[55px] items-center justify-center rounded-full text-[16px] lg:text-[21px] font-medium ${
                          step.filled
                            ? "bg-purple-600 text-white"
                            : "bg-purple-100 text-purple-500"
                        }`}
                      >
                        {i + 1}
                      </span>
                      {i < steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-1/2 top-[44px] lg:top-[55px] h-6 lg:h-8 -translate-x-1/2 border-l-[3px] border-dashed border-purple-700/70"
                        />
                      )}
                    </div>
                    <span>{step.label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <ButtonLink to="/signup" variant="primary" className="mt-10">
              Start Selling
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
