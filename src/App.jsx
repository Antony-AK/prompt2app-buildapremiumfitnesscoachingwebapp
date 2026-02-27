import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutPrograms from './components/WorkoutPrograms'
import WorkoutCalendar from './components/WorkoutCalendar'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-fitness-gradient">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero />}
      {activeSection === 'programs' && <WorkoutPrograms />}
      {activeSection === 'calendar' && <WorkoutCalendar />}
      {activeSection === 'trainers' && <Trainers />}
      {activeSection === 'pricing' && <Pricing />}
      
      <Footer />
    </div>
  )
}