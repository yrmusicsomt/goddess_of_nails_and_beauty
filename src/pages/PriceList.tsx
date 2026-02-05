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
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS & BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Manicure
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Clear Manicure', description: 'Cuticle care, massage, shape, 100% Argan Oil', price: 25 },
              { name: 'Deluxe Manicure', description: 'Cuticle care, massage, shape, 100% Argan Oil & polish', price: 30 },
              { name: 'Manicure Scrub', description: 'Rejuvenate, invigorate or revitalise your manicure with one of our luscious blissful scrubs', price: 35 },
              { name: 'Goddess Manicure', description: 'Cuticle care, deep exfoliation, massage, mask, 100% organic Argan Oil, shape & polish', price: 40 },
              { name: 'Brightening Manicure', description: 'A scrub and mask that gently exfoliate dead skin cells, restoring moisture and promoting glowing, healthy skin', price: 40 },
              { name: 'Buffing & Shaping (Fingers) with Polish', price: 20 },
              { name: 'Buffing & Shaping (Toes) with Polish', price: 30 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  {service.description && (
                    <p className="text-sm text-charcoal/60 mt-1">{service.description}</p>
                  )}
                </div>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
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
              { name: 'Deluxe Pedicure', description: 'Cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, shape, with or without polish', price: 45 },
              { name: 'Goddess Pedicure', description: 'Pedicure soak with essential oils, cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, mask, shape & polish', price: 60 },
              { name: 'Brightening Pedicure', description: 'A brightening scrub gently exfoliates away dead skin cells, revealing new, clear skin while stimulating circulation. A brightening mask deeply hydrates, restoring moisture balance', price: 60 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  {service.description && (
                    <p className="text-sm text-charcoal/60 mt-1">{service.description}</p>
                  )}
                </div>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
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
              { name: 'Goddess Manicure & Pedicure', price: 90 },
              { name: 'Brightening Manicure & Pedicure', price: 90 },
              { name: 'Shellac Manicure & Pedicure', price: 105 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
              </div>
            ))}
            <div className="pt-4 text-sm text-charcoal/70">
              <p className="italic">Paraffin wax – fights dehydrated skin.</p>
              <p>Add to any manicure: $10 | Pedicure: $15</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gel X, Acrylic & SNS */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Gel X, Acrylic & SNS (Organic)
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Gel X */}
          <motion.div className="mb-8" {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">GEL X</h3>
            <div className="space-y-6">
              {[
                { name: 'XS / S / M', price: 75 },
                { name: 'L / XL', price: 85 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Acrylic / SNS */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">ACRYLIC / SNS</h3>
            <div className="space-y-6">
              {[
                { name: 'Natural Nails Overlay', price: '55 / 55' },
                { name: 'Full Set with Colour', price: '55 / 60' },
                { name: 'Full Set with Shellac', price: 65 },
                { name: 'Full Set Toe Nails', price: 60 },
                { name: 'Refill', price: 45 },
                { name: 'Rebalance', price: 55 },
                { name: 'One Nail Repair', price: '10 / 10' },
                { name: 'Soak Off / Removal (Shellac / Bio Sculpture)', price: 'from 15' },
                { name: 'Soak Off / Removal (Acrylic Powder / Hard Gel)', price: 'from 20' },
                { name: 'Nail Art (per finger)', price: 5 },
                { name: 'Nail Art (Full Set)', price: 'from 35' },
                { name: 'Cut Down (Shorten & Reshape)', price: 20 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  <p className="text-lg font-medium">{typeof service.price === 'number' ? `$${service.price}` : `$${service.price}`}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 text-sm text-charcoal/70">
              <p>French Polish +$10</p>
              <p>Deep French from +$15</p>
            </div>
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

          <motion.div className="space-y-6 mb-8" {...fadeInUp}>
            {[
              { name: 'EVO Oxygenating Gel Express', price: 55 },
              { name: 'EVO Oxygenating Gel with Manicure', price: 60 },
              { name: 'Bio-Gel Express', price: 65 },
              { name: 'Bio-Gel with Deluxe Manicure', price: 75 },
              { name: 'Bio-Gel Full Set (Tips)', price: 100 },
              { name: 'Bio-Gel Full Set (Sculpture)', price: 120 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium">${service.price}</p>
              </div>
            ))}
          </motion.div>

          {/* Builder Gel / BIAB */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">BUILDER GEL / BIAB</h3>
            <div className="space-y-6">
              {[
                { name: 'Natural Nails', price: 75 },
                { name: 'Extensions', price: 110 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shellac/OPI & Other Gels */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Shellac (OPI & Other Gels)
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Fingers (Natural Nails)', price: 35 },
              { name: 'Toes (Natural Nails)', price: 40 },
              { name: 'With Deluxe Manicure (recommended)', price: 45 },
              { name: 'With Deluxe Pedicure (recommended)', price: 65 },
            ].map((service, index) => (
              <div key={index} className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
                <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                <p className="text-lg font-medium flex-shrink-0">${service.price}</p>
              </div>
            ))}
            <div className="pt-4 text-sm text-charcoal/70">
              <p className="italic">Bio Gel / Shellac customers who purchase a new set: soak-off only $10.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eyelash Extensions, Brows & Lashes */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Eyelash Extensions, Brows & Lashes
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Classic Lashes */}
          <motion.div className="mb-8" {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">CLASSIC</h3>
            <div className="space-y-6">
              {[
                { name: 'Full Set', price: 100 },
                { name: 'Infill (Week 1)', price: 35 },
                { name: 'Infill (Week 2)', price: 65 },
                { name: 'Infill (Week 3)', price: 80 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Russian Volume */}
          <motion.div className="mb-8" {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">RUSSIAN VOLUME</h3>
            <div className="space-y-6">
              {[
                { name: 'Full Set', price: 130 },
                { name: 'Infill (Week 1)', price: 45 },
                { name: 'Infill (Week 2)', price: 80 },
                { name: 'Infill (Week 3)', price: 100 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Services */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-light mb-6">OTHER SERVICES</h3>
            <div className="space-y-6">
              {[
                { name: 'Eyelash Extension Take-Off', price: 20 },
                { name: 'Eyebrow Tint', price: 20 },
                { name: 'Natural Eyelash Tint', price: 25 },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
                  <p className="text-lg font-medium">${service.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tanning */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Goddess Sun Kiss Tanning
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeInUp}>
            {[
              { name: 'Spray Tan (Face & Neck)', price: 25 },
              { name: 'Spray Tan (Half Body)', price: 35 },
              { name: 'Spray Tan / Organic Full Body', price: 45 },
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
            <p className="text-sm text-charcoal/60 mb-4 italic">Prices from</p>
            <div className="space-y-6">
              {[
                { name: 'Eyebrows', price: 18 },
                { name: 'Chin', price: 12 },
                { name: 'Sides', price: 15 },
                { name: 'Upper Lip', price: 10 },
                { name: 'Face Wax', price: 40 },
                { name: 'Bikini Line', price: 25 },
                { name: 'G-String', price: 35 },
                { name: '½ Brazilian', price: 45 },
                { name: 'Full Brazilian', price: 50 },
                { name: 'Underarms', price: 20 },
                { name: 'Lower Half Arms', price: 25 },
                { name: 'Upper Half Arms', price: 30 },
                { name: 'Full Arms', price: 35 },
                { name: 'Lower Half Legs', price: 30 },
                { name: 'Upper Half Legs', price: 35 },
                { name: '¾ Legs', price: 40 },
                { name: 'Full Legs', price: 55 },
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
            <p className="text-sm text-charcoal/60 mb-4 italic">Prices from</p>
            <div className="space-y-6">
              {[
                { name: 'Eyebrows', price: 20 },
                { name: 'Lower Half Arms', price: 30 },
                { name: 'Upper Half Arms', price: 35 },
                { name: 'Full Arms', price: 45 },
                { name: 'Shoulders', price: 35 },
                { name: 'Stomach', price: 30 },
                { name: 'Half Legs', price: 40 },
                { name: 'Full Legs', price: 65 },
                { name: 'Chest', price: 40 },
                { name: 'Back Wax', price: 50 },
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
