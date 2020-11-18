const initialState = ''

const filterReducer =(state=initialState, action) => {
    switch(action.type) {
        case 'FILTER_ON': 
        return action.data 
    }
    return initialState
}

export const WordFilter = (text) => {    
    return {
        type: 'FILTER_ON',
        data: {text}
    }
}

export default filterReducer