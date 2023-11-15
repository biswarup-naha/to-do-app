// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"

function App() {

  return <center className="container">
    <AppName/>

    <AddToDo/>
  </center>
}
export default App
