export default function Trainers() {
  const trainers = [
    {
      name: 'Alex Rodriguez',
      specialty: 'Strength Training',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Fitness_Trainer_Male.jpg'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Yoga & Flexibility',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Fitness_Trainer_Female.jpg'
    }
  ]

  return (
    <div className="min-h-screen py-24 bg-fitness-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-fitness-accent">Our Expert Trainers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="
              bg-white/10 backdrop-blur-lg rounded-2xl p-6 
              hover:scale-[1.02] transition-all duration-300
              border border-white/10 shadow-xl flex items-center
            ">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-32 h-32 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold text-fitness-accent">{trainer.name}</h3>
                <p className="text-white/80">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}