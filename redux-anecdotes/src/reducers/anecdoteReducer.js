

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE' :   
      const id = action.data.id
      const anecdoteToVote = state.find(n => n.id === id)       
      const votedAnecdote = { 
            ...anecdoteToVote, 
            votes: anecdoteToVote.votes+1
        }            
        return state.map(anecdote => 
          anecdote.id !== id ? anecdote : votedAnecdote)
    case 'NEW_ANECDOTE':              
        return [...state, action.data.content]
    
    default:          
      return state    
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export const addAnecdote = (content) => {
  
  return {
    type: 'NEW_ANECDOTE',    
    data: {content}       
  }
}

export default anecdoteReducer