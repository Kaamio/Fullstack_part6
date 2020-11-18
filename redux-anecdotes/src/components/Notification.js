import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = useSelector(state=>state.notification)
 
  if (notification != null) {  
  return (
    <div style={style}>
      {notification}
    </div>
  )}
  return (
    <div> 
  </div>
  )
}

export default Notification