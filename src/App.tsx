import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/KAF/signIn'
import Home from './pages/KAF/home'
import Register from './pages/KAF/register'
import DemoPage from './pages/KAF/demoPage'
import DemoLibrary from './pages/KAF/demoLibrary'
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'
import './App.css'

function App() {
  return (
    <Router>
      { /* <ThemeSwitcher /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo/:demoId" element={<DemoPage />} />
        <Route path="/library" element={<DemoLibrary />} />
      </Routes>
    </Router>
  )
}

export default App
