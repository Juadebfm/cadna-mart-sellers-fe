import PersonalInfo from "@/components/accountSetting/PersonalInfo";
import DeactivateAccount from "@/components/accountSetting/DeactivateAccount";
import BankAccount from "@/components/accountSetting/BankAccount";
import Security from "@/components/accountSetting/Security";
import Notifications from "@/components/accountSetting/Notifications";
import BusinessInfo from "@/components/accountSetting/BusinessInfo";

export default function AccountSettingsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      {/* Left column */}
      <div className="space-y-5">
        <PersonalInfo />
        <BusinessInfo />
        {/* Hidden on mobile — shown at bottom instead */}
        <div className="hidden md:block">
          <DeactivateAccount />
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        <BankAccount />
        <Security />
        <Notifications />
      </div>

      {/* Deactivate — only visible on mobile, always last */}
      <div className="md:hidden">
        <DeactivateAccount />
      </div>
    </div>
  );
}