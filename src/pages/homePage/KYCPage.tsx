import KYCVerificationStatus from "@/components/kyc/KYCVerificationStatus";
import KYCGovernmentIDUpload from "@/components/kyc/KYCGovernmentIDUpload";
import KYCUnlocks from "@/components/kyc/KYCUnlocks";

export default function KYCPage() {
  return (
    <div className="space-y-5">

      {/* Top — Status + Upload side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <KYCVerificationStatus />
        <KYCGovernmentIDUpload />
      </div>

      {/* Bottom — What Verification Unlocks */}
      <KYCUnlocks />

    </div>
  );
}