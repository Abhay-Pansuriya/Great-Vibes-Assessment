import React, { useContext, useState } from 'react'
import Label from '../Common/Label'
import Input from '../Common/Input'
import FormButton from '../Common/FormButton';
import { CreateNewJob, GetAllJobs, UpdateJob } from '../../Apis/Jobs';
import toast from "react-hot-toast"
import JobContext from '../../Context/JobContext';

const Step2 = ({ stepOneData, setStep, stepTwoData, setStepTwoData, isEdit, id, setModal }) => {
  const [errors, setErrors] = useState({});
  const { setJobs } = useContext(JobContext);
  // Validation of fields
  const validateFields = () => {
    let newErrors = {};
    if (!stepTwoData?.applyType) newErrors.applyType = "Apply type is a require  d field.";
    if (stepTwoData?.minExp || stepTwoData?.maxExp) {
      if ((stepTwoData?.minExp && !stepTwoData?.maxExp) || (!stepTwoData?.minExp && stepTwoData?.maxExp)) newErrors.experience = "Minimum and Maximum both experience should be entered.";
      else if (parseFloat(stepTwoData?.minExp) > parseFloat(stepTwoData?.maxExp)) newErrors.experience = "Maximum experience should be greater than Minimum experience";
    }
    if (stepTwoData?.minSal || stepTwoData?.maxSal) {
      if ((stepTwoData?.minSal && !stepTwoData?.maxSal) || (!stepTwoData?.minSal && stepTwoData?.maxSal)) newErrors.salary = "Minimum and Maximum both salaries should be entered.";
      else if (parseFloat(stepTwoData?.minSal) > parseFloat(stepTwoData?.maxSal)) newErrors.salary = "Maximum salary should be greater than Minimum salary";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if there are no errors.
  };

  // On submit method
  const handleStep2 = async (e) => {
    e?.preventDefault();
    if (!validateFields()) return;
    const data = {
      job_title: stepOneData?.job,
      company: stepOneData?.company,
      location: stepOneData?.location,
      industry: stepOneData?.industry,
      remote_type: stepOneData?.remoteType,
      min_exp: parseInt(stepTwoData?.minExp),
      max_exp: parseInt(stepTwoData?.maxExp),
      min_salary: parseInt(stepTwoData?.minSal),
      max_salary: parseInt(stepTwoData?.maxSal),
      employees: stepTwoData?.totalEmp,
      isQck_apply: stepTwoData?.applyType === "quickApply",
      isExt_apply: stepTwoData?.applyType === "externalApply",
    }

    if (isEdit && id) {
      const updateJob = await UpdateJob(data, id)
      if (updateJob?.status) {
        if ([201, 200]?.includes(updateJob?.status)) {
          GetAllJobs(setJobs)
          toast.success('Job has been Updated..!')
          setModal(false)
        } else {
          toast.error('Something went wrong while updating job')
          setModal(false)
        }
      }
    } else {
      const createJob = await CreateNewJob(data)
      if (createJob?.status) {
        if ([201, 200]?.includes(createJob?.status)) {
          GetAllJobs(setJobs)
          toast.success('Job has been created..!')
          setModal(false)
        } else {
          toast.error('Something went wrong while creating job')
          setModal(false)
        }
      }
    }
  };

  const handleInputChange = (field, value) => {
    setErrors({ ...errors, [field]: "" });
    setStepTwoData({ ...stepTwoData, [field]: value });
  };

  return (
    <div className='card'>
      <div className="form-header flex justify-between items-center">
        <h2 className='font-poppins font-normal text-xl'>Create a job</h2>
        <span className='font-poppins font-medium text-base'>Step 2</span>
      </div>
      <form onSubmit={handleStep2}>
        <div className='mt-6'>
          <Label text="Experience" />
          <div className=' flex justify-between items-center'>
            <Input type="number" min={0} placeholder="Minimum" value={stepTwoData?.minExp} onChange={(e) => handleInputChange("minExp", e.target.value)} />
            <Input type="number" min={0} placeholder="Maximum" value={stepTwoData?.maxExp} onChange={(e) => handleInputChange("maxExp", e.target.value)} />
          </div>
          {errors?.experience && <span className='text-error font-poppins font-normal text-xs'>{errors?.experience}</span>}
        </div>
        <div className='mt-6'>
          <Label text="Salary" />
          <div className=' flex justify-between items-center'>
            <Input type="number" min={0} placeholder="Minimum" value={stepTwoData?.minSal} onChange={(e) => handleInputChange("minSal", e.target.value)} />
            <Input type="number" min={0} placeholder="Maximum" value={stepTwoData?.maxSal} onChange={(e) => handleInputChange("maxSal", e.target.value)} />
          </div>
          {errors?.salary && <span className='text-error font-poppins font-normal text-xs'>{errors?.salary}</span>}
        </div>
        <div className='mt-6'>
          <Label text="Total Employee" />
          <Input type="text" placeholder="ex. 50-100" value={stepTwoData?.totalEmp} onChange={(e) => handleInputChange("totalEmp", e.target.value)} />
        </div>
        <div className='mt-6'>
          <Label text="Apply Type" isRequired={true} />
          <div className='flex item-center mt-1'>
            <div className="flex items-center mr-4">
              <input id="qckApply" type="radio" name="applyType" value="quickApply" checked={stepTwoData?.applyType === "quickApply"} className='hidden' onChange={(e) => handleInputChange("applyType", e?.target?.value)} />
              <label for="qckApply" className="flex items-center cursor-pointer font-poppins text-sm font-normal text-placeholder">
                <span className={`w-5 h-5 inline-block mr-1 rounded-full border-2 border-border transition duration-500 ease-in-out ${stepTwoData?.applyType === "quickApply" ? "bg-primary border-primary" : ""}`}></span>
                Quick apply
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input id="extApply" type="radio" name="applyType" value="externalApply" checked={stepTwoData?.applyType === "externalApply"} className='hidden' onChange={(e) => handleInputChange("applyType", e?.target?.value)} />
              <label for="extApply" className="flex items-center cursor-pointer font-poppins text-sm font-normal text-placeholder">
                <span className={`w-5 h-5 inline-block mr-1 rounded-full border-2 border-border transition duration-500 ease-in-out ${stepTwoData?.applyType === "externalApply" ? "bg-primary border-primary" : ""}`}></span>
                External apply
              </label>
            </div>
          </div>
          {errors?.applyType && <span className='text-error font-poppins font-normal text-xs'>{errors?.applyType}</span>}
        </div>
        <div className='flex justify-between items-center mt-24'>
          <FormButton text="Back" type="button" onClick={() => { setStep(1) }} />
          <FormButton text="Submit" primary />
        </div>
      </form>
    </div >
  )
}

export default Step2