import React from 'react'
import { NavLink , Route , Routes } from 'react-router-dom'
import Home from './screens/Home'
import Update from './screens/Update'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='content'>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/update" element={<Update/>}/>                 
          </Routes>
      </div>
      <nav>
          <ul>
              <li>
                  <NavLink to="/"
                        className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                           Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/update"
                        className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                            Update
                  </NavLink>
              </li>

          </ul>

      </nav>
    </div>
  )
}

export default App
