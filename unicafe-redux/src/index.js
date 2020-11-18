import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
  const good = () => {    
    store.dispatch({      
      type: 'GOOD'
    })
  }
  const neutral = () => {
    store.dispatch({
      type:'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type:'BAD'
    })
  }
  const reset = ()  => {
    store.dispatch({
      type:'ZERO'
    })
  }
  const Statistics = ({good, neutral,bad }) => {
    
    const all  = good+neutral+bad     

    if (all==0) {
      return (
        <div>
          <h2>No feedback given</h2>    
        </div>
      )
    }
    return(
      <div>
        <div>
          <h1>Statistics</h1>
        </div>
        <div>
        <Statisticsline text='good' value={good} />
        <Statisticsline text='neutral' value={neutral} />
        <Statisticsline text='bad' value={bad} />
        <Statisticsline text='all' value={all}/>
        <Statisticsline text='average' value={(good-bad)/all}/>
        <Statisticsline text='positive' value={`${good/all*100} %`}/>
        </div>      
      </div>    
    )
  }

  const Statisticsline = ({text, value}) => {
    return <div>{text} {value} </div>
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={good}>good</button> 
        <button onClick={neutral}>neutral</button> 
        <button onClick={bad}>bad</button>
        <button onClick={reset}>reset stats</button>   
      </div>
      <div>
        <Statistics good= {store.getState().good} neutral={store.getState().ok} bad= {store.getState().bad}/>
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
