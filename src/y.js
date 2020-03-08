// import React, { useContext, memo } from 'react';
// import {Context} from './simple - global/Store';

// const Y = memo(() => {
//   const [state, setState] = useContext(Context);

//   return (
//     <div>
//       Y COMPONENT
//       {state.other}
//     </div>
//   );
// })

// export default Y;


import React from 'react';
import { useExtra } from './global/action';

const Y = () => {
  const { title } = useExtra();

  return (
    <div>
      Y COMPONENT
      <p>my title: {title}</p>
    </div>
  );
}

export default Y;
