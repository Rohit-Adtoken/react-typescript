import React from 'react'
import Hero2 from '../Components/Hero2'
import HomeCards from '../Components/HomeCards'
import ViewAllJobs from '../Components/ViewAllJobs'
import JobListnings  from '../Components/JobListings'

const HomePage = () => {
  return (
    <>
    <Hero2 />
    <HomeCards />
    <JobListnings isHome={true} />
    <ViewAllJobs />
   
    </>
  )
}

export default HomePage