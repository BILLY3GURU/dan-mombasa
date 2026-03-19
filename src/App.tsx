import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import SafariTours from './components/SafariTours';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedCar, setSelectedCar] = React.useState('');

  const handleSelectCar = (carName: string) => {
    setSelectedCar(carName);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet onSelectCar={handleSelectCar} />
        <SafariTours />
        <Pricing />
        <BookingForm initialCarType={selectedCar} />
        <Testimonials />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
