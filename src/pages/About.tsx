import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* About Section */}
      <section className="relative bg-cream py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-4">
              About
            </h1>
          </motion.div>

          <motion.div
            className="space-y-6 md:space-y-8 text-charcoal/80 leading-relaxed"
            {...fadeInUp}
          >
            <p className="text-base md:text-lg">
              Goddess of Nails & Beauty are dedicated to sourcing the best available products from industry leading companies from all over the world: Bio Sculpture, OPI, CND, ESSIE, ORLY, Harmony-Gelish and more innovative products are on offer.
            </p>

            <p className="text-base md:text-lg">
              Offering a full range of services including manicure, pedicure, shellac, gel nails, acrylic nails, nail art including custom made & jewellery, eye-lash extension, brows and lash tinting, spray tanning (organic spray tanning available), waxing female & male, facial treatments and body treatments.
            </p>

            <p className="text-base md:text-lg">
              Our commitment to your hygiene at Goddess is a priority. An autoclave system, disposable nail files, buffers and pedicure pumice bars are in use. All quality services at competitive prices. Appointments or walk-ins welcome.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
