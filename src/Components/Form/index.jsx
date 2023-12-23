import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const JobForm = () => {
  return (
    <div className='lg:w-2/5 md:w-1/2 bg-white border-4 border-border'>
        <Step1 />
        <Step2 />
    </div>
  )
}

export default JobForm