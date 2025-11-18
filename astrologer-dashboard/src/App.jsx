import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Appointments from './pages/Appointments'
import Sessions from './pages/Sessions'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
