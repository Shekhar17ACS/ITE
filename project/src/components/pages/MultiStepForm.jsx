import React, { useState, useEffect } from "react";
import RegistrationForm from "../MemberRegisteration/RegistrationForm";
import PersonalDetails from "../MemberRegisteration/PersonalDetails";
import ParentsDetails from "../MemberRegisteration/ParentsDetails";
import CourseSelection from "../MemberRegisteration/CourseSelection";
import DocumentUpload from "../MemberRegisteration/DocumentUpload";
import EligibilityCheck from "../MemberRegisteration/EligibilityCheck";
import Payment from "../MemberRegisteration/Payment";
import Stepper from "../MemberRegisteration/Stepper";

const MultiStepForm = () => {
  const [step, setStep] = useState(() => Number(localStorage.getItem("currentStep")) || 1);
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem("formData")) || {});
  const [completedSteps, setCompletedSteps] = useState(() => JSON.parse(localStorage.getItem("completedSteps")) || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const userData = await response.json();
        console.log("userData",userData)


        setFormData((prevData) => ({
          ...prevData,
          fullName: userData.name,
          email: userData.email,
          phone: userData.phone,
          address: userData.address.street + ", " + userData.address.city,
        }));



        localStorage.setItem("formData", JSON.stringify(formData));
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);


  console.log("formData")

  useEffect(() => {
    localStorage.setItem("currentStep", step);
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("completedSteps", JSON.stringify(completedSteps));
  }, [step, formData, completedSteps]);

  const validateStep = (currentStep) => {
    const stepFields = {
      1: ["username", "password", "confirmPassword"],
      2: ["fullName", "email", "phone", "dob", "gender", "address"],
      3: ["fatherName", "motherName", "occupation"],
      4: ["selectedCourses"],
      5: ["aadhar", "pan", "tenthCert", "twelfthCert", "gradCert"],
      6: ["eligibilityChecked"],
      7: ["paymentCompleted"],
    };
    return stepFields[currentStep]?.every((field) => formData[field]) || false;
  };

  const handleNextStep = () => {
    if (!completedSteps.includes(step) && validateStep(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleStepClick = (stepNumber) => {
    console.log("Clicked step:", stepNumber); // Debug log
    console.log("Current step:", step);
    console.log("Completed steps:", completedSteps);

    // Allow navigation to completed steps, current step, or previous steps
    if (completedSteps.includes(stepNumber) || stepNumber === step || stepNumber < step) {
      setStep(stepNumber);
    } else {
      alert("Please complete the current step before jumping ahead!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Stepper
        step={step}
        onStepClick={handleStepClick}
        completedSteps={completedSteps}
        canNavigateAll={false} // Change to true for unrestricted navigation
      />
      
      <div className="flex-1 flex justify-center bg-gray-100">
        <div className="w-full max-w-3xl p-6 bg-gray-100">
          {loading ? <p className="text-center">Fetching user details...</p> : null}

          {/* {step === 1 && (
            <RegistrationForm nextStep={handleNextStep} formData={formData} setFormData={setFormData} />
          )} */}
          {step === 1 && (
            <PersonalDetails
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* {step === 3 && (
            <ParentsDetails
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )} */}
          {step === 2 && (
            <CourseSelection
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <DocumentUpload
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 4 && (
            <EligibilityCheck
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 5 && (
            <Payment prevStep={handlePrevStep} formData={formData} />
          )}

          <div className="mt-2 text-center text-gray-600">
            {/* <p>Step {step} of 7</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;