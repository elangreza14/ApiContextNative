import React, { createContext, useReducer } from 'react'
import { ApiReducers } from '../reducers/ApiReducers';

export const ApiContext = createContext()

const ApiContextProvider = props => {
    const initialState = {
        response: '',
        baseapilink: '1',
    }

    const [ApiAll, dispatch] = useReducer(ApiReducers, initialState);


    return (
        <ApiContext.Provider value={{ ApiAll, dispatch }}>
            {props.children}
        </ApiContext.Provider>
    );
}

export default ApiContextProvider
