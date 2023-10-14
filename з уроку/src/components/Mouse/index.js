import React from 'react';
import { useState } from 'react';

const Mouse = () => {
  const [setting, setSetting] = useState({
    x: 0,
    y: 0,
    count: 0
  })
  const handlerMouseMove = (e) => {
    // const rect = e.target.getBoundingClientRect();
    // const x = e.clientX - rect.left; //x position within the element.
    // const y = e.clientY - rect.top;  //y position within the element.
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    setSetting({
      ...setting,
      x,
      y
    })
  }
  const handlerClick = () => {
    setSetting({
      ...setting,
      count: setting.count + 1
    })
  }
  return (
    <div style={{ height: '25vh', backgroundColor: 'pink', textAlign: 'center', paddingTop: '10vh' }}
      onMouseMove={handlerMouseMove}
      onClick={handlerClick}
    >
      <p>x:{setting.x}</p>
      <p>y:{setting.y}</p>
      <p>count:{setting.count}</p>
    </div>
  );
}

export default Mouse;
