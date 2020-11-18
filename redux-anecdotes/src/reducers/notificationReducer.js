const initialState = 'Initial notification message'

const notificationReducer = (state=initialState, action) => {
    switch (action.type) {
                      
        case('NEW') :             
            return (`Created new anecdote : ${action.data.anecdote}`)
        case('VOTED') :                 
            return (`You voted for ${action.data.anecdote}`)
        case('ERASE'):
            return null                  
    }
    return state

}

export const newAnecdote = (anecdote) => {
    return {
        type: 'NEW',
        data: {anecdote}
    }
}

export const votedForAnecdote = (anecdote) => {
    return {
        type:'VOTED',
        data: {anecdote}
    }
}
export const eraseNotification = (notification) => {
    return {
        type: 'ERASE'        
    }
}

export default notificationReducer