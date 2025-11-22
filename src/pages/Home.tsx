import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import g2 from '../assets/images/g2.webp';
import g3 from '../assets/images/g3.webp';
import g4 from '../assets/images/g4.webp';
import g6 from '../assets/images/g6.webp';
import g7 from '../assets/images/g7.webp';
import nailPolish1 from '../assets/images/nail-polish-1.png';
import nailPolish2 from '../assets/images/nail-polish-2.png';
import nailPolish3 from '../assets/images/nail-polish-3.png';
import nailPolish4 from '../assets/images/nail-polish-4.png';
import glitter from '../assets/images/glitter.png';
import glitter2 from '../assets/images/glitter2.png';
import nailpic5 from '../assets/images/nailpic5.png';
import bannerpic1 from '../assets/images/bannerpic1.png';
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

const Home = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px] md:min-h-[500px]">
            {/* Left Section - Banner Image */}
            <motion.div
              className="relative min-h-[350px] md:min-h-[500px] lg:min-h-[600px] order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={nailpic5}
                alt="Goddess of Nails and Beauty"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Section - Introduction Text */}
            <motion.div
              className="relative flex flex-col justify-center py-12 md:py-16 px-6 md:px-8 lg:px-16 order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="max-w-lg">
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-brown/40"></div>
                  <p className="text-xs md:text-sm tracking-widest uppercase text-charcoal/70">Premium nail & beauty care</p>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 md:mb-8 leading-tight">
                  Glow naturally<br />
                  every day
                </h1>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/15 bg-transparent">
                    <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs md:text-sm text-charcoal">Sulfate free</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/15 bg-transparent">
                    <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-xs md:text-sm text-charcoal">100% organic</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/15 bg-transparent">
                    <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs md:text-sm text-charcoal">Eco friendly</span>
                  </div>
                </div>

                <button
                  onClick={() => window.open('https://www.fresha.com/a/studio-april-melbourne-68-mollison-street-pm249xrk/booking', '_blank')}
                  className="mt-2 px-8 md:px-10 py-3 md:py-4 bg-brown text-cream rounded-full hover:bg-brown/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base font-normal"
                >
                  Shop Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <motion.section
        className="py-12 md:py-16 bg-cream"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Natural Ingredients */}
            <motion.div
              className="bg-[#fdf3e6] rounded-3xl p-8 md:p-10 text-center"
              variants={staggerItem}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-3 text-charcoal">Natural Ingredients</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">Pure, potent, and skin-loving – beauty powered by nature.</p>
            </motion.div>

            {/* Allergy Tested */}
            <motion.div
              className="bg-[#fdf3e6] rounded-3xl p-8 md:p-10 text-center"
              variants={staggerItem}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-3 text-charcoal">Allergy Tested</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">Skin-friendly and allergy-tested for a safe, irritation-free experience.</p>
            </motion.div>

            {/* Fragrance Free */}
            <motion.div
              className="bg-[#fdf3e6] rounded-3xl p-8 md:p-10 text-center"
              variants={staggerItem}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-3 text-charcoal">Fragrance Free</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">Pure skincare, free from artificial fragrances for a fresh, irritation-free.</p>
            </motion.div>

            {/* Paraben Free */}
            <motion.div
              className="bg-[#fdf3e6] rounded-3xl p-8 md:p-10 text-center"
              variants={staggerItem}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-3 text-charcoal">Paraben Free</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">Free from parabens, ensuring a gentle and safe skincare experience.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Specialties Section */}
      <section className="relative bg-cream pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-12 md:w-16 bg-charcoal/30"></div>
                <p className="text-xs md:text-sm tracking-wider uppercase text-charcoal/60">New in Services</p>
                <div className="h-px w-12 md:w-16 bg-charcoal/30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-charcoal mb-8">
                Our Special Treatments
              </h2>
            </div>
            <div className="space-y-3 text-base md:text-lg text-charcoal/80">
              <p>Specialised in Biosculpture • BIAB • GelX</p>
              <p>Lashes: Classic • Hybrid • Volume • Wispy</p>
              <p>Spray Tanning • Waxing</p>
            </div>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 - Tilted Left */}
            <motion.div
              className="bg-[#f0ebe3] rounded-3xl overflow-hidden group transform md:-rotate-3 transition-all duration-300 hover:rotate-0"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img src={g2} alt="BIAB & Gel Services" className="w-full h-80 object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-base md:text-lg font-serif font-normal text-center text-charcoal">BIAB & Gel Services</h3>
              </div>
            </motion.div>

            {/* Service 2 - Center (No Tilt) */}
            <motion.div
              className="bg-[#f0ebe3] rounded-3xl overflow-hidden group"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img src={g3} alt="Lash Extensions" className="w-full h-80 object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-base md:text-lg font-serif font-normal text-center text-charcoal">Lash Extensions</h3>
              </div>
            </motion.div>

            {/* Service 3 - Tilted Right */}
            <motion.div
              className="bg-[#f0ebe3] rounded-3xl overflow-hidden group transform md:rotate-3 transition-all duration-300 hover:rotate-0"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img src={g4} alt="Beauty Treatments" className="w-full h-80 object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-base md:text-lg font-serif font-normal text-center text-charcoal">Beauty Treatments</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Natural Care Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <motion.div className="text-center mb-12 md:mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-charcoal">
              Premium nail artistry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              {...fadeInUp}
            >
              {/* Large left image */}
              <div className="col-span-1 row-span-2">
                <img
                  src={g7}
                  alt="Professional Nail Services"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Top right image */}
              <div className="col-span-1">
                <img
                  src={g6}
                  alt="Gel & BIAB Nails"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Bottom right image */}
              <div className="col-span-1">
                <img
                  src={g2}
                  alt="Nail Art Design"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Right - Features List */}
            <motion.div
              className="space-y-8 md:space-y-10"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Expert Techniques */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-normal mb-2 text-charcoal">Expert techniques</h3>
                  <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                    Professional nail services using the latest industry techniques and premium products.
                  </p>
                </div>
              </div>

              {/* Long-lasting results */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-normal mb-2 text-charcoal">Long-lasting results</h3>
                  <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                    Durable manicures and pedicures that maintain their beauty for weeks.
                  </p>
                </div>
              </div>

              {/* Hygiene first */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-normal mb-2 text-charcoal">Hygiene first</h3>
                  <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                    Sterilized tools and strict hygiene protocols for your safety and peace of mind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mix & Match Polishes Section */}
      <motion.section
        className="py-12 md:py-16 bg-[#fdf3e6]"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-center mb-8 md:mb-12">
            Mix & Match Polishes
          </h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Base Coat */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish1}
                  alt="Base Coat"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-1 uppercase tracking-wide text-charcoal">Base Coat</h3>
              <p className="text-charcoal/70 text-xs">Film protector / No.01 oz</p>
            </motion.div>

            {/* Gel Polish */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish2}
                  alt="Gel Polish"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-1 uppercase tracking-wide text-charcoal">Gel Polish</h3>
              <p className="text-charcoal/70 text-xs">Sunset Pink / No.01 oz</p>
            </motion.div>

            {/* Top Coat */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish3}
                  alt="Top Coat"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-1 uppercase tracking-wide text-charcoal">Top Coat</h3>
              <p className="text-charcoal/70 text-xs">Summer Rouge / No.01 oz</p>
            </motion.div>

            {/* Matte Polish */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish4}
                  alt="Matte Polish"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-serif font-normal mb-1 uppercase tracking-wide text-charcoal">Matte Polish</h3>
              <p className="text-charcoal/70 text-xs">Blue Pottery / No.01 oz</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatments & Prices Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left - Treatments & Prices List */}
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal mb-6 md:mb-8 text-brown">
                Treatments & Prices
              </h2>

              {/* Service Items */}
              <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
                {/* BIAB Manicure */}
                <motion.div
                  className="border-b border-charcoal/10 pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">BUILDER GEL (BIAB) MANICURE</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$85</p>
                      <p className="text-xs md:text-sm text-charcoal/60">75mins</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    If you have damaged, thin nails, are a nail biter or you struggle to grow your nails
                    then a super gel manicure is the perfect option for you. A builder gel is applied over
                    your natural nail to add the extra strength and durability to your nails supporting them
                    to grow. Expect 3 to 4 weeks flawless wear. This service includes a full signature manicure
                    with detailed cuticle work, massage and gel polish colour of your choice (if desired).
                  </p>
                </motion.div>

                {/* BIAB Rebalance */}
                <motion.div
                  className="border-b border-charcoal/10 pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">BUILDER GEL (BIAB) MANICURE REBALANCE</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$95</p>
                      <p className="text-xs md:text-sm text-charcoal/60">90mins</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    Re-balance and refresh your BIAB Manicure so it looks as good as new again. This service
                    includes detailed e-file cuticle care, massage and a gel polish colour of your choice (if desired).
                  </p>
                </motion.div>

                {/* Extensions */}
                <motion.div
                  className="pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">EXTENSIONS</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$130</p>
                      <p className="text-xs md:text-sm text-charcoal/60">2hours</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed mb-2">
                    Add length to your natural nails with either tips or full cover extensions. This service
                    includes our cuticle care and gel colour of your choice.
                  </p>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    Please Add On: Extra Long Nails if you desire an extra long look (8mm past the free edge or more).
                  </p>
                </motion.div>
              </div>

              {/* Explore Button */}
              <button
                onClick={() => window.open('https://www.fresha.com/a/studio-april-melbourne-68-mollison-street-pm249xrk/booking', '_blank')}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-brown text-cream rounded-full hover:bg-brown/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                EXPLORE
              </button>
            </motion.div>

            {/* Right - Image with decorative elements */}
            <motion.div
              className="relative mt-8 lg:mt-0"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative glitters */}
              <img
                src={glitter}
                alt=""
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 object-contain opacity-40 z-10"
              />
              <img
                src={glitter2}
                alt=""
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 object-contain opacity-40 z-10"
              />

              {/* Main image */}
              <div className="relative">
                <img
                  src={bannerpic1}
                  alt="Nail Treatment"
                  className="w-full h-auto object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-2">
              What Our Clients Say
            </h2>
            <p className="text-charcoal/60 text-sm md:text-base">Real reviews from our valued clients</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Review 1 - Ruchita Sharma */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brown/20 flex items-center justify-center">
                    <span className="text-brown font-medium text-lg">R</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Ruchita Sharma</h3>
                    <p className="text-xs text-charcoal/60">4 months ago</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#8f5d46" color="#8f5d46" />
                  ))}
                </div>
              </div>
              <p className="text-charcoal/80 leading-relaxed text-sm md:text-base mb-3">
                So gappy with my freshly done nails! Would recommend to everyone. Karen was so lovely and had so much attention yo detail while doing my nails!
              </p>
            </motion.div>

            {/* Review 2 - Kimi singh */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brown/20 flex items-center justify-center">
                    <span className="text-brown font-medium text-lg">K</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Kimi singh</h3>
                    <p className="text-xs text-charcoal/60">12 months ago</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#8f5d46" color="#8f5d46" />
                  ))}
                </div>
              </div>
              <p className="text-charcoal/80 leading-relaxed text-sm md:text-base mb-4">
                Got My nails don't by Tracy , she's so lovely and 10/10 professional. I had a deep cut on my thumb but she didn't make me feel a thing . It was my first visit but I will keep coming. Thank you beautiful.
              </p>
            </motion.div>
          </motion.div>

          {/* Google Reviews Link */}
          <motion.div className="text-center mt-10" {...fadeInUp}>
            <a
              href="https://www.google.com/search?q=goddess+of+nails+and+beauty&lqi=Chtnb2RkZXNzIG9mIG5haWxzIGFuZCBiZWF1dHlIssX6-KqqgIAIWjUQABABEAIQAxAEGAAYARgCGAMYBCIbZ29kZGVzcyBvZiBuYWlscyBhbmQgYmVhdXR5MgJlbpIBDGJlYXV0eV9zYWxvbqoBQxABMh4QASIa3PchGJ_7WyQ4IqhTQ8GrSuIvKyOI8erZs4oyHxACIhtnb2RkZXNzIG9mIG5haWxzIGFuZCBiZWF1dHk#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brown hover:text-brown/80 transition-colors duration-200 text-sm md:text-base"
            >
              <span>View all reviews on Google</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
