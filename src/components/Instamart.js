import React, { useState } from 'react';
const Section = (props) =>{
  return (<div className='border border-blue-500 p-2 m-2'>
  <h1 className='font-bold text-xl'> {props.title}</h1>
  {!props.isVisible ? 
  <h1 onClick={()=>{props.setIsVisible()} }>Show</h1> : 
  <h1 onClick={()=>{props.setIsNotVisible()}}>Hide</h1>}
  {props.isVisible && <h2>{props.description}</h2>}
  </div>)
}

const Instamart = () => {

  const [visibleSection,setVisibleSection]= useState("")
  return (
    <div>
      <h1 className='font-bold text-3xl'>Instamart</h1>
      <Section title="About Instamart"
      description="You're off to a solid start. Take a few minutes to finish setting up
       your first site, deploy an update to your project"
       isVisible={visibleSection=="about"} 
       setIsVisible={()=>setVisibleSection("about")}
       setIsNotVisible={()=>setVisibleSection("")}
      />
      <Section title="Team Instamart"
      description ="welcome to the team of instamart which includes janaki"
      isVisible={visibleSection=="team"}      
      setIsNotVisible={()=>setVisibleSection("")}
      setIsVisible={()=>setVisibleSection("team")}/>
      <Section title="Carrer"
      description ="With the prediction of 1.4M new jobs by 2027 source*, companies are
       looking for skilled candidates. Despite so many opportunities, there is an influx of under qualified graduates who need to gain the necessary skills to get a job.
        So, upskilling is not only an option anymore but a necessity."
        isVisible={visibleSection=="carrer"}        
       setIsNotVisible={()=>setVisibleSection("")}       
       setIsVisible={()=>setVisibleSection("carrer")}/>
    </div>
  )
}

export default Instamart