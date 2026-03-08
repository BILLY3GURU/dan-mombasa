import React from 'react';
import { motion } from 'motion/react';
import { Plane, MapPin, Clock, Shield, Star, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Reliable and punctual airport pickup and drop-off services for a stress-free travel experience.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: MapPin,
    title: 'City Tours',
    description: 'Explore the city with our knowledgeable drivers who can take you to all the best spots.',
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Professional transportation for business meetings, conferences, and corporate events.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Clock,
    title: 'Hourly Booking',
    description: 'Book a car and driver for a specific number of hours for maximum flexibility.',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All our vehicles are regularly inspected and our drivers are professionally trained.',
    color: 'bg-rose-500/10 text-rose-500',
  },
  {
    icon: Star,
    title: 'VIP Services',
    description: 'Premium luxury vehicles and personalized service for those special occasions.',
    color: 'bg-amber-500/10 text-amber-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Our Premium <span className="text-yellow-500">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We provide a wide range of transportation solutions tailored to your specific needs. 
            Quality and comfort are at the heart of everything we do.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
