//import { useState } from 'react'
import './App.css'
import EditSide from './components/EditSide'
import DisplaySide from './components/DisplaySide'
function App() {

  return (
    <>
      <div className='app'>
        <EditSide></EditSide>
        <DisplaySide></DisplaySide>
      </div>
      
    </>
  )
}

export default App
