import { ButtonLink } from "@/components/ui/Button";
import EcommerceVendor1 from "@/assets/images/landing/ecommerce-vendor3d-1.png";
import EcommerceVendor2 from "@/assets/images/landing/ecommerce-vendor3d-2.png";

export default function ReadyToStart() {
  return (
    <section>
      <div className="relative mt-20 h-[400px] flex items-center justify-center px-7">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4B008C_0%,_#6D28D9_45%,_#7C3AED_100%)]"></div>
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-1/3 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <img
          src={EcommerceVendor1}
          alt="vendor 1"
          className="absolute bottom-0 left-0 h-[440px] hidden lg:block"
          loading="lazy"
        />
        <img
          src={EcommerceVendor2}
          alt="vendor 2"
          className="absolute bottom-0 right-0 h-[490px] hidden lg:block"
          loading="lazy"
        />

        <div className="text-center relative z-10">
          <h2 className="text-white text-[32px] lg:text-[72px] font-semibold">
            Ready to start selling?
          </h2>
          <p className="text-white text-[16px]">
            Set up your store in minutes and start reaching customers across
            Nigeria.
          </p>
          <ButtonLink to="/signup" variant="white" className="mt-7">
            Start Selling Today
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
