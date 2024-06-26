import React, { useRef,useEffect, useState } from 'react'

const About = ({about}) => {
  const parentRef = useRef(null);
  const [holderHeight, setHolderHeight] = useState(100);
  useEffect(() => {
    if (parentRef.current) {
        setHolderHeight(parentRef.current.clientHeight);
    }
    console.log(about);
  }, [about]);
  return (
    <section id="about" ref={parentRef}>
          <div style={{"height": `${holderHeight +32 }px` }} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
          </div>
        <div className="about-holder">
        <h1 className="section-title">About /&gt;</h1>
        <div className="code">
              <div className="code1 purple">class <span className='yellow'>Huzaifa Inshal</span></div>
              <div className="code1 grey"><span className='dots'>..</span>// I can, because I did.</div>
              <div className="code1 grey"><span className='dots'>..</span>// My vast variety of skills is continuously expanding.</div>
              <div className="code1"><span className='dots'>..</span><span className="purple">contructor</span><span className="white">() &#123;</span></div>
              <div className="code1 white"><span className="dots">....</span><span className="red">this</span>.<span className="grassgreen">name</span><span className="red"> = </span><span className="green">'Huzaifa Inshal'</span></div>
              <div className="code1 white"><span className="dots">....</span><span className="red">this</span>.<span className="grassgreen">email</span><span className="red"> = </span><span className="green">huzaifainshal@gmail.com</span></div>
              <div className="code1 white"><span className="dots">..</span>&#125;</div>

              <div className="code1 dots">..<span className="yellow">workExperience</span><span className="white">() &#123;</span></div>
              <div className="code1 purple"><span className="dots">....</span>return <span className="white">[</span></div>
              
              {about ? (
                about.data.workExperience.slice().reverse().map((single,index) => (
                  <>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white">&#123; </span>
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Tenure <span className="white"> : </span>
                    {`${single[0]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Position <span className="white"> : </span>
                    {`${single[1]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Employer <span className="white"> : </span>
                    {`${single[2]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Description <span className="white"> : </span>
                    {`${single[3]}`}
                  </div>
                  {single[4] && single[4].length !=0 ?
                  <div className="code1 green">
                  <span className="dots">......</span>
                  Certificate <span className="white"> : </span>
                  <a href={single[4]} target='_blank'>Click here to View</a>
                  </div>
                    :'' 
                  }
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white"> &#125; ,</span>
                  </div>
                  </>
                ))
              ) : 'loading...'}

              {/* {Work ? (
                Work.map((single) => (
                  <div className="code1 green" key={single.id}>
                    <span className="dots">......</span>
                    <span className="white">&#123; </span>
                    {`'${single.duration}'`}
                    <span className="white"> : </span>
                    {`'${single.name}'`}
                    <span className="white"> &#125;</span>
                  </div>
                ))
              ) : 'loading...'} */}

              {/* <div className="code1 green"><span className="dots">......</span><span className="white">&#123; </span>'2022 - present'<span className="white"> : </span>'Web Development Instructor at Professionals Hub Institute'<span className="white"> &#125;</span></div> */}
              {/* <div className="code1 green"><span className="dots">......</span><span className="white">&#123; </span>'2 Months 2022'<span className="white"> : </span>'Internee at NCAI, NEDUET'<span className="white"> &#125;</span></div> */}
              <div className="code1 white"><span className="dots">....</span>]</div>
              <div className="code1 white"><span className="dots">..</span>&#125;</div>

              <div className="code1 yellow"><span className="dots">..</span>education<span className="white">() &#123;</span></div>
              <div className="code1 purple"><span className="dots">....</span>return<span className="white"> [</span></div>
                {about ? (
                about.data.education.slice().reverse().map((single,index) => (
                  <>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white">&#123; </span>
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Passout Year <span className="white"> : </span>
                    {`${single[0]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Education Level <span className="white"> : </span>
                    {`${single[1]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Insitute Name <span className="white"> : </span>
                    {`${single[2]}`}
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    Grade Achieved <span className="white"> : </span>
                    {`${single[3]}`}
                  </div>
                  { single[4] && single[4].length !=0 ?
                  <div className="code1 green">
                  <span className="dots">......</span>
                  Description <span className="white"> : </span>
                  {single[4]}
                  </div>
                    :''
                  }
                  { single[5] && single[5].length !=0 ?
                  <div className="code1 green">
                  <span className="dots">......</span>
                  FYP/Thesis <span className="white"> : </span>
                  {single[5]}
                  </div>
                    :''
                  }
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white"> &#125; ,</span>
                  </div>
                  </>
                ))
              ) : 'loading...'}
                <div className="code1 white"><span className="dots">....</span>]</div>
              <div className="code1 white"><span className="dots">..</span>&#125;</div>

              <div className="code1 yellow"><span className="dots">..</span>skills<span className="white">() &#123;</span></div>
              <div className="code1 green">
                <span className="dots">....</span><span className="purple">return</span><span className="white"> [ </span>
                  {about ? about.data.skills : 'loading...'}
              </div>
              <div className="code1 white"><span className="dots">....</span>]</div>
              <div className="code1 white"><span className="dots">..</span>&#125;</div>

              <div className="code1 dots">..<span className="yellow">certificationsAndAchievements</span><span className="white">() &#123;</span></div>
              <div className="code1 purple"><span className="dots">....</span>return <span className="white">[</span></div>
              {about ? (
                about.data.certifications.slice().reverse().map((single,index) => (
                  <>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white">&#123; </span>
                  </div>
                  <div className="code1 green">
                    <span className="dots">......</span>
                    {index} <span className="white"> : </span>
                    {`${single[0]}`}
                  </div>
                  { single[1] && single[1].length !=0 ?
                  <div className="code1 green">
                  <span className="dots">......</span>
                  View Course <span className="white"> : </span>
                  <a href={single[1]} target='_blank'>Click here to View</a>
                  </div>
                    :''
                  }
                  { single[2] && single[2].length !=0 ?
                  <div className="code1 green">
                  <span className="dots">......</span>
                  Certificate <span className="white"> : </span>
                  <a href={single[2]} target='_blank'>Click here to View</a>
                  </div>
                    :''
                  }
                  <div className="code1 green">
                    <span className="dots">......</span>
                    <span className="white"> &#125; ,</span>
                  </div>
                  </>
                ))
              ) : 'loading...'}





                <div className="code1 white"><span className="dots">....</span>]</div>
              <div className="code1 white"><span className="dots">..</span>&#125;</div>

        </div>
        </div>

    </section>
  )
}

export default About