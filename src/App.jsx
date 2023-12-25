import React, { useContext, useState } from 'react'
import Card from './Components/Card/Card'
import JobForm from "./Components/Form";
import Modal from './Components/Common/Modal';
import FormButton from './Components/Common/FormButton';
import JobContext from './Context/JobContext';

const App = () => {
  const [modal, setModal] = useState(false)
  const { jobs } = useContext(JobContext);
  return (
    <div className="mx-auto w-11/12 my-4">
      <div className="create-btn flex justify-end mb-8">
        <FormButton type="button" text={<span className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>Create Job</span>} primary onClick={() => { setModal(true) }} />
      </div>
      <Modal isOpen={modal} setIsOpen={setModal} ><JobForm setModal={setModal} /></Modal>
      {
        jobs?.length > 0 ?
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
            {
              jobs?.map((job) => {
                return <Card
                  key={job?.id}
                  id={job?.id}
                  job={job?.job_title}
                  company={job?.company}
                  industry={job?.industry}
                  location={job?.location}
                  remoteType={job?.remote_type}
                  minExp={job?.min_exp && parseInt(job?.min_exp)}
                  maxExp={job?.max_exp && parseInt(job?.max_exp)}
                  minSal={job?.min_salary && parseInt(job?.min_salary)}
                  maxSal={job?.max_salary && parseInt(job?.max_salary)}
                  employees={job?.employees}
                  isQuickApply={job?.isQck_apply || false}
                />
              })
            }
          </div>
          :
          <div className='align-center'>
            <p className='text-center'> Looks Like you haven't crated any job yet, click on "Create Job" button to create.</p>
          </div>
      }

    </div>
  )
}

export default App