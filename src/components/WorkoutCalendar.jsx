export default function WorkoutCalendar() {
  const weeklySchedule = [
    { day: 'Monday', workout: 'Chest & Triceps', time: '6:00 AM' },
    { day: 'Tuesday', workout: 'Back & Biceps', time: '6:00 AM' },
    { day: 'Wednesday', workout: 'Leg Day', time: '6:00 AM' },
    { day: 'Thursday', workout: 'Shoulders & Core', time: '6:00 AM' },
    { day: 'Friday', workout: 'HIIT Cardio', time: '6:00 AM' }
  ]

  return (
    <div className="min-h-screen py-24 bg-fitness-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-fitness-accent">Weekly Workout Schedule</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {weeklySchedule.map((schedule, index) => (
            <div key={index} className="
              bg-white/10 backdrop-blur-lg rounded-2xl p-6 
              hover:scale-[1.02] transition-all duration-300
              border border-white/10 shadow-xl text-center
            ">
              <h3 className="text-xl font-bold mb-4 text-fitness-accent">{schedule.day}</h3>
              <p className="text-white/80 mb-2">{schedule.workout}</p>
              <span className="text-sm text-white/60">{schedule.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}