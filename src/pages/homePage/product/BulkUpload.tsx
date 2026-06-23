import { useState } from "react";
import BulkUploadBanner from "@/components/products/bulkUpload/BulkUploadBanner";
import BulkUploadStepper from "@/components/products/bulkUpload/BulkUploadStepper";
import Step1UploadImages from "@/components/products/bulkUpload/Step1UploadImages";
import Step2UploadCSV from "@/components/products/bulkUpload/Step2UploadCSV";
import Step3Processing from "@/components/products/bulkUpload/Step3Processing";
import Step4Review from "@/components/products/bulkUpload/Step4Review";

export default function BulkUploadPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-5">
      <BulkUploadBanner
        onHowTo={() => {
          console.log("How to");
        }}
      />
       
       <BulkUploadStepper currentStep={step} />

      <div className=" ">
        
        {step === 1 && (
          <Step1UploadImages
            onContinue={() => {
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <Step2UploadCSV
            onBack={() => {
              setStep(1);
            }}
            onSubmit={() => {
              setStep(3);
            }}
          />
        )}
        {step === 3 && (
          <Step3Processing
            onDone={() => {
              setStep(4);
            }}
          />
        )}
        {step === 4 && <Step4Review />}
      </div>
    </div>
  );
}
