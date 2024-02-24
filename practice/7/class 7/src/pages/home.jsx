import {React, useState} from 'react'
import { useEffect } from 'react'
// import ThreeDCardDemo from '../components/card'
import axios from 'axios'
import '../index.css'

const Home = () => {

    const [jobs, setJobs] = useState([])

    useEffect (() => {
        fetchJobs()
    }
    ,[])

    const fetchJobs = async () => {
        const response = await axios.get('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=Software&category=')
        console.log(response.data)
        setJobs(response.data.data)
    }



    return (
        <>
        <div className='home'>
        <h1>Home</h1>
        <p>Welcome to the Home page</p>
        </div>

        {/* <ThreeDCardDemo /> */}

        <div className='jobs'>
        <h1>Jobs</h1>
        <ul>
        {jobs.map((job, index) => (
            <li key={index}>
                <h2>{job.designation}</h2>
                <p>{job.experience}</p>{job.category.description}</li>
            
        ))}
        </ul>
        </div>







        </>
    )
    }

export default Home
