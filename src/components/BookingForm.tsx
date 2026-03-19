import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, MapPin, Users, Clock, Send, AlertCircle, CheckCircle2, Info, Car, Hash, MessageCircle, DollarSign, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '../lib/utils';

interface FormData {
  pickup: string;
  dropoff: string;
  passengers: string;
  phone: string;
  carType: string;
}

interface FormErrors {
  pickup?: string;
  dropoff?: string;
  phone?: string;
  carType?: string;
}

interface BookingDetails {
  driverName: string;
  vehicleModel: string;
  licensePlate: string;
  estimatedArrival: string;
  journeyDuration: string;
}

type AvailabilityStatus = 'idle' | 'checking' | 'available' | 'limited' | 'unavailable';

interface BookingFormProps {
  initialCarType?: string;
}

export default function BookingForm({ initialCarType = '' }: BookingFormProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState<FormData>({
    pickup: '',
    dropoff: '',
    passengers: '1 Passenger',
    phone: '',
    carType: initialCarType || 'Executive Minivan',
  });

  useEffect(() => {
    if (initialCarType) {
      setFormData(prev => ({ ...prev, carType: initialCarType }));
    }
  }, [initialCarType]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [availabilityStatus, setAvailabilityStatus] = useState<AvailabilityStatus>('idle');

  useEffect(() => {
    if (!startDate) return;

    const checkAvailability = async () => {
      setAvailabilityStatus('checking');
      
      // Simulate hypothetical backend API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const day = startDate.getDate();
      const isWeekend = startDate.getDay() === 0 || startDate.getDay() === 6;
      
      // Simulation logic for demonstration
      if (isWeekend) {
        setAvailabilityStatus('limited');
      } else if (day % 2 !== 0) {
        setAvailabilityStatus('available');
      } else {
        // Just for demo, let's make some days unavailable
        setAvailabilityStatus('unavailable');
      }
    };

    checkAvailability();
  }, [startDate]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (availabilityStatus === 'unavailable') return;
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate hypothetical backend API call to process booking and assign driver
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockDetails: BookingDetails = {
        driverName: 'John Kamau',
        vehicleModel: 'Toyota Land Cruiser Prado (White)',
        licensePlate: 'KDJ 456X',
        estimatedArrival: '15 minutes',
        journeyDuration: '45 minutes',
      };
      
      setBookingDetails(mockDetails);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        pickup: '',
        dropoff: '',
        passengers: '1 Passenger',
        phone: '',
        carType: 'Executive Minivan',
      });
      setStartDate(new Date());
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

  const getAvailabilityMessage = () => {
    switch (availabilityStatus) {
      case 'checking':
        return { text: 'Checking availability...', color: 'text-slate-400', icon: <Clock className="w-4 h-4 animate-spin" /> };
      case 'available':
        return { text: 'Cars available', color: 'text-emerald-500', icon: <CheckCircle2 className="w-4 h-4" /> };
      case 'limited':
        return { text: 'Few cars left', color: 'text-amber-500', icon: <Info className="w-4 h-4" /> };
      case 'unavailable':
        return { text: 'No cars available for this date', color: 'text-rose-500', icon: <AlertCircle className="w-4 h-4" /> };
      default:
        return null;
    }
  };

  const status = getAvailabilityMessage();

  return (
    <section id="booking" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
            >
              Ready to <span className="text-[#FFB703]">Travel?</span><br />
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
                  <Clock className="w-6 h-6 text-[#FFB703]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Response</h4>
                  <p className="text-slate-500 text-sm">Confirmation within 15 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#FFB703]" />
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
                className="text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
                <p className="text-slate-600 mb-8">Your ride has been scheduled successfully.</p>
                
                {bookingDetails && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-50 rounded-3xl p-6 text-left space-y-4 border border-slate-100 mb-8"
                  >
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Assigned Driver & Vehicle</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <Users className="w-6 h-6 text-[#FFB703]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Driver Name</p>
                        <p className="text-slate-900 font-bold">{bookingDetails.driverName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <Car className="w-6 h-6 text-[#FFB703]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Vehicle Model</p>
                        <p className="text-slate-900 font-bold">{bookingDetails.vehicleModel}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <Hash className="w-6 h-6 text-[#FFB703]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">License Plate</p>
                        <p className="text-slate-900 font-bold">{bookingDetails.licensePlate}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 font-medium">Driver Arrival</span>
                        <span className="text-[#0077B6] font-bold">{bookingDetails.estimatedArrival}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 font-medium">Journey Duration</span>
                        <span className="text-[#0077B6] font-bold">{bookingDetails.journeyDuration}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-col items-center gap-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scan for Booking Details</p>
                      <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <QRCodeSVG 
                          value={`Booking Details:\nDriver: ${bookingDetails.driverName}\nVehicle: ${bookingDetails.vehicleModel}\nPlate: ${bookingDetails.licensePlate}\nArrival: ${bookingDetails.estimatedArrival}`}
                          size={128}
                          level="H"
                          includeMargin={true}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 text-center max-w-[200px]">
                        Keep this QR code handy for quick access to your driver and vehicle information.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <a 
                        href="https://wa.me/254797193781" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Chat with Driver on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}

                <div className="mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-100 text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#FFB703]" />
                    Airport Transfer Rates (KES)
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Malindi</span>
                      <span className="font-bold text-slate-900">15,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Kilifi Town</span>
                      <span className="font-bold text-slate-900">7,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Mtwapa</span>
                      <span className="font-bold text-slate-900">3,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Shanzu</span>
                      <span className="font-bold text-slate-900">3,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Nyali</span>
                      <span className="font-bold text-slate-900">2,100</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Mombasa Town</span>
                      <span className="font-bold text-slate-900">1,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Diani</span>
                      <span className="font-bold text-slate-900">7,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Mariakani</span>
                      <span className="font-bold text-slate-900">3,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1">
                      <span className="text-slate-600">Kaloleni</span>
                      <span className="font-bold text-slate-900">3,500</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-[#0077B6] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
                >
                  Make Another Booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FFB703]" />
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
                          : "border-slate-200 focus:ring-[#0077B6]"
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
                          : "border-slate-200 focus:ring-[#0077B6]"
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
                      <Calendar className="w-4 h-4 text-[#FFB703]" />
                      Pickup Date
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0077B6] transition-all"
                        dateFormat="MMMM d, h:mm aa"
                        showTimeSelect
                      />
                    </div>
                    <AnimatePresence mode="wait">
                      {status && (
                        <motion.div
                          key={availabilityStatus}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className={cn("flex items-center gap-1.5 text-xs font-bold", status.color)}
                        >
                          {status.icon}
                          {status.text}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#FFB703]" />
                      Passengers
                    </label>
                    <select 
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0077B6] transition-all appearance-none"
                    >
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4+ Passengers</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#FFB703]" />
                      Car Type
                    </label>
                    <select 
                      name="carType"
                      value={formData.carType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0077B6] transition-all appearance-none"
                    >
                      <option>Executive Minivan</option>
                      <option>Premium Prado</option>
                      <option>Luxury Sedan</option>
                      <option>Toyota TX Prado</option>
                      <option>Safari Cruiser</option>
                      <option>Open Game Viewer</option>
                      <option>Safari Land Cruiser</option>
                      <option>Tour Van</option>
                    </select>
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
                          : "border-slate-200 focus:ring-[#0077B6]"
                      )}
                    />
                    {errors.phone && (
                      <p className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={availabilityStatus === 'unavailable' || availabilityStatus === 'checking' || isSubmitting}
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all transform active:scale-95",
                    availabilityStatus === 'unavailable' || availabilityStatus === 'checking' || isSubmitting
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
                      : "bg-[#FFB703] hover:opacity-90 text-slate-900 shadow-[#FFB703]/20"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 animate-spin" />
                      Processing...
                    </div>
                  ) : availabilityStatus === 'unavailable' ? (
                    'Unavailable'
                  ) : (
                    'Confirm Booking'
                  )}
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


