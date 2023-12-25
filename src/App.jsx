import React, { useMemo, useState } from 'react'
import Card from './Components/Card/Card'
import JobForm from "./Components/Form";
import Modal from './Components/Common/Modal';
import FormButton from './Components/Common/FormButton';
import { GetAllJobs } from './Apis/Jobs';
const App = () => {
  const [modal, setModal] = useState(false)
  // const jobsData = useMemo(async () => GetAllJobs())
  // console.log("🚀 ~ file: App.jsx:10 ~ App ~ jobsData:", jobsData)
  return (
    <div className="mx-auto w-11/12 my-4">
      <div className="create-btn flex justify-end mb-8">
        <FormButton type="button" text={<span className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>Create Job</span>} primary onClick={() => { setModal(true) }} />
      </div>
      <Modal isOpen={modal} setIsOpen={setModal} >
        <JobForm />
      </Modal>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
        <Card
          id={"id"}
          jobTitle={"UX UI Designer"}
          company={"Great vibes"}
          industry={"Information Technology"}
          location={"Chennai, TamilNadu, India"}
          remoteType={"In-Office"}
          minExp={1}
          maxExp={5}
          minSal={10000}
          maxSal={50000}
          employees={"15-20"}
          isQuickApply={false}
        />

      </div>
    </div>
  )
}

export default App