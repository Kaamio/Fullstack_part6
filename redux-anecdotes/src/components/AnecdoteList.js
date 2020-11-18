import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { votedForAnecdote, eraseNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.text)
    
    const anecdotes = useSelector(state => {
      if ( state.filter === '' ) {
        return state.anecdotes.sort((a,b) => (a.votes > b.votes)? -1:1)
      }
      else return( 
      state.anecdotes.filter(a => a.content.includes(filter)).sort((a,b) => (a.votes > b.votes)? -1:1))
    })
         
    
    

    const vote = (anecdote) => {    
        dispatch(voteAnecdote(anecdote.id))        
        dispatch(votedForAnecdote(anecdote.content))

        setTimeout(() => {
          dispatch(eraseNotification(anecdote.id))
        }, 5000)
      }

  return(
    <div>      
        <div>          
          {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
      )}  
        </div>
    </div>
    )
  
}
export default AnecdoteList