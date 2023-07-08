import React,{useState} from 'react'
import { data } from '../work'


const Work = () => {
  const [rotations, setRotations] = useState([]);

  const handleMouseEnter = (index) => {
    setRotations((prevRotations) => {
      const updatedRotations = [...prevRotations];
      updatedRotations[index] = { offsetX: 0, offsetY: 0 };
      return updatedRotations;
    });
  };

  const handleMouseMove = (index, e) => {
    const cardItem = e.currentTarget.querySelector(".card-item");
    const force = 5;
    const offsetY = -(e.nativeEvent.offsetY - cardItem.offsetHeight / 2) / force;
    const offsetX = (e.nativeEvent.offsetX - cardItem.offsetWidth / 2) / force;

    setRotations((prevRotations) => {
      const updatedRotations = [...prevRotations];
      updatedRotations[index] = { offsetX, offsetY };
      return updatedRotations;
    });
  };

  const handleMouseLeave = (index) => {
    setRotations((prevRotations) => {
      const updatedRotations = [...prevRotations];
      updatedRotations[index] = { offsetX: 0, offsetY: 0 };
      return updatedRotations;
    });
  };


  return (
    <section id='work' className="work">
            <div style={{"height":"300%"}} className="holder">
          <div className="circle"></div>
          <div className="timeline"></div>
        </div>
        <div className="work-holder">
        <h1 className="section-title">Work /&gt;</h1>
        <h1 className="title-title2 new1">Selected Web Mobile and other projects...</h1>
          <div className="webHolder">
            {data.map((single)=>{
              if(single.target==="web"){
              return(<a key={single.id} className="reduce card" href={single.link} onMouseEnter={() => handleMouseEnter(single.id)}
              onMouseMove={(e) => handleMouseMove(single.id, e)}
              onMouseLeave={() => handleMouseLeave(single.id)}><div className="card-item" style={{ backgroundImage: `url(${single.image})` ,  transform: `rotateX(${rotations[single.map]?.offsetY/2 || 0}deg) rotateY(${rotations[single.id]?.offsetX/2 || 0}deg)`}}>
                <h1 className="wor-tits">{single.name}</h1>
                <div className="line-break"></div>
                <h1 className="wor-tits2">{single.id}</h1>
              </div></a>)
              }
            })}
          </div>
          {/* <div className="mobileHolder"></div> */}
          <div className="gameHolder">
          {data.map((single)=>{
              if(single.target==="game"){
              return(<a key={single.id} className="reduce card" href={single.link} onMouseEnter={() => handleMouseEnter(single.id)}
              onMouseMove={(e) => handleMouseMove(single.id, e)}
              onMouseLeave={() => handleMouseLeave(single.id)}><div className="card-item" style={{ backgroundImage: `url(${single.image})` ,  transform: `rotateX(${rotations[single.map]?.offsetY/2 || 0}deg) rotateY(${rotations[single.id]?.offsetX/2 || 0}deg)`}}>
                <h1 className="wor-tits">{single.name}</h1>
                <div className="line-break"></div>
                <h1 className="wor-tits2">{single.id}</h1>
              </div></a>)
              }
            })}
          </div>
        </div>
    </section>
  )
}

export default Work