import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Gauge, Fuel, Search } from 'lucide-react';

const fleet = [
  {
    name: 'Executive Minivan',
    image: 'https://www.vismart.co.ke/wp-content/uploads/Minivan-1536x1027.jpeg',
    price: '$45/hr',
    passengers: 7,
    luggage: 4,
    type: 'Luxury',
    features: ['Leather Seats', 'Climate Control', 'Free WiFi'],
  },
  {
    name: 'Premium Prado',
    image: 'https://www.vismart.co.ke/wp-content/uploads/Prado-car.jpg',
    price: '$65/hr',
    passengers: 5,
    luggage: 3,
    type: 'Family',
    features: ['Spacious Interior', 'All-Wheel Drive', 'Premium Sound'],
  },
  {
    name: 'Luxury Sedan',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtSCj3_I_nPIMXfU5T_ePj_LglfL_lN3ghcNfZLWn_vI1d_pn9xtScp67pFBAX',
    price: '$85/hr',
    passengers: 4,
    luggage: 2,
    type: 'Group',
    features: ['Group Travel', 'Entertainment System', 'Refreshments'],
  },
];

interface FleetProps {
  onSelectCar?: (carName: string) => void;
}

export default function Fleet({ onSelectCar }: FleetProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFleet = fleet.filter(car => 
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-slate-100 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 outline-none transition-all shadow-sm font-medium text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredFleet.length > 0 ? (
            filteredFleet.map((car, index) => (
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
                      if (onSelectCar) {
                        onSelectCar(car.name);
                      } else {
                        const elem = document.getElementById('booking');
                        elem?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-lg">No vehicles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

