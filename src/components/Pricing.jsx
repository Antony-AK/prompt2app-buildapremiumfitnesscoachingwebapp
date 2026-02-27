export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: [
        'Personalized Workout Plan',
        'Basic Nutrition Guide',
        'Email Support'
      ]
    },
    {
      name: 'Pro',
      price: '$79',
      features: [
        'Custom Workout Program',
        'Detailed Nutrition Plan',
        'Weekly Video Coaching',
        'Progress Tracking'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-24 bg-fitness-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-fitness-accent">Coaching Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="
              bg-white/10 backdrop-blur-lg rounded-2xl p-8 
              hover:scale-[1.02] transition-all duration-300
              border border-white/10 shadow-xl
            ">
              <h3 className="text-2xl font-bold mb-4 text-fitness-accent">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}/month</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <svg className="w-5 h-5 mr-2 text-fitness-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="
                w-full bg-fitness-accent text-black px-6 py-3 rounded-xl 
                hover:scale-105 transition-all duration-300 font-bold
              ">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}