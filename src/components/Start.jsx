import React,{useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import HackerEffect from './Hacker';

const Start = () => {

  const [first,setFirst] = useState({width:'100%',height:'100%'})
  const [third,setthird] = useState({width:'0px',height:'25px'})
  const [sec,secTitle] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers more than once,
  });

  useEffect(()=>{
    if(inView){
      const timer = setTimeout(() => {
        setFirst({width:'0%',height:'100%',right:'0'})
        setthird({width:'100px',height:'25px'})
    }, 1500);
    return () => clearTimeout(timer);
    }
  },[inView])
  useEffect(()=>{
    if(inView){
      const timer = setTimeout(() => {
        secTitle('Start />')
        setthird({width:'0px',height:'25px',right:'0'})
    }, 2200);
    return () => clearTimeout(timer);
    }
  },[inView])


  return (
    <section id='start' className="start">

      <div style={{"height":"120%"}} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
        </div>
        <div className="titleholder">
        <h1 className="section-title"><div className="test3" style={third}></div>{sec}</h1>
        <h1 ref={ref} className={`title-title animate__animated ${inView ? 'animate__fadeInLeft' : ''}`}><div className='test' style={first}></div>Hi, my name is <span className='uh'>Huzaifa <br/>Inshal</span><br/>i <span className='u'>design</span> and develop <HackerEffect/></h1>
        <h1 ref={ref} className={`title-title2 animate__animated ${inView ? 'animate__fadeInRight' : ''}`}><div className='test2' style={first}></div>Let me show You...</h1>
      </div>
    </section>
  )
}

export default Start