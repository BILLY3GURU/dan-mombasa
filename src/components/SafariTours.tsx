import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Briefcase, Gauge, Fuel, Compass, MapPin, ArrowRight, Info, X, Search } from 'lucide-react';

const safariFleet = [
  {
    name: 'Toyota TX Prado',
    image: 'https://www.vismart.co.ke/wp-content/uploads/Toyota-TX-Prado-25.jpg',
    price: '$250',
    unit: '/day',
    passengers: 7,
    luggage: 4,
    type: 'Luxury Safari',
    features: ['V6 Engine', 'Leather Interior', '4x4 Drive', 'Climate Control'],
    specs: {
      engine: '3.3L V6 Twin-Turbo Diesel',
      transmission: '10-Speed Automatic',
      offRoad: 'Multi-Terrain Select, Crawl Control, E-KDSS',
      fuelCapacity: '110 Litres',
    }
  },
  {
    name: 'Safari Cruiser',
    image: 'https://www.jaetravel.co.ke/1b436e43-e979-4d81-93e1-972fbee500dd.jpg',
    price: '$180',
    unit: '/day',
    passengers: 5,
    luggage: 3,
    type: 'Premium SUV',
    features: ['Reliable 4x4', 'Comfortable Seating', 'Sunroof', 'All-Terrain'],
    specs: {
      engine: '2.8L 4-Cylinder Turbo Diesel',
      transmission: '6-Speed Automatic',
      offRoad: 'Full-time 4WD, Torsen Limited Slip Differential',
      fuelCapacity: '87 Litres',
    }
  },
  {
    name: 'Open Game Viewer',
    image: 'https://ik.imagekit.io/jinx/travel/WhatsApp%20Image%202025-07-07%20at%2018.28.17_94668579.jpg?updatedAt=1751902480309',
    price: '$200',
    unit: '/day',
    passengers: 9,
    luggage: 2,
    type: 'Game Drive',
    features: ['Fully Open Sides', 'Canvas Roof', 'Game Viewing Seats', '4x4'],
    specs: {
      engine: '4.2L 6-Cylinder Diesel',
      transmission: '5-Speed Manual',
      offRoad: 'Heavy Duty Suspension, Snorkel, Dual Batteries',
      fuelCapacity: '180 Litres (Dual Tanks)',
    }
  },
  {
    name: 'Safari Land Cruiser',
    image: 'https://ik.imagekit.io/jinx/travel/4-1536x776%20(1).png?updatedAt=1750087065024',
    price: '$150',
    unit: '/day',
    passengers: 7,
    luggage: 5,
    type: 'Classic Safari',
    features: ['Pop-up Roof', 'HF Radio', 'Cooler Box', 'Long Range Tanks'],
    specs: {
      engine: '4.2L 1HZ Diesel Engine',
      transmission: '5-Speed Manual',
      offRoad: 'Solid Axles, Front & Rear Diff Locks',
      fuelCapacity: '180 Litres (Dual Tanks)',
    }
  },
  {
    name: 'Tour Van',
    image: 'https://static.wixstatic.com/media/a52467_e278dadcce5f48b2afff73cb36a494da~mv2.jpeg/v1/crop/x_0,y_5,w_1080,h_693/fill/w_620,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-03-17%20at%2010_04_46.jpeg',
    price: '$80',
    unit: '/day',
    passengers: 7,
    luggage: 4,
    type: 'City Tour',
    features: ['Dual Sliding Doors', 'Fuel Efficient', 'Spacious Cabin', 'AC'],
    specs: {
      engine: '2.0L 4-Cylinder Petrol',
      transmission: 'CVT Automatic',
      offRoad: 'Standard Ground Clearance (City Use Only)',
      fuelCapacity: '60 Litres',
    }
  },
  {
    name: 'Toyota Coaster',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    price: '$220',
    unit: '/day',
    passengers: 25,
    luggage: 15,
    type: 'Group Tour',
    features: ['High Capacity', 'PA System', 'Overhead Storage', 'Comfortable'],
    specs: {
      engine: '4.0L 4-Cylinder Turbo Diesel',
      transmission: '5-Speed Manual / 6-Speed Auto',
      offRoad: 'Reinforced Chassis for Long Distance',
      fuelCapacity: '95 Litres',
    }
  },
];

const safariRates = [
  { vehicle: 'Land Cruiser 300', price: '250', currency: 'USD' },
  { vehicle: 'Toyota Prado', price: '180', currency: 'USD' },
  { vehicle: 'Open Safari Cruiser', price: '200', currency: 'USD' },
  { vehicle: 'Safari Land Cruiser', price: '150', currency: 'USD' },
  { vehicle: 'Toyota Voxy/Noah', price: '80', currency: 'USD' },
  { vehicle: 'Toyota Coaster', price: '220', currency: 'USD' },
];

export default function SafariTours() {
  const [selectedSpecs, setSelectedSpecs] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFleet = safariFleet.filter(car => 
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="safari" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-600 px-4 py-2 rounded-full mb-4 font-bold text-sm"
            >
              <Compass className="w-4 h-4" />
              Safari & Tours
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
            >
              Explore the <span className="text-yellow-500">Wild</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Discover the beauty of Africa with our specialized safari vehicles. 
              Built for comfort and durability in the most rugged terrains.
            </motion.p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search safari vehicles..."
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
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 relative group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {car.type}
                    </span>
                  </div>
                  
                  {/* Quick Specs Overlay on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white"
                  >
                    <h4 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Technical Specs
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p><span className="text-slate-400">Engine:</span> {car.specs.engine}</p>
                      <p><span className="text-slate-400">Transmission:</span> {car.specs.transmission}</p>
                      <p><span className="text-slate-400">Off-Road:</span> {car.specs.offRoad}</p>
                      <p><span className="text-slate-400">Fuel:</span> {car.specs.fuelCapacity}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-display font-bold text-slate-900">{car.name}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-display font-bold text-yellow-500">{car.price}</span>
                      <span className="text-xs text-slate-400 block">{car.unit}</span>
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
                      <span className="text-sm font-medium">4x4 Drive</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Fuel className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-medium">Diesel/Petrol</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {car.features.map(feature => (
                      <span key={feature} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        const elem = document.getElementById('booking');
                        elem?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-lg"
                    >
                      Hire Now
                    </button>
                    <button 
                      onClick={() => setSelectedSpecs(car.name)}
                      className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-yellow-400 hover:text-slate-900 transition-all md:hidden"
                      title="View Specs"
                    >
                      <Info className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-lg">No safari vehicles found matching your search.</p>
            </div>
          )}
        </div>

        {/* Mobile Specs Modal */}
        <AnimatePresence>
          {selectedSpecs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md md:hidden"
              onClick={() => setSelectedSpecs(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-sm rounded-[2rem] p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedSpecs(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                  {selectedSpecs} <span className="text-yellow-500">Specs</span>
                </h3>
                
                <div className="space-y-6">
                  {safariFleet.find(c => c.name === selectedSpecs)?.specs && (
                    <>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Engine</p>
                        <p className="text-slate-900 font-medium">{safariFleet.find(c => c.name === selectedSpecs)?.specs.engine}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Transmission</p>
                        <p className="text-slate-900 font-medium">{safariFleet.find(c => c.name === selectedSpecs)?.specs.transmission}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Off-Road Capabilities</p>
                        <p className="text-slate-900 font-medium">{safariFleet.find(c => c.name === selectedSpecs)?.specs.offRoad}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Fuel Capacity</p>
                        <p className="text-slate-900 font-medium">{safariFleet.find(c => c.name === selectedSpecs)?.specs.fuelCapacity}</p>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  onClick={() => setSelectedSpecs(null)}
                  className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-bold mt-8 shadow-lg shadow-yellow-400/20"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Safari Pricing Table Section */}
        <div className="mt-24 pt-24 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Daily <span className="text-yellow-500">Safari Rates</span>
            </h3>
            <p className="text-slate-600">
              Transparent daily rates for our specialized tour vehicles. 
              Fuel and driver options available upon request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safariRates.map((rate, index) => (
              <motion.div
                key={rate.vehicle}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 hover:border-yellow-400/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shadow-sm group-hover:bg-yellow-400 transition-colors">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{rate.vehicle}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Per Day</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-slate-400 font-medium">{rate.currency}</span>
                  <p className="text-xl font-display font-bold text-yellow-500">{rate.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => {
                const elem = document.getElementById('booking');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl"
            >
              Book Your Safari Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
