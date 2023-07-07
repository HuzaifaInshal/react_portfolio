import React,{useEffect,useState,useRef} from 'react'
import Navbar from './Navbar'
import Start from './Start'
import Work from './Work'
import Lab from './Lab'
import About from './About'
import Contact from './Contact'
import Cursor from './Cursor'



const Web = ({data,lab}) => {

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


  return (
    <>
    <Cursor isHovered={isHovered}/>
    <Navbar number={visibleHeadingIndex} visible={isVisible} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onHover={handleHover} onLeave={handleLeave}/>
        <div ref={headingRefs[0]} data-index={0}><Start data-cursor="pointer"/></div>
        <div className="back">
        <div ref={headingRefs[1]} data-index={1}><Work data-cursor="pointer2"/></div>
        <div ref={headingRefs[2]} data-index={2}><Lab/></div>
        </div>
        <div ref={headingRefs[3]} data-index={3}><About/></div>
        <div ref={headingRefs[4]} data-index={4}><Contact/></div>
    </>
  )
}

export default Web