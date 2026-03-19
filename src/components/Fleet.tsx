import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Gauge, Fuel } from 'lucide-react';

const fleet = [
  {
    name: 'Executive Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    price: '$45/hr',
    passengers: 4,
    luggage: 2,
    type: 'Luxury',
    features: ['Leather Seats', 'Climate Control', 'Free WiFi'],
  },
  {
    name: 'Premium SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    price: '$65/hr',
    passengers: 6,
    luggage: 4,
    type: 'Family',
    features: ['Spacious Interior', 'All-Wheel Drive', 'Premium Sound'],
  },
  {
    name: 'Luxury Van',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    price: '$85/hr',
    passengers: 8,
    luggage: 6,
    type: 'Group',
    features: ['Group Travel', 'Entertainment System', 'Refreshments'],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
            >
              Our Premium <span className="text-yellow-500">Fleet</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Choose from our selection of high-end vehicles for your next journey. 
              All cars are meticulously maintained and driven by professionals.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Vehicles
              <span className="text-xl">→</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {car.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-display font-bold text-slate-900">{car.name}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-yellow-500">{car.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium">{car.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Briefcase className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium">{car.luggage} Luggage</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Gauge className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium">Auto Trans</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Fuel className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium">Hybrid/Electric</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {car.features.map(feature => (
                    <span key={feature} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    const elem = document.getElementById('booking');
                    elem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-lg"
                >
                  Book This Car
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
