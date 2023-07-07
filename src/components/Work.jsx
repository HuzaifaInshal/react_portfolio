import React from 'react'
import { data } from '../work'


const Work = () => {
  return (
    <section id='work' className="work">
            <div style={{"height":"300%"}} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
        </div>
        <div className="work-holder">
        <h1 className="section-title">Work /&gt;</h1>
        <h1 className="title-title2 new1">Selected Web Mobile and other projects...</h1>
          <div className="webHolder">
            {data.map((single)=>{
              if(single.target==="web"){
              return(<a href={single.link}><div className="webHolder2" style={{ backgroundImage: `url(${single.image})` }}>
                <h1 className="wor-tits">{single.name}</h1>
                <div className="line-break"></div>
                <h1 className="wor-tits2">{single.id}</h1>
              </div></a>)
              }
            })}
          </div>
          {/* <div className="mobileHolder"></div> */}
          <div className="gameHolder">
          {data.map((single)=>{
              if(single.target==="game"){
              return(<a href={single.link}><div className="webHolder2" style={{ backgroundImage: `url(${single.image})` }}>
                <h1 className="wor-tits">{single.name}</h1>
                <div className="line-break"></div>
                <h1 className="wor-tits2">{single.id}</h1>
              </div></a>)
              }
            })}
          </div>
        </div>
    </section>
  )
}

export default Work