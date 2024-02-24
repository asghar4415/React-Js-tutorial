import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {

    const params = useParams()
    console.log(params)
    return (
        <div>
        <h1>Job Details</h1>
        <p>Welcome to the Job Details page</p>
        </div>
    )
    }

export default JobDetails