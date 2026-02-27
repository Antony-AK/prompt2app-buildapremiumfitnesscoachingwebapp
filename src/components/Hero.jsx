export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-fitness-accent">Transform Your Body</h1>
          <p className="text-xl text-white/80">Personalized fitness coaching with world-class trainers</p>
          <div className="flex space-x-4">
            <button className="
              bg-fitness-accent text-black px-6 py-3 rounded-xl 
              hover:scale-105 transition-all duration-300 font-bold
            ">
              Start Free Trial
            </button>
            <button className="
              border border-white/20 px-6 py-3 rounded-xl 
              hover:bg-white/10 transition-all duration-300
            ">
              View Programs
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="
            bg-fitness-accent/20 absolute -inset-12 rounded-full 
            blur-3xl opacity-50
          "></div>
          <img 
            src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e" 
            alt="Fitness Trainer" 
            className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}