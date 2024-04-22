import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Start from './Start'
import Work from './Work'
import Lab from './Lab'
import About from './About'
import Contact from './Contact'
import Cursor from './Cursor'
import '../Web.css'


const Web = () => {
  const [dataAPI, setData] = useState()
  const [display, setDisplay] = useState();
  const [cv, setCV] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (window.pageYOffset > 80) {
      setIsVisible(false);
    }
  };

  // ACTIVE LINKS IN NAVBAR WORK
  const headingRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [visibleHeadingIndex, setVisibleHeadingIndex] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const headingIndex = parseInt(entry.target.dataset.index);
          setVisibleHeadingIndex(headingIndex);
          // console.log(visibleHeadingIndex)
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observers = headingRefs.map((ref, index) => {
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const resetVisibleHeading = () => {
      setVisibleHeadingIndex(null);
    };

    window.addEventListener('beforeunload', resetVisibleHeading);


    return () => {
      window.removeEventListener('beforeunload', resetVisibleHeading);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response3 = await fetch('https://myportfoliodb-56c35-default-rtdb.asia-southeast1.firebasedatabase.app/HuzaifaResume.json')
      const data3 = await response3.json();
      setCV(data3)
      const response1 = await fetch('https://myportfoliodb-56c35-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json');
      const data1 = await response1.json();
      setData(data1)
      const response2 = await fetch('https://myportfoliodb-56c35-default-rtdb.asia-southeast1.firebasedatabase.app/display.json')
      const data2 = await response2.json();
      setDisplay(data2)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <>
      <a href={`${cv ? cv.data : ''}`} target='_blank' className='download'><div className="downloadBox">get cv</div></a>
      <Cursor isHovered={isHovered} />
      <Navbar number={visibleHeadingIndex} visible={isVisible} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onHover={handleHover} onLeave={handleLeave} />
      <div ref={headingRefs[0]} data-index={0}><Start data-cursor="pointer" /></div>
      <div className="back">
        {/* <div ref={headingRefs[1]} data-index={1}><Work data-cursor="pointer2" data={dataAPI.Projects} /></div> */}
        <div ref={headingRefs[1]} data-index={1}><Work data-cursor="pointer2" data={dataAPI} /></div>
        {/* <div ref={headingRefs[2]} data-index={2}><Lab lab={dataAPI.Projects} /></div> */}
        <div ref={headingRefs[2]} data-index={2}><Lab lab={dataAPI} /></div>
      </div>
      {/* <div ref={headingRefs[3]} data-index={3}><About Work={dataAPI.Works} Cert={dataAPI.Certifications} Skills={dataAPI.SecondarySkills} /></div> */}
      <div ref={headingRefs[3]} data-index={3}><About about={display}/></div>
      <div ref={headingRefs[4]} data-index={4}><Contact /></div>
    </>
  )
}

export default Web