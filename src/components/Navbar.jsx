import React from 'react'
import { useState } from 'react'

const Navbar = ({number,visible,onMouseEnter,onMouseLeave, onHover, onLeave}) => {
    number=Number(number)
    const [current,setCurent] = useState()
    const openNav =()=>{
        console.log("clicked");
        if(current==="flex"){
            setCurent("none")
        }else{
        setCurent("flex")}
    }
  return (
    <>
    <nav style={visible ? { height: "80px" } : {height: "0px" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="logoHolder" onMouseEnter={onHover} onMouseLeave={onLeave}>
           <span className='logoSpan'>&lt;</span> <h1 className="logo">huzaifa</h1><span className='logoSpan'>/&gt;</span>
        </div>

        <div className="linksHolder" style={{display:current}}>
            <ul >
                <li onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <a  href="#start" className={`notactive ${number===0 ? 'active' : ''}`}>Start <span>/&gt;</span></a>
                </li>
                <li onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <a  href="#work" className={`notactive ${number===1 ? 'active' : ''}`}>Work <span>/&gt;</span></a>
                </li>
                <li onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <a href="#lab" className={`notactive ${number===2 ? 'active' : ''}`}>Lab <span>/&gt;</span></a>
                </li>
                <li onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <a href="#about" className={`notactive ${number===3 ? 'active' : ''}`}>About <span>/&gt;</span></a> 
                </li>
                <li onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <a  href="#contact" className={`notactive ${number===4 ? 'active' : ''}`}>Contact <span>/&gt;</span></a>
                </li>
            </ul>
        </div>
                <div className="openBtn"><a className='openBtn2' onClick={openNav}><i class="fa-sharp fa-solid fa-bars fa-2x"></i></a></div>
    </nav>
    </>
  )
}

export default Navbar