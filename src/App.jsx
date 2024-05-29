import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Meeting from './Pages/Meeting'
import LocomotiveScroll from 'locomotive-scroll';
import Room from './Pages/Room'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div >
      <MantineProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/meeting' element={<Meeting/>} />
          <Route path='/room/:roomId' element={<Room seconds={330}/>} />
        </Routes>
      </MantineProvider>
    </div>
  )
}

export default App