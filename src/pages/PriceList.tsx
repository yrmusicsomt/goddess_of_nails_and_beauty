import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const PriceList = () => {
  const handleBooking = () => {
    window.open('https://www.instagram.com/goddessofnailsandbeauty/', '_blank');
  };

  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {/* Manicure Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Manicure
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Clear Manicure', price: 25 },
              { name: 'Deluxe Manicure', price: 35 },
              { name: 'Gel Polish Manicure (incl. soak off)', price: 50 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Spa Pedicure Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Spa Pedicure
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Deluxe Pedicure', price: 45 },
              { name: 'Brightening Pedicure', price: 60 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manicure & Spa Pedicure Packages */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Manicure & Spa Pedicure Packages
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Deluxe Manicure & Pedicure', price: 65 },
              { name: 'Deluxe Manicure & Brightening Pedicure', price: 75 },
              { name: 'Brightening Manicure & Pedicure', price: 80 },
              { name: 'Gel Polish Manicure & Pedicure', price: 90 },
              { name: 'Pamper yourself with paraffin wax - helps fight against dryness (Add-on)', price: 10 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Acrylic & Powder Gel & SNS */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Acrylic & Powder Gel & SNS Organic
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Natural Nails Overlay', price: 55 },
              { name: 'Full Set with Tips', price: 60 },
              { name: 'Full Set with Shellac', price: 65 },
              { name: 'Refills (from)', price: 45 },
              { name: 'Full Set Toe Nails', price: 60 },
              { name: 'Nail Art (from)', price: 5 },
              { name: 'Rebalance (from)', price: 10 },
              { name: 'Repair/Reattach', price: 10 },
              { name: 'Soak off Gel Polish/Shellac/Bio-Sculpture', price: 20 },
              { name: 'Soak off removal Acrylic/Powder/Hard Gel', price: 25 },
              { name: 'Acrylic/Powder Nail Art (from)', price: 15 },
              { name: 'Nail Art (Full Set)', price: 35 },
              { name: 'French Polish (Fingers)', price: 10 },
              { name: 'French Polish (Add-on)', price: 15 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bio-Sculpture & EVO */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Bio-Sculpture & EVO Oxygenating Gel
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Full Set', price: 60 },
              { name: 'Refills', price: 50 },
              { name: 'Tips/Sculpture', price: 20 },
              { name: 'French Polish', price: 10 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shellac/OPI & Other Gels */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Shellac/OPI & Other Gels
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Gel Polish Manicure (recommended)', price: 40 },
              { name: 'Gel Polish Pedicure (recommended)', price: 50 },
              { name: 'Gel Polish/Shellac on natural nails', price: 40 },
              { name: 'Gel Polish/Shellac removal (with new set/soak off only)', price: 10 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eyelash Extensions */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Eyelash Extensions
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Classic Eyelash Full Set', price: 100 },
              { name: 'Volume Eyelash Full Set', price: 150 },
              { name: 'Eyelash Extension Refills (2 Weeks)', price: 40 },
              { name: 'Eyelash Extension Refills (3 Weeks)', price: 55 },
              { name: 'Eyelash Extension Refills (4 Weeks)', price: 70 },
              { name: 'Eyelash Extension take off', price: 20 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tanning */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Bio-Sculpture & SNS Tanning
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Deluxe Spray Tan', price: 40 },
              { name: 'Express Spray Tan', price: 45 },
              { name: 'Spray Tan Mask & Exfoliation', price: 20 },
              { name: 'Spray Tan Facial', price: 20 },
              { name: 'Organic Spray Tan (Add-on)', price: 20 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waxing Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Silky Smooth Waxing
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Female Waxing */}
          <motion.div className="mb-12" {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">FEMALE WAXING</h3>
            <div className="space-y-6">
              {[
                { name: 'Eyebrows', price: 15 },
                { name: 'Chin', price: 12 },
                { name: 'Lip', price: 10 },
                { name: 'Full Face', price: 40 },
                { name: 'Under Arms', price: 18 },
                { name: 'Half Arms', price: 25 },
                { name: 'Full Arms', price: 35 },
                { name: 'Bikini', price: 20 },
                { name: 'G-String', price: 30 },
                { name: 'Brazilian', price: 40 },
                { name: 'Half Legs Lower', price: 30 },
                { name: 'Half Legs Upper', price: 35 },
                { name: 'Full Legs', price: 55 },
                { name: 'Upper Half Legs & Bikini', price: 50 },
                { name: 'Full Legs & Bikini', price: 70 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Male Waxing */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">MALE WAXING</h3>
            <div className="space-y-6">
              {[
                { name: 'Eyebrows', price: 20 },
                { name: 'Chin', price: 15 },
                { name: 'Lip', price: 10 },
                { name: 'Full Face', price: 45 },
                { name: 'Under Arms', price: 25 },
                { name: 'Half Arms', price: 30 },
                { name: 'Full Arms', price: 40 },
                { name: 'Full Legs', price: 60 },
                { name: 'Full Back', price: 45 },
                { name: 'Chest', price: 45 },
                { name: 'Shoulders', price: 20 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Now Button */}
      <motion.section className="py-16 text-center" {...fadeInUp}>
        <button
          onClick={handleBooking}
          className="px-12 py-4 bg-charcoal text-cream rounded-full hover:bg-brown transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-lg font-light tracking-wider"
        >
          BOOK NOW
        </button>
      </motion.section>
    </div>
  );
};

export default PriceList;
