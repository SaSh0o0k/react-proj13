import React from 'react';
import Counter from '../Counter';
import Mouse from '../Mouse';
import GlobalCounter from '../GlobalCounter';

const MainSection = (props) => {
  const { title, end } = props;
  // console.log(props);
  return (
    <div>
      <h2>{title} {end}</h2>
      {/* <Counter /> */}
      {/* <Mouse /> */}
      <GlobalCounter />
    </div>
  );
}

export default MainSection;
