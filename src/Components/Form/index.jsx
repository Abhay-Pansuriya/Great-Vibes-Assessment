import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const JobForm = ({ step1 = false, step2 = false, isEdit = false, id = "", setModal }) => {
  const [stepOneData, setStepOneData] = useState(step1 || {});
  const [stepTwoData, setStepTwoData] = useState(step2 || {});
  const [step, setStep] = useState(1)
  return (
    <div className='md:w-[513px] bg-card border border-border p-8 rounded-lg'>
      {(step === 1) && <Step1 stepOneData={stepOneData} setStepOneData={setStepOneData} setStep={setStep} />}
      {(step === 2) && <Step2 stepOneData={stepOneData} setStep={setStep} stepTwoData={stepTwoData} setStepTwoData={setStepTwoData} isEdit={isEdit} id={id} setModal={setModal} />}
    </div>
  )
}

export default JobForm