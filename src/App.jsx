import React, { useState } from 'react'
import Card from './Components/Card/Card'
import JobForm from "./Components/Form";
import Modal from './Components/Common/Modal';
const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="container mx-auto my-4">
      <div className="create-btn flex justify-end">
        <button className="bg-primary hover:bg-btnHover text-white flex items-center justify-center gap-1 text-base font-poppins font-normal py-2 px-4 rounded"
          onClick={() => { setModal(true) }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create Job
        </button>
      </div>
      <Modal isOpen={modal} setIsOpen={setModal} >
        <JobForm />
      </Modal>
      <div className="grid grid-cols-2 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App