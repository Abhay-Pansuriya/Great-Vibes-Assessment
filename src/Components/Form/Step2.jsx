import React, { useState } from 'react'
import Label from '../Common/Label'
import Input from '../Common/Input'
import FormButton from '../Common/FormButton';
import { CreateNewJob } from '../../Apis/Jobs';
import toast from "react-hot-toast"

const Step2 = ({ stepOneData, setStep }) => {
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [minSal, setMinSal] = useState();
  const [maxSal, setMaxSal] = useState();
  const [totalEmp, setTotalEmp] = useState();
  const [applyType, setApplyType] = useState("");
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({});

  // Validation of fields
  const validateFields = () => {
    let newErrors = {};
    if (!applyType) newErrors.applyType = "Apply type is a required field.";
    if (minSal || maxSal) {
      if ((minSal && !maxSal) || (!minSal && maxSal)) newErrors.salary = "Minimum and Maximum both salaries should be entered.";
      else if (parseFloat(minSal) > parseFloat(maxSal)) newErrors.salary = "Maximum salary should be greater than Minimum salary";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if all there are no errors.
  };

  // On submit method
  const handleStep1 = async (e) => {
    e?.preventDefault();

    if (!validateFields()) return;

    const data = {
      job_title: stepOneData?.job,
      company: stepOneData?.company,
      location: stepOneData?.location,
      industry: stepOneData?.industry,
      remote_type: stepOneData?.remoteType,
      min_exp: minExp,
      max_exp: maxExp,
      min_salary: minSal,
      max_sal: maxSal,
      employees: totalEmp,
      isQck_apply: applyType === "quickApply",
      isExt_apply: applyType === "externalApply",
    }
    const createJob = await CreateNewJob(data)
    if (createJob?.status) {
      setLoading(false)
      if (createJob?.status === 201) {
        toast.success('Job has been created..!')
      }else{
        toast.error('Something went wrong while creating job')
      }
    }

  };

  // set value to perticular state
  const handleInputChange = (field, value) => {
    setErrors({ ...errors, [field]: "" });
    switch (field) {
      case "minExp": setMinExp(value); break;
      case "maxExp": setMaxExp(value); break;
      case "minSal": setMinSal(value); break;
      case "maxSal": setMaxSal(value); break;
      case "totalEmp": setTotalEmp(value); break;
      case "applyType": setApplyType(value); break;
      default: break;
    }
  };

  return (
    <div className='card'>
      <div className="form-header flex justify-between items-center">
        <h2 className='font-poppins font-normal text-xl'>Create a job</h2>
        <span className='font-poppins font-medium text-base'>Step 2</span>
      </div>
      <form onSubmit={handleStep1}>
        <div className='mt-6'>
          <Label text="Experience" />
          <div className=' flex justify-between items-center'>
            <Input type="text" placeholder="Minimum" value={minExp} onChange={(e) => handleInputChange("minExp", e.target.value)} />
            <Input type="text" placeholder="Maximum" value={maxExp} onChange={(e) => handleInputChange("maxExp", e.target.value)} />
          </div>
        </div>
        <div className='mt-6'>
          <Label text="Salary" />
          <div className=' flex justify-between items-center'>
            <Input type="number" min={0} placeholder="Minimum" value={minSal} onChange={(e) => handleInputChange("minSal", e.target.value)} />
            <Input type="number" min={0} placeholder="Maximum" value={maxSal} onChange={(e) => handleInputChange("maxSal", e.target.value)} />
          </div>
          {errors?.salary && <span className='text-error font-poppins font-normal text-xs'>{errors?.salary}</span>}
        </div>
        <div className='mt-6'>
          <Label text="Total Employee" />
          <Input type="number" placeholder="ex. 100" value={totalEmp} onChange={(e) => handleInputChange("totalEmp", e.target.value)} />
        </div>
        <div className='mt-6'>
          <Label text="Apply Type" isRequired={true} />
          <div className='flex item-center mt-1'>
            <div className="flex items-center mr-4">
              <input id="qckApply" type="radio" name="applyType" value="quickApply" checked={applyType === "quickApply"} className='hidden' onChange={(e) => handleInputChange("applyType", e?.target?.value)} />
              <label for="qckApply" className="flex items-center cursor-pointer font-poppins text-sm font-normal text-placeholder">
                <span className={`w-5 h-5 inline-block mr-1 rounded-full border-2 border-border transition duration-500 ease-in-out ${applyType === "quickApply" ? "bg-primary border-primary" : ""}`}></span>
                Quick apply
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input id="extApply" type="radio" name="applyType" value="externalApply" checked={applyType === "externalApply"} className='hidden' onChange={(e) => handleInputChange("applyType", e?.target?.value)} />
              <label for="extApply" className="flex items-center cursor-pointer font-poppins text-sm font-normal text-placeholder">
                <span className={`w-5 h-5 inline-block mr-1 rounded-full border-2 border-border transition duration-500 ease-in-out ${applyType === "externalApply" ? "bg-primary border-primary" : ""}`}></span>
                External apply
              </label>
            </div>
          </div>
          {errors?.applyType && <span className='text-error font-poppins font-normal text-xs'>{errors?.applyType}</span>}
        </div>
        <div className='flex justify-between items-center mt-24'>
          <button type='button' className='bg-card hover:bg-white text-dark border border-primary font-poppins font-medium text-base px-4 py-3 rounded-lg focus:ring focus:outline-none' onClick={() => { setStep(1) }}>
            Back
          </button>
          <FormButton text="Submit" className="mt-0" />
        </div>
      </form>
    </div >
  )
}

export default Step2