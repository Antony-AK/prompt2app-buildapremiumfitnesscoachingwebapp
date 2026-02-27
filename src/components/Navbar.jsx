export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Programs', section: 'programs' },
    { name: 'Calendar', section: 'calendar' },
    { name: 'Trainers', section: 'trainers' },
    { name: 'Pricing', section: 'pricing' }
  ]

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-fitness-accent">FitPro</h1>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`
                  px-3 py-2 rounded-lg transition-all duration-300
                  ${activeSection === item.section 
                    ? 'bg-fitness-accent/20 text-fitness-accent' 
                    : 'hover:bg-white/10 text-white/80'}
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}