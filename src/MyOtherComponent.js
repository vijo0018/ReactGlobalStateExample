// import React, {useContext, memo, useMemo} from 'react';
// import {Context} from './simple - global/Store';
// import Y from './y';

// const MyOtherComponent = memo(() => {
//   const [state, setState] = useContext(Context);

//   const handleClick = async () => {
//     const person = await (await fetch('http://uinames.com/api/?ext')).json();
//     console.log(person)
//     setState(person)
//   }

//   const y = useMemo(() => {return (
//     <Y />
//   )}, [])

//   return (
//     <div>
//       <div>
//         <h2>MyOtherComponent</h2>
//         <p>Name: {state.name}</p>
//         <p>Email: {state.email}</p>
//         <button onClick={handleClick}>Click me</button>
//         {y}
//       </div>
//     </div>
//   );
// })

// export default MyOtherComponent;

import React, {memo, useMemo} from 'react';
import Y from './y';

const MyOtherComponent = memo(() => {

  const y = useMemo(() => {return (
    <Y />
  )}, [])

  return (
    <div>
      <div>
        <h2>MyOtherComponent</h2>
        {y}
      </div>
    </div>
  );
})

export default MyOtherComponent;
