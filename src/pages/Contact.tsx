import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import nailpic6 from '../assets/images/nailpic6.png';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const Contact = () => {
  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 uppercase tracking-wide">
              CONTACT OUR SALON
            </h1>
            <p className="text-charcoal/60 text-sm md:text-base">
              Give us a call or schedule a treatment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={nailpic6}
                alt="Studio April Contact"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))' }}
              />
            </motion.div>

            {/* Right - Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-light italic mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Our Locations
              </h2>

              {/* Emporium Melbourne */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brown" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">EMPORIUM MELBOURNE</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-2">
                    Store 305A/287 Lonsdale St<br />
                    Melbourne VIC 3000
                  </p>
                  <p className="text-charcoal/70 text-sm mb-1">Hours: Open until 7:00 PM</p>
                  <a
                    href="tel:0386098111"
                    className="text-charcoal/70 hover:text-brown transition-colors duration-200 text-sm"
                  >
                    Phone: (03) 8609 8111
                  </a>
                </div>
              </div>

              {/* QV Melbourne */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brown" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">QV MELBOURNE</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-2">
                    236-238 Lonsdale St<br />
                    Melbourne VIC 3000
                  </p>
                  <p className="text-charcoal/70 text-sm mb-1">Hours: Open until 7:00 PM</p>
                  <a
                    href="tel:0399137662"
                    className="text-charcoal/70 hover:text-brown transition-colors duration-200 text-sm"
                  >
                    Phone: (03) 9913 7662
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-8" {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-light italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Find Us
            </h2>
            <p className="text-charcoal/60 text-sm md:text-base">
              Visit our locations in Melbourne CBD
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emporium Map */}
            <motion.div className="rounded-lg overflow-hidden shadow-lg" {...fadeInUp}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d144.9664!3d-37.8124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xf0a917f116a6860!2s287%20Lonsdale%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1732260000000!5m2!1sen!2sau"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emporium Melbourne Location"
              ></iframe>
            </motion.div>

            {/* QV Map */}
            <motion.div className="rounded-lg overflow-hidden shadow-lg" {...fadeInUp}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.766!2d144.9617!3d-37.8104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a4ad4d%3A0x2e0d0c0a0e0f0e0!2s236%20Lonsdale%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1732260000000!5m2!1sen!2sau"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QV Melbourne Location"
              ></iframe>
            </motion.div>
          </div>

          {/* Book Now CTA */}
          <motion.div className="text-center mt-12" {...fadeInUp}>
            <p className="text-charcoal/60 mb-4">Ready to book your appointment?</p>
            <button
              onClick={() => window.open('https://www.instagram.com/goddessofnailsandbeauty/', '_blank')}
              className="px-12 py-4 bg-charcoal text-cream rounded-full hover:bg-brown transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-lg font-light tracking-wider uppercase"
            >
              BOOK NOW
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
