interface Props {
  kycDone: boolean;
}

export default function StorefrontKYCBanner({ kycDone }: Props) {


  if (kycDone) return null;

  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-[#FAF5FF] border border-[#DAB0FF]">
      <p className="text-[13px] text-[#8900FF]">
        Store is not yet published. Complete KYC verification to go live.
      </p>

    </div>
  );
}