import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Dashboard/Main'

function App() {

  return (
    <div className='app-div'>

      <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
          <Route path='/dashboard/:name' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
