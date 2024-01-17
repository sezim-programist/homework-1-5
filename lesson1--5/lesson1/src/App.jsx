import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import WatchPost from './pages/WatchPost'
import NavBar from './components/NavBar'



const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route index element={<WatchPost/>} />
          <Route path='/create_post'element={<CreatePost/>} />
          <Route path='*'element={<h2>Not found 404</h2>} />
      </Routes>
    </div>
  )
}

export default App