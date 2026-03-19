import React from 'react';
import { motion } from 'motion/react';
import { Plane, MapPin, ArrowRight } from 'lucide-react';

const airportRates = [
  { destination: 'Malindi', price: '15,000' },
  { destination: 'Kilifi Town', price: '7,000' },
  { destination: 'Mtwapa', price: '3,500' },
  { destination: 'Shanzu', price: '3,000' },
  { destination: 'Nyali', price: '2,100' },
  { destination: 'Mombasa Town', price: '1,500' },
  { destination: 'Diani', price: '7,000' },
  { destination: 'Mariakani', price: '3,500' },
  { destination: 'Kaloleni', price: '3,500' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-600 px-4 py-2 rounded-full mb-4 font-bold text-sm"
          >
            <Plane className="w-4 h-4" />
            Airport Transfers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Fixed <span className="text-yellow-500">Airport Rates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Transparent pricing from the airport to your destination. No hidden costs, just reliable service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {airportRates.map((rate, index) => (
            <motion.div
              key={rate.destination}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-400/50 hover:bg-white hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-yellow-400 transition-colors">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{rate.destination}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">From Airport</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-slate-400 font-medium">KES</span>
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
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl"
          >
            Book Your Transfer Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
