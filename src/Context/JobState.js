import React, { useEffect, useState } from 'react'
import { GetAllJobs } from '../Apis/Jobs';
import JobContext from './JobContext';

const JobState = (props) => {
    const [jobs, setJobs] = useState();
    useEffect(() => { GetAllJobs(setJobs) }, [])
    return (
        <JobContext.Provider value={{ jobs, setJobs }}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobState