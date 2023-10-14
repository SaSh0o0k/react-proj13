import React, { useEffect, useState } from 'react';

const GlobalCounter = () => {
  console.log('render');
  const [count, setCount] = useState(0);
  const handlerClick = () => {
    console.log('click');
    setCount(count + 1);//замикання
  };

  useEffect(() => {
    console.log('addEventListener');
    window.addEventListener('click', handlerClick);
  }, []);

  return (
    <article>
      <h2>Global Counter</h2>
      <p>total:{count}</p>
    </article>
  );
}

export default GlobalCounter;
