import React, { useState, useEffect } from 'react';

const HackerEffect = ({ initialText }) => {



  const [currentText, setCurrentText] = useState(initialText);
  let interval = null;

  const letters = 'ABCDEFGHI!@#JKLMNOP$%^QRSTUV&*(W+=X``~YZ';

  const startAnimation = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setCurrentText((prevText) =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  };

  const stopAnimation = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1
      onMouseOver={startAnimation}
      onMouseOut={stopAnimation}
      data-value={initialText}
    >
      {currentText}
    </h1>
  );
};

export default HackerEffect;
