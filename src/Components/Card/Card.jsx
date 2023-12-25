import React, { useState } from 'react'
import Modal from '../Common/Modal';
import DeleteAlert from '../Common/DeleteAlert';
import netflixImg from "./netflix.png";
import FormButton from '../Common/FormButton';
const Card = (props) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const { id, jobTitle, company, industry, location, remoteType, minExp, maxExp, minSal, maxSal, employees, isQuickApply } = props
    return (
        <div className='bg-card border border-border rounded-lg font-poppins px-6 py-4 text-dark relative'>
            <div className='flex gap-2'>
                <div className="image"><img src={netflixImg} alt="job logo" /></div>
                <div>
                    <div className='font-normal mb-6'>
                        <h2 className='text-dark text-2xl'>{jobTitle}</h2>
                        <p className='text-base'>{company} - <span>{industry}</span></p>
                        <p className='text-base text-grayText'>{location || ""}{remoteType && <span> ( {remoteType} )</span>}</p>
                    </div>
                    <div className='font-normal mb-6'>
                        <p className='text-base mb-2'>Part-Time (9.00 am - 5.00 pm IST)</p>
                        {minExp && maxExp && <p className='text-base mb-2'>Experience ({minExp} - {maxExp} years)</p>}
                        {minSal && maxSal && <p className='text-base mb-2'>INR (₹) {minSal} - {maxSal} / Month</p>}
                        {employees && <p className='text-base'>{employees} employees</p>}
                    </div>
                    <div>{isQuickApply ? <FormButton text="Apply Now" type="button" primary /> : <FormButton text="External Apply" type="button" />}</div>
                </div>
            </div>
            <div className="absolute top-0 right-0 m-4">
                <button className="bg-primary text-white p-2 rounded-full" title='edit job'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <button className="bg-error text-white p-2 rounded-full ml-2" title='delete job' onClick={() => setDeleteModal(true)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <Modal isOpen={deleteModal} setIsOpen={setDeleteModal}>
                <DeleteAlert setIsOpen={setDeleteModal} id={id} />
            </Modal>
        </div>
    )
}

export default Card