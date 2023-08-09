import React, { useState, useEffect } from 'react';

const HackerEffect = () => {
  const arrayText = ["Webs..","Mobile","React.","UIUX...","Node.."]
  const [index2,setIndex2] = useState(0)
  const [initialText,setText] = useState(arrayText[index2]);
  const [currentText, setCurrentText] = useState(initialText);
  let interval = null;

  function myFunction(){
    setIndex2((prevCount) => {
      if (prevCount === 4) {
        return 0;
      } else {
        return prevCount + 1;
      }
    });}
  
  useEffect(() => {
    setText(arrayText[index2]);
  }, [arrayText, index2]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      myFunction();
    }, 6000);
  
    return () => clearInterval(interval);
  }, []);


  const letters = 'ABCDEFGHI!@#JKLMNOP$%^Q:"<>?;RSTUV&*(W+=X``~YZ';

  const startAnimation = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setCurrentText((prevText) =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return initialText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= initialText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 40);
  };

  const stopAnimation = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    startAnimation(); // Invoke the animation when the component renders

    return () => {
      clearInterval(interval);
    };
  }, [initialText]); // Empty dependency array to run the effect only once on initial render

  return (
    <h1 className='hack' data-value={initialText}>
      {currentText}
    </h1>
  );
};

export default HackerEffect;
