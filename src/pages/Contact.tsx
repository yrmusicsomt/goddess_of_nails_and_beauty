import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
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
                Get in Touch
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brown" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">PHONE</h3>
                  <a
                    href="tel:+61478410069"
                    className="text-charcoal/70 hover:text-brown transition-colors duration-200"
                  >
                    +61 (0) 478 410 069
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brown" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">EMAIL</h3>
                  <a
                    href="mailto:studioapril004@gmail.com"
                    className="text-charcoal/70 hover:text-brown transition-colors duration-200"
                  >
                    studioapril004@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brown" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 uppercase tracking-wide">ADDRESS</h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Level 1, 68 Mollison St<br />
                    Abbotsford, VIC 3067
                  </p>
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
              Visit our studio in Abbotsford
            </p>
          </motion.div>

          <motion.div className="rounded-lg overflow-hidden shadow-lg" {...fadeInUp}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0891875845744!2d144.99547607641662!3d-37.8025682720142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643f4c4c4c4c5%3A0x5c5e5e5e5e5e5e5e!2s68%20Mollison%20St%2C%20Abbotsford%20VIC%203067!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio April Location"
            ></iframe>
          </motion.div>

          {/* Book Now CTA */}
          <motion.div className="text-center mt-12" {...fadeInUp}>
            <p className="text-charcoal/60 mb-4">Ready to book your appointment?</p>
            <button
              onClick={() => window.open('https://www.fresha.com/a/studio-april-melbourne-68-mollison-street-pm249xrk/booking', '_blank')}
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
