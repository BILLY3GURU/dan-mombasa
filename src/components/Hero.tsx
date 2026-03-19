import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=2000"
          alt="City Night"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-sm font-medium">Rated #1 Taxi Service in the City</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Your Premium <span className="text-yellow-400">Travel Partner</span> for Every Journey.
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Experience comfort, reliability, and safety with Dan Travels. 
              From airport transfers to city tours, we've got you covered 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const elem = document.getElementById('booking');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-yellow-400/20"
              >
                Book Your Ride Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const elem = document.getElementById('fleet');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                View Our Fleet
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-white">500+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">Happy Clients</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-white">50+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">Luxury Cars</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-display font-bold text-white">24/7</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">Availability</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full flex items-center justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
            alt="Luxury Car"
            className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
