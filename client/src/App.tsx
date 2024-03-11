import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'

function App() {

  return (
    <div>

      <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
