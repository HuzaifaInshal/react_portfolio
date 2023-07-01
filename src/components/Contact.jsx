import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
          <div style={{"height":"100%"}} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
          </div>
        <div className="work-holder">
        <h1 className="section-title">Contact /&gt;</h1>
        <div className="contact-holder">
        <h1 className="lab-desc">Find me on...</h1>
        <div className="contact-holder-2">
          <a className="contact-box" target="_blank" target="_blank" href='https://www.linkedin.com/in/huzaifa-inshal-b4a443279/'>
            <a className="contact-logo"><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
            <p className="contact-desc">ln/HuzaifaInshal</p>
          </a>
          <a className="contact-box" target="_blank" href='https://github.com/HuzaifaInshal'>
            <a className="contact-logo"><i class="fa-brands fa-github fa-2x"></i></a>
            <p className="contact-desc">github.com/HuzaifaInshal</p>
          </a>
          <a className="contact-box" >
            <a className="contact-logo"><i class="fa-solid fa-phone fa-2x"></i></a>
            <p className="contact-desc">+923302546626</p>
          </a>
          <a className="contact-box">
            <a className="contact-logo"><i class="fa-solid fa-envelope fa-2x"></i></a>
            <p className="contact-desc">huzaifainshal@gmail.com</p>
          </a>
          <a className="contact-box" target="_blank" href='https://www.facebook.com/muhammadhuzaifainshal'>
            <a className="contact-logo"><i class="fa-brands fa-facebook-f fa-2x"></i></a>
            <p className="contact-desc">Huzaifa</p>
          </a>
          <a className="contact-box" target="_blank" href='https://www.instagram.com/huzaifa_inshal/'>
            <a className="contact-logo"><i class="fa-brands fa-instagram fa-2x"></i></a>
            <p className="contact-desc">Huzaifa</p>
          </a>
        </div>
        <button className="emailme" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email Me</button>
        </div>
        <div className='small'>© Made with &lt;/&gt; by Huzaifa. Circa 2023.</div>
        </div>
    </section>
  )
}

export default Contact