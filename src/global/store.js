import React, { createContext, useContext, useReducer } from 'react';
import InitialState from './initial-state';
import Reducer from './reducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);