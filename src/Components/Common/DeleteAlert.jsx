import React, { useContext } from 'react'
import { DeleteJob, GetAllJobs } from '../../Apis/Jobs'
import toast from "react-hot-toast";
import JobContext from '../../Context/JobContext';
const DeleteAlert = ({ setIsOpen, id }) => {
    const { setJobs } = useContext(JobContext);
    const deleteJob = async () => {
        if (id) {
            const res = await DeleteJob(id)
            if (res) {
                toast.success("Job Deleted Successfully")
                GetAllJobs(setJobs)
                setIsOpen(false)
            }
        }
    }
    return (
        <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white">
                <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    <svg className="text-error mx-auto mb-4 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="mb-5 font-normal text-dark text-lg font-poppins">Are you sure you want to delete this job?</h3>
                    <button onClick={deleteJob} type="button" className="text-white bg-error font-poppins rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                        Yes
                    </button>
                    <button onClick={() => { setIsOpen(false) }} type="button" className=" border-primary border-3 text-primary font-poppins bg-white rounded-lg border border-border text-sm px-5 py-2.5">No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert