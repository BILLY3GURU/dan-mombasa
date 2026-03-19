import React, { useState } from 'react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, MapPin, Users, Clock, Send, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface FormData {
  pickup: string;
  dropoff: string;
  passengers: string;
  phone: string;
}

interface FormErrors {
  pickup?: string;
  dropoff?: string;
  phone?: string;
}

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState<FormData>({
    pickup: '',
    dropoff: '',
    passengers: '1 Passenger',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Pickup location is required';
    }
    
    if (!formData.dropoff.trim()) {
      newErrors.dropoff = 'Drop-off location is required';
    }
    
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          pickup: '',
          dropoff: '',
          passengers: '1 Passenger',
          phone: '',
        });
        setStartDate(new Date());
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="booking" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
            >
              Ready to <span className="text-yellow-400">Travel?</span><br />
              Book Your Ride in Seconds.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed"
            >
              Fill out the form and our team will get back to you immediately with a confirmation 
              and driver details. No hidden fees, just premium service.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Response</h4>
                  <p className="text-slate-500 text-sm">Confirmation within 15 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Professional Drivers</h4>
                  <p className="text-slate-500 text-sm">Vetted and highly experienced</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Booking Received!</h3>
                <p className="text-slate-600">Thank you for choosing Dan Travels. We'll contact you shortly to confirm your ride.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-yellow-500" />
                      Pickup Location
                    </label>
                    <input 
                      type="text" 
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Enter pickup address"
                      className={cn(
                        "w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all",
                        errors.pickup 
                          ? "border-rose-500 focus:ring-rose-200" 
                          : "border-slate-200 focus:ring-yellow-400"
                      )}
                    />
                    {errors.pickup && (
                      <p className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.pickup}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      Drop-off Location
                    </label>
                    <input 
                      type="text" 
                      name="dropoff"
                      value={formData.dropoff}
                      onChange={handleChange}
                      placeholder="Enter destination"
                      className={cn(
                        "w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all",
                        errors.dropoff 
                          ? "border-rose-500 focus:ring-rose-200" 
                          : "border-slate-200 focus:ring-yellow-400"
                      )}
                    />
                    {errors.dropoff && (
                      <p className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.dropoff}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      Pickup Date
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-yellow-500" />
                      Passengers
                    </label>
                    <select 
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none"
                    >
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4+ Passengers</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={cn(
                      "w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all",
                      errors.phone 
                        ? "border-rose-500 focus:ring-rose-200" 
                        : "border-slate-200 focus:ring-yellow-400"
                    )}
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-400/20 transition-all transform active:scale-95"
                >
                  Confirm Booking
                </button>
                
                <p className="text-center text-xs text-slate-400">
                  By booking, you agree to our terms of service and privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

