import React, { useState } from 'react'
import Label from '../Common/Label'
import Input from '../Common/Input'
import FormButton from '../Common/FormButton';

const Step1 = ({ stepOneData, setStepOneData, setStep }) => {
  const [job, setJob] = useState(stepOneData?.job || "");
  const [company, setCompany] = useState(stepOneData?.company || "");
  const [industry, setIndustry] = useState(stepOneData?.industry || "");
  const [location, setLocation] = useState(stepOneData?.location || "");
  const [remoteType, setRemoteType] = useState(stepOneData?.remoteType || "");
  const [errors, setErrors] = useState({});

  // Validation of required fields
  const validateFields = () => {
    let newErrors = {};
    if (!job) newErrors.job = "Job title is a required field.";
    if (!company) newErrors.company = "Company name is a required field.";
    if (!industry) newErrors.industry = "Industry is a required field.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if all there are no errors.
  };

  // On submit method
  const handleStep1 = (e) => {
    e?.preventDefault();
    if (!validateFields()) return;
    setStepOneData({ job, company, industry, location, remoteType, errors: {} });
    setStep(2);
  };

  // set value to perticular state
  const handleInputChange = (field, value) => {
    setErrors({ ...errors, [field]: "" });
    switch (field) {
      case "job": setJob(value); break;
      case "company": setCompany(value); break;
      case "industry": setIndustry(value); break;
      case "location": setLocation(value); break;
      case "remoteType": setRemoteType(value); break;
      default: break;
    }
  };

  return (
    <div className='card'>
      <div className="form-header flex justify-between items-center">
        <h2 className='font-poppins font-normal text-xl'>Create a job</h2>
        <span className='font-poppins font-medium text-base'>Step 1</span>
      </div>
      <form onSubmit={handleStep1}>
        <div className='mt-6'>
          <Label text="Job title" isRequired={true} />
          <Input type="text" placeholder="ex. UX UI Designer" value={job} onChange={(e) => handleInputChange("job", e.target.value)} error={errors?.job || ""} />
        </div>
        <div className='mt-6'>
          <Label text="Company name" isRequired={true} />
          <Input type="text" placeholder="ex. Google" value={company} onChange={(e) => handleInputChange("company", e.target.value)} error={errors?.company} />
        </div>
        <div className='mt-6'>
          <Label text="Industry" isRequired={true} />
          <Input type="text" placeholder="ex. Information Technology" value={industry} onChange={(e) => handleInputChange("industry", e.target.value)} error={errors?.industry} />
        </div>
        <div className='mt-6 flex items-center justify-between '>
          <div>
            <Label text="Location" />
            <Input type="text" placeholder="ex. Chennai" value={location} onChange={(e) => handleInputChange("location", e.target.value)} />
          </div>
          <div>
            <Label text="Remote Type" />
            <Input type="text" placeholder="ex. In-office" value={remoteType} onChange={(e) => handleInputChange("remoteType", e.target.value)} />
          </div>
        </div>
        <div className='flex justify-end'>
          <FormButton text="Next" />
        </div>
      </form>
    </div>
  )
}

export default Step1