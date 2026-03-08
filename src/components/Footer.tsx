import React from 'react';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Car className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                DAN TRAVELS
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing premium transportation services with a focus on comfort, safety, and reliability. 
              Your journey is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors">Our Services</a></li>
              <li><a href="#fleet" className="text-slate-400 hover:text-yellow-400 transition-colors">Our Fleet</a></li>
              <li><a href="#booking" className="text-slate-400 hover:text-yellow-400 transition-colors">Book a Ride</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">City Tours</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">VIP Services</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Hourly Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-400 shrink-0" />
                <span className="text-slate-400">123 Travel Plaza, Downtown City, ST 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-yellow-400 shrink-0" />
                <span className="text-slate-400">+25497193781</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-yellow-400 shrink-0" />
                <span className="text-slate-400">info@dantravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dan Travels. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
