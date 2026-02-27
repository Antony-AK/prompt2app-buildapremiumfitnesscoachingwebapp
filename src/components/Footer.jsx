export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-lg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-fitness-accent mb-4">FitPro Coaching</h2>
        <p className="text-white/80 mb-6">Transform your fitness journey with personalized coaching</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-white/60 hover:text-fitness-accent">Instagram</a>
          <a href="#" className="text-white/60 hover:text-fitness-accent">Twitter</a>
          <a href="#" className="text-white/60 hover:text-fitness-accent">YouTube</a>
        </div>
        <p className="text-sm text-white/50">&copy; 2024 FitPro Coaching. All rights reserved.</p>
      </div>
    </footer>
  )
}