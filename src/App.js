// import React from 'react';
// import Store from './simple - global/Store';
// import MyOtherComponent from './MyOtherComponent';

// const App = () => {
//   return (
//     <Store>
//     <div>
//       <MyOtherComponent />
//     </div>
//     </Store>
//   );
// }
// export default App;


import React from 'react';
import MyOtherComponent from './MyOtherComponent';
import { useExtra } from './global/action';

const App = () => {
  const { setTitle } = useExtra();
  
  return (
    <div>
      <MyOtherComponent />
    <button onClick={() => setTitle("NY TITLE")}>SET NEW TITLE</button>
    </div>
  );
}

export default App;