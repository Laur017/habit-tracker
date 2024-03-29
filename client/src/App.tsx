import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Dashboard/Main'
import Habits from './components/Habits/Habits'

function App() {

  return (
    <div className='app-div'>

      <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
          <Route path='/dashboard/:access_token' element={<Main />} />
          <Route path='/habits/:access_token' element={<Habits />} />
      </Routes>
    </div>
  )
}

export default App
