import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Cursor from './Cursor'

const Welcome = () => {
    const navigate = useNavigate();
    const [loadScreen,setLoadScreen] = useState({ width: '0vw'})
    const [remScreen,setRemScreen] = useState({width:'0vw'})
    const [text,setText] = useState("")
    const [showDiam,setDiam]=useState(false)
    const [anima,setAnima]=useState({ width: '0px',height: '0px',transform: 'none',opacity:'1'})
    const [aclass,setClass] = useState("")
    const [bclass,setClassb] = useState("")
    const [cclass,setClassc] = useState("")
    const [dclass,setClassd] = useState("")
    const [showTimer,setShowTimer] = useState(false)
    const [topp,setTop] = useState('-20px')
    const [time,setTime]=useState('')

    const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };

    useEffect(() => {
        const timer = setTimeout(() => {
          setTop('15px')
            setLoadScreen({ width: '25vw'});
            setRemScreen({ width: '75vw'});
            setClass("animate__fadeInUpBig")
            setText("My name is Huzaifa inshal")
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setClass("animate__fadeOutUpBig")
        }, 2800);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadScreen({ width: '40vw'});
            setRemScreen({ width: '60vw'});
            setClass("animate__fadeInUpBig")
            setText("i am a full stack software engineer")
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
      useEffect(() => {
        const timer = setTimeout(() => {
            setClass("animate__fadeOutUpBig")
        }, 5800);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadScreen({ width: '60vw'});
            setRemScreen({ width: '40vw'});
            setClass("animate__fadeInUpBig")
            setText("you are very welcome on my portfolio web")
        }, 6000);
        return () => clearTimeout(timer);
      }, []);
      useEffect(() => {
        const timer = setTimeout(() => {
            setClass("animate__fadeOutUpBig")
        }, 8800);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadScreen({ width: '100vw'});
            setRemScreen({ width: '0vw'});
            setText("")
        }, 9000);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setClassb("animate__fadeOutDownBig")
        }, 10000);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDiam(true)
            setClassc("animate__fadeInDown")
            setClassd("animate__fadeInUp")
        }, 10500); 
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnima({ width: '500px',height: '500px'})
        }, 11000);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnima({width: '500px',height: '500px',transform:'rotate(45deg)'})
        }, 13500);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnima({width: '500px',height: '500px',transform:'rotate(45deg)',opacity:'0.4'})
            setShowTimer(true)
            setTime('3')
        }, 13900);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime('2')
        }, 14900);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime('1')
        }, 15900);
        return () => clearTimeout(timer);
      }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime('0')
            navigate('/home');  
        }, 16900);
        return () => clearTimeout(timer);
         // eslint-disable-next-line
      }, []);

      function skipIntro(){
        navigate('/home');
      }
  return (
    <>
    <Cursor isHovered={isHovered} />
    <section id="welcome">
      <p className="skipIntro" style={{marginTop:topp}} onClick={skipIntro} 
      onMouseEnter={handleHover} onMouseLeave={handleLeave}>Click Here to Skip Intro</p>
        {!showDiam ? 
        <div className="load-screen" style={loadScreen}>
            <div className={`load-screen-holder animate__animated ${bclass}`}>
            <div className={`rotate`}></div>
            <h1 className={`loading`}>loading</h1>
            </div>
        </div> :
        <div className="diam">
            <div className="anima" style={anima}></div>
            <h1 className={`diam-name animate__animated ${cclass}`} >huzaifa inshal</h1>
            <h1 className={`diam-desc animate__animated ${dclass}`}>Full Stack software engineer</h1>
            {showTimer ? <div className="timer">{time}</div> : ''}
        </div>
        }
        <div className="rem-screen" style={remScreen}>
           <h1 className={`rem-name animate__animated ${aclass}`}>{text}</h1>
        </div>
    </section>
    </>
  )
}

export default Welcome