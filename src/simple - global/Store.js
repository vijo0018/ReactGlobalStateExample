import React, {useState} from 'react';

const initalState = {
    name: 'Vidar',
    email: 'Vidar@vidar.se',
    other: 'HEJ'
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initalState);

    return(
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default Store;


