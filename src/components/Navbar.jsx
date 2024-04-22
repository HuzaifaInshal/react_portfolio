import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = ({number,visible,onMouseEnter,onMouseLeave, onHover, onLeave}) => {
    number=Number(number)
    const [show,setShow] = useState({display:"none"})

  const openNav =()=>{
      setShow({display:"flex"})
    }
    const closeNav =()=>{
      setShow({display:"none"})

  }

  return (
    <>

    <div className="over" style={show} onClick={closeNav}>
    <div className="openBtn"><a className='openBtn2 cross' onClick={closeNav}><i className="fa-solid fa-x "></i></a></div>    
    <a  href="#start" className={`notactive ${number===0 ? 'active' : ''}`}>Start <span>/&gt;</span></a>
    <a  href="#work" className={`notactive ${number===1 ? 'active' : ''}`}>Work <span>/&gt;</span></a>
    <a  href="#lab" className={`notactive ${number===2 ? 'active' : ''}`}>Lab <span>/&gt;</span></a>
    <a  href="#about" className={`notactive ${number===3 ? 'active' : ''}`}>About <span>/&gt;</span></a>
    <a  href="#contact" className={`notactive ${number===4 ? 'active' : ''}`}>Contact <span>/&gt;</span></a>

    </div>
    <nav style={visible ? { height: "80px" } : {height: "0px" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="logoHolder" onMouseEnter={onHover} onMouseLeave={onLeave}>
           <span className='logoSpan'>&lt;</span> <h1 className="logo">huzaifa</h1><span className='logoSpan'>/&gt;</span>
        </div>

        <div className="linksHolder">
            <ul>
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
                <div className="openBtn"><a className='openBtn2' onClick={openNav}><i className="fa-sharp fa-solid fa-bars fa-2x"></i></a></div>
    </nav>
    </>
  )
}

export default Navbar