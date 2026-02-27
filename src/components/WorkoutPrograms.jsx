export default function WorkoutPrograms() {
  const programs = [
    {
      title: 'Muscle Building',
      description: 'Intensive strength training program',
      duration: '12 weeks',
      difficulty: 'Advanced'
    },
    {
      title: 'Fat Loss Challenge',
      description: 'High-intensity fat burning workouts',
      duration: '8 weeks',
      difficulty: 'Intermediate'
    },
    {
      title: 'Yoga & Flexibility',
      description: 'Holistic mind-body wellness',
      duration: '6 weeks',
      difficulty: 'All Levels'
    }
  ]

  return (
    <div className="min-h-screen py-24 bg-fitness-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-fitness-accent">Our Workout Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="
              bg-white/10 backdrop-blur-lg rounded-2xl p-6 
              hover:scale-[1.02] transition-all duration-300 
              border border-white/10 shadow-xl
            ">
              <h3 className="text-2xl font-bold mb-4 text-fitness-accent">{program.title}</h3>
              <p className="text-white/80 mb-4">{program.description}</p>
              <div className="flex justify-between text-sm">
                <span className="bg-fitness-accent/20 px-3 py-1 rounded-full">{program.duration}</span>
                <span className="text-white/60">{program.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}