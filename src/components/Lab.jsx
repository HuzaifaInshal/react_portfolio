import React,{useEffect,useState} from 'react'
import OverMain from './OverMain';

const Lab = ({lab}) => {
  const [sentdata,setSentData] = useState()
  const [sentCount,setSentCount] = useState(1)
  function clickHanlder(dat){
    setSentData(dat);
    setSentCount(sentCount + 1);
  }
  return (
    <>
    <OverMain data={sentdata} count={sentCount}/>
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
              if(single===null){}
              else{
                if(single.data.type.major==="lab" && single.data.isActive && single.data.type.minor==="static"){
                return(<div className='reduce' onClick={()=>clickHanlder(single.data)} key={single.id}><h2 className='grid-items'>{single.data.title}<img className='grid-items-next' src={`${single.data.titlePictureURL}`}/></h2></div>)}
              }
            })) : 'loading...'}

          {/* {lab ? (lab.map((single)=>{
              if(single.target==="static"){
              return(<a target='_blank' className='reduce' href={`https://huzaifa123.pythonanywhere.com/project/${single.id}`}><h2 className='grid-items'>{single.name}<img className='grid-items-next' src={`https://huzaifa123.pythonanywhere.com${single.image_path}`}/></h2></a>)
              }
            })) : 'loading...'} */}
        </div>
        <div className="gridbox">
          <h1 className="gridh">Data Dashboards</h1>
          {lab ? (lab.map((single)=>{
              if(single===null){}
              else{
                if(single.data.type.major==="lab" && single.data.isActive && single.data.type.minor==="dashboards"){
                return(<div className='reduce' onClick={()=>clickHanlder(single.data)} key={single.id}><h2 className='grid-items'>{single.data.title}<img className='grid-items-next' src={`${single.data.titlePictureURL}`}/></h2></div>)}
              }
            })) : 'loading...'}
        </div>
        <div className="gridbox">
          <h1 className="gridh">Jupyter Snaps</h1>
          {lab ? (lab.map((single)=>{
              if(single===null){}
              else{
                if(single.data.type.major==="lab" && single.data.isActive && single.data.type.minor==="jupyter"){
                return(<div className='reduce' onClick={()=>clickHanlder(single.data)} key={single.id}><h2 className='grid-items'>{single.data.title}<img className='grid-items-next' src={`${single.data.titlePictureURL}`}/></h2></div>)}
              }
            })) : 'loading...'}
        </div>
        <div className="gridbox">
          <h1 className="gridh">Other</h1>
          {lab ? (lab.map((single)=>{
              if(single===null){}
              else{
                if(single.data.type.major==="lab" && single.data.isActive && single.data.type.minor==="other"){
                return(<div className='reduce' onClick={()=>clickHanlder(single.data)} key={single.id}><h2 className='grid-items'>{single.data.title}<img className='grid-items-next' src={`${single.data.titlePictureURL}`}/></h2></div>)}
              }
            })) : 'loading...'}
        </div>
      </div>
  </div>
</section>
</>
  )
}

export default Lab