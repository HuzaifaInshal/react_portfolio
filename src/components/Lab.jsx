import React,{useEffect,useState} from 'react'

const Lab = ({lab}) => {
  return (
    <section id="lab">
<div style={{"height":"200%"}} className="holder">
    <div className="circle"></div>
    <div className="timeline"></div>
  </div>
  <div className="work-holder">
  <h1 className="section-title">Lab /&gt;</h1>
  <h2 className="lab-desc">Check out my other projects like command line interfaces and code snippets.</h2>
      <div className="grid-holder">
        <div className="gridbox">
          <h1 className="gridh">Static Sites</h1>
          {lab ? (lab.map((single)=>{
              if(single.target==="static"){
              return(<a target='_blank' className='reduce' href={`https://huzaifa123.pythonanywhere.com/project/${single.id}`}><h2 className='grid-items'>{single.name}<img className='grid-items-next' src={`https://huzaifa123.pythonanywhere.com${single.image_path}`}/></h2></a>)
              }
            })) : 'loading...'}
        </div>
        <div className="gridbox">
          <h1 className="gridh">Data Dashboards</h1>
          {lab ?(lab.map((single)=>{
              if(single.target==="dashboard"){
              return(<a target='_blank' className='reduce' href={`https://huzaifa123.pythonanywhere.com/project/${single.id}`}><h2 className='grid-items'>{single.name}<img className='grid-items-next' src={`https://huzaifa123.pythonanywhere.com${single.image_path}`}/></h2></a>)
              }
            })): 'loading...'}
        </div>
        <div className="gridbox">
          <h1 className="gridh">Jupyter Snaps</h1>
          {lab ?(lab.map((single)=>{
              if(single.target==="jupyter snippets"){
              return(<a target='_blank' className='reduce' href={`https://huzaifa123.pythonanywhere.com/project/${single.id}`}><h2 className='grid-items'>{single.name}<img className='grid-items-next' src={`https://huzaifa123.pythonanywhere.com${single.image_path}`}/></h2></a>)
              }
            })): 'loading...'}
        </div>
      </div>
  </div>
</section>
  )
}

export default Lab