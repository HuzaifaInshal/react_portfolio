import React,{useState,useRef,useEffect} from 'react'
import { Tilt } from 'react-tilt'
import imageURL from '../imageURL';
import OverMain from './OverMain';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction if false
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Work = ({data,handleHover,handleLeave}) => {
  const [sentdata,setSentData] = useState()
  const [sentCount,setSentCount] = useState(1)
  let index = 0;

  // const [rotations, setRotations] = useState([]);
  // const handleMouseEnter = (index) => {
  //   setRotations((prevRotations) => {
  //     const updatedRotations = [...prevRotations];
  //     updatedRotations[index] = { offsetX: 0, offsetY: 0 };
  //     return updatedRotations;
  //   });
  // };
  // const handleMouseMove = (index, e) => {
  //   const cardItem = e.currentTarget.querySelector(".card-item");
  //   const force = 5;
  //   const offsetY = -(e.nativeEvent.offsetY - cardItem.offsetHeight / 2) / force;
  //   const offsetX = (e.nativeEvent.offsetX - cardItem.offsetWidth / 2) / force;
  //   setRotations((prevRotations) => {
  //     const updatedRotations = [...prevRotations];
  //     updatedRotations[index] = { offsetX, offsetY };
  //     return updatedRotations;
  //   });
  // };
  // const handleMouseLeave = (index) => {
  //   setRotations((prevRotations) => {
  //     const updatedRotations = [...prevRotations];
  //     updatedRotations[index] = { offsetX: 0, offsetY: 0 };
  //     return updatedRotations;
  //   });
  // };

  function clickHanlder(dat){
    setSentData(dat);
    setSentCount(sentCount + 1);
  }

  const parentRef = useRef(null);
  const [holderHeight, setHolderHeight] = useState(100);
  useEffect(() => {
    if (parentRef.current) {
        setHolderHeight(parentRef.current.clientHeight);
    }
  }, [data]);


  return (
    <>
    <OverMain data={sentdata} count={sentCount}/>
    <section id='work' className="work" ref={parentRef}>
            <div style={{"height":`${holderHeight + 32}px`}} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
        </div>
        <div className="work-holder">
        <h1 className="section-title">Work /&gt;</h1>
        <h1 className="title-title2 new1">Selected Web Mobile and other projects...</h1>

          <div className="webHolder">
            {data ? (data.slice().reverse().map((single)=>{
              if(single === null){
              }else{
                if(single.data.type.major==="work" && single.data.isActive && single.data.type.minor==="web"){
                  index+=1;
                  return(<div onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=>clickHanlder(single.data)} key={single.id}><Tilt options={defaultOptions} key={single.data.id} className="reduce card">
              <div className="card-item" style={{ backgroundImage: `url(${imageURL(single.data.titlePictureURL)})` }}>
                <h1 className="wor-tits">{index}. {single.data.title}</h1>
                <div className="line-break"></div>
                <h3 className="wor-tits2">{single.data.majorHashtags.map((each)=>(
                  `${each} `
                ))}</h3>
              </div></Tilt></div>)
              }
            }
            })) : 'loading'}

            {/* {data ? (data.slice().reverse().map((single)=>{
              if(single.target==="web"){
              return(<Tilt options={defaultOptions} key={single.id} className="reduce card" >
                <a href={`https://huzaifa123.pythonanywhere.com/project/${single.id}`} target='_blank' style={{textDecoration:"none"}}>
              <div className="card-item" style={{ backgroundImage: `url( https://huzaifa123.pythonanywhere.com${single.image_path})` }}>
                <h1 className="wor-tits">{single.name}</h1>
                <div className="line-break"></div>
                <h1 className="wor-tits2">{index}</h1>
                {index += 1}
              </div></a></Tilt>)
              }
            })) : 'loading'} */}

          </div>

          <div className="threedholder">
          {data ? (data.slice().reverse().map((single)=>{
              if(single === null){
              }else{
                if(single.data.type.major==="work" && single.data.isActive && single.data.type.minor==="threed"){
                  index+=1
                  return(<div onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=>clickHanlder(single.data)} key={single.id}><Tilt options={defaultOptions} key={single.data.id} className="reduce card" >
              <div className="card-item" style={{ backgroundImage: `url(${imageURL(single.data.titlePictureURL)})` }}>
                <h1 className="wor-tits">{index}. {single.data.title}</h1>
                <div className="line-break"></div>
                <h3 className="wor-tits2">{single.data.majorHashtags.map((each)=>(
                  `${each} `
                ))}</h3>
              </div></Tilt></div>)
              }
            }
            })) : 'loading'}
          </div>

          <div className="gameHolder">
          {data ? (data.slice().reverse().map((single)=>{
              if(single === null){
              }else{
                if(single.data.type.major==="work" && single.data.isActive && single.data.type.minor==="game"){
                  index+=1
                  return(<div onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=>clickHanlder(single.data)} key={single.id}><Tilt options={defaultOptions} key={single.data.id} className="reduce card" >
              <div className="card-item" style={{ backgroundImage: `url(${imageURL(single.data.titlePictureURL)})` }}>
                <h1 className="wor-tits">{index}. {single.data.title}</h1>
                <div className="line-break"></div>
                <h3 className="wor-tits2">{single.data.majorHashtags.map((each)=>(
                  `${each} `
                ))}</h3>
              </div></Tilt></div>)
              }
            }
            })) : 'loading'}
          </div>

        </div>
    </section>
    </>
  )
}

export default Work