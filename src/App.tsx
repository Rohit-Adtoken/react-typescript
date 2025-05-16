import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
// import React from 'react'
// import Navbar from './Components/Navbar'
// import Hero2 from './Components/Hero2'
// import HomeCards from './Components/HomeCards'
// import JobListning from './Components/JobListings'
// import ViewAllJobs from './Components/ViewAllJobs'
import HomePage from './Pages/HomePage';
import MainLayouts from './Layouts/MainLayouts';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage , {jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';



const App = () => {

//add job 
  const addJob   =async(newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(newJob),
      
    })
    return;
}

//add delete job
const deleteJob =async(id) => {
  const res = await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
  })
  console.log('delete job',id); 
}

//add update job
const UpdateJob =async(job) => {
  const res = await fetch(`/api/jobs/${job.id}`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(job),
    
  })
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayouts/>}>
  <Route index element = {<HomePage />}/>
  <Route path='/jobs' element = {<JobsPage />}/>
  <Route 
  path='/jobs/:id' 
  element = {<JobPage deleteJob={deleteJob} />} 
  loader={jobLoader}
  />

<Route 
  path='/edit-job/:id' 
  element = {<EditJobPage UpdateJobSubmit={UpdateJob} />} 
  loader={jobLoader}
  />
  <Route 
  path='/add-job' 
  element = {<AddJobPage 
  addJobSubmit={addJob} 
  />} />

  <Route path='*' element = {<NotFoundPage />}/>
  </Route>)
);
  return (
    <RouterProvider router={router}/>
    // <>

    // <Navbar />
    // <Hero2 />
    // <HomeCards />
    // <JobListning />
    // <ViewAllJobs /> 


    // </>
  )
}
 
export default App