import React from 'react'

const Navbar = ({number,visible,onMouseEnter,onMouseLeave, onHover, onLeave}) => {
    number=Number(number)
  return (
    <>
    <nav style={visible ? { height: "80px" } : {height: "0px" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="logoHolder" onMouseEnter={onHover} onMouseLeave={onLeave}>
           <span className='logoSpan'>&lt;</span> <h1 className="logo">huzaifa</h1><span className='logoSpan'>/&gt;</span>
        </div>

        <div className="linksHolder">
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
    </nav>
    </>
  )
}

export default Navbar