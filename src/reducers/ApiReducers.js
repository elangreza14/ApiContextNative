const example = {
    response: '',
    baseapilink: '',
}

export const ApiReducers = (state, action) => {
    switch (action.type) {
        case 'REQUEST1':
            return {
                ...state,
                baseapilink: '2',
            };
        case 'REQUEST2':
            return {
                ...state,
                baseapilink: '3',
            };
        case 'RESPONSE':
            return {
                ...state,
                response: action.url
            };
        case 'RESET':
            return {
                response: '',
                baseapilink: '1',
            };
        default:
            return state;
    }
};
