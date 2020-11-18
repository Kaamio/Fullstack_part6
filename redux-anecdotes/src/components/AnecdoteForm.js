import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { newAnecdote } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const anecdote = event.target.new_anecdote.value
        event.target.new_anecdote.value = ''
        
        
        const newestanecdote = await anecdoteService.createNew(anecdote)   
        console.log(newestanecdote)     
        dispatch(addAnecdote(newestanecdote))        
        dispatch(newAnecdote(newestanecdote))
    }

    return (
        <form onSubmit={create}>
            <input name="new_anecdote"/>
            <button type='submit'>create</button>
      </form>
      )
}

export default AnecdoteForm