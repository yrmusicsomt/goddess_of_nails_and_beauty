import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const Services = () => {
  const handleBooking = () => {
    window.open('https://www.fresha.com/lvp/goddess-of-nails-beauty-lonsdale-street-melbourne-JQlWq4', '_blank');
  };

  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {/* Manicure Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Manicure
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Services List */}
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Deluxe Naked Manicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">DELUXE NAKED MANICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$60</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A detailed manicure using an e-file for precise cuticle and nail care. Finished with strengthening polish, gentle exfoliation, a hydrating mask, and a hot towel wrap.
              </p>
            </div>

            {/* Express Gel Manicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">EXPRESS GEL MANICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$65</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                This is a detailed manicure service using an e-file to give detailed cuticle and nail care for a picture perfect finish. The finish comes with the gel polish, a hydrating lotion and cuticle oil.
              </p>
            </div>

            {/* Deluxe Gel Manicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">DELUXE GEL MANICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$80</p>
                  <p className="text-sm text-charcoal/60">60mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A detailed manicure using an e-file for precise cuticle and nail care. Finished with gel polish, gentle exfoliation, a hydrating mask, and a hot towel wrap.
              </p>
            </div>

            {/* Add On Gel/Shellac Removal */}
            <div className="pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">ADD ON GEL/SHELLAC REMOVAL</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$15</p>
                  <p className="text-sm text-charcoal/60">15mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                If you currently have gel/shellac on your nails please include gel removal in your booking to allow enough time for a gentle soak-off.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BIAB Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Builder Gel (BIAB) Manicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BUILDER GEL (BIAB) MANICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$85</p>
                  <p className="text-sm text-charcoal/60">75mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                If you have damaged, thin nails, are a nail biter or you struggle to grow your nails then a super gel manicure is the perfect option for you. A builder gel is applied over your natural nail to add the extra strength and durability to your nails supporting them to grow. Expect 3 to 4 weeks flawless wear. This service includes a full signature manicure with detailed cuticle work, massage and gel polish colour of your choice (if desired).
              </p>
            </div>

            {/* Builder Gel Rebalance */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BUILDER GEL (BIAB) MANICURE REBALANCE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$95</p>
                  <p className="text-sm text-charcoal/60">90mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Re-balance and refresh your BIAB Manicure so it looks as good as new again. This service includes detailed e-file cuticle care, massage and a gel polish colour of your choice (if desired).
              </p>
            </div>

            {/* Extensions */}
            <div className="pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">EXTENSIONS</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$130</p>
                  <p className="text-sm text-charcoal/60">2hours</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-2">
                Add length to your natural nails with either tips or full cover extensions. This service includes our cuticle care and gel colour of your choice.
              </p>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Please Add On: Extra Long Nails if you desire an extra long look (8mm past the free edge or more).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add On Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light italic mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Add On
            </h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...fadeInUp}>
            {/* Gel Removal */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium mb-1">GEL REMOVAL</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$15</p>
                <p className="text-sm text-charcoal/60">+15mins</p>
              </div>
            </div>

            {/* BIAB/SNS/Acrylic Removal */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium mb-1">BIAB/SNS/ACRYLIC/HARD</h3>
                <h3 className="text-lg font-medium">GEL/GELX REMOVAL</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$30</p>
                <p className="text-sm text-charcoal/60">+30mins</p>
              </div>
            </div>

            {/* French Tip */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium">FRENCH TIP</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$20</p>
                <p className="text-sm text-charcoal/60">+20mins</p>
              </div>
            </div>

            {/* Chrome */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium">CHROME</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$20</p>
                <p className="text-sm text-charcoal/60">+20mins</p>
              </div>
            </div>

            {/* Cat Eye */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium">CAT EYE</h3>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$20</p>
                <p className="text-sm text-charcoal/60">+20mins</p>
              </div>
            </div>

            {/* Extra Long Nails */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-lg font-medium mb-1">EXTRA LONG NAILS</h3>
                <p className="text-sm text-charcoal/60">8mm past the free edge or more</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">$20</p>
                <p className="text-sm text-charcoal/60">+20mins</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeInUp}>
            <p className="text-sm text-charcoal/70 leading-relaxed max-w-4xl mx-auto">
              If you are unsure which service to book or require for price quote, please send me a message with your preferred photo of your design to avoid being behind schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nail Art Add On Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...fadeInUp}>
            {/* Removal */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">REMOVAL</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-base">Gel Removal</p>
                  <div className="text-right">
                    <p className="font-medium">$15</p>
                    <p className="text-sm text-charcoal/60">+15mins</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <p className="text-base">BIAB/SNS/Acrylic/Hard<br />Gel/GelX</p>
                  <div className="text-right">
                    <p className="font-medium">$30</p>
                    <p className="text-sm text-charcoal/60">+30mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nail Repair */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">NAIL REPAIR</h3>
              <div className="flex justify-between items-start">
                <p className="text-base">Split/Broken/ Single Extension</p>
                <div className="text-right">
                  <p className="font-medium">$5</p>
                  <p className="text-sm text-charcoal/60">+10mins</p>
                </div>
              </div>
            </div>

            {/* Nail Art Level 1 */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">NAIL ART LEVEL 1</h3>
              <div className="space-y-3">
                <p className="text-base">Examples: Dots, Heart, Stickers</p>
                <div className="flex justify-between items-start">
                  <div></div>
                  <div className="text-right">
                    <p className="font-medium">$20</p>
                    <p className="text-sm text-charcoal/60">+20mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nail Art Level 2 */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">NAIL ART LEVEL 2</h3>
              <div className="space-y-3">
                <p className="text-base">Examples: Abstract, Swirls,<br />Mutiple Hearts or Flowers</p>
                <div className="flex justify-between items-start">
                  <div></div>
                  <div className="text-right">
                    <p className="font-medium">$30</p>
                    <p className="text-sm text-charcoal/60">+30mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nail Art Level 3 */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">NAIL ART LEVEL 3</h3>
              <div className="space-y-3">
                <p className="text-base">Examples: Ombré, Flames, Stars,<br />Blooming Gel</p>
                <div className="flex justify-between items-start">
                  <div></div>
                  <div className="text-right">
                    <p className="font-medium">$40</p>
                    <p className="text-sm text-charcoal/60">+40mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nail Art Level 4 */}
            <div className="border border-charcoal/30 rounded-3xl px-8 py-8">
              <h3 className="text-2xl font-light mb-6">NAIL ART LEVEL 4</h3>
              <div className="space-y-3">
                <p className="text-base">Example: 3D, Multi Chrome,<br />Detailed Hand Painting,<br />Custom Design</p>
                <div className="flex justify-between items-start">
                  <div></div>
                  <div className="text-right">
                    <p className="font-medium">$60</p>
                    <p className="text-sm text-charcoal/60">+60mins</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeInUp}>
            <p className="text-sm text-charcoal/70 leading-relaxed max-w-4xl mx-auto">
              If you are unsure which service to book or require for price quote, please send me a message with your preferred photo of your design to avoid being behind schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pedicure Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Pedicure
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Services List */}
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Deluxe Naked Pedicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">DELUXE NAKED PEDICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$75</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A detailed pedicure using an e-file for precise cuticle, callus care and relaxation without the polish. Finished with gentle exfoliation, a hydrating mask, and hot towels.
              </p>
            </div>

            {/* Express Gel Pedicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">EXPRESS GEL PEDICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$80</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                This is a detailed pedicure service using an e-file to give detailed cuticle and nail care for a picture perfect finish. The finish comes with the gel polish, a hydrating lotion and cuticle oil.
              </p>
            </div>

            {/* Deluxe Gel Pedicure */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">DELUXE GEL PEDICURE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$95</p>
                  <p className="text-sm text-charcoal/60">60mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A detailed pedicure using an e-file for precise cuticle and nail care. Finished with gel polish, callus care, gentle exfoliation, a hydrating mask, and a hot towel wrap.
              </p>
            </div>

            {/* Add On Gel/Shellac Removal */}
            <div className="pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">ADD ON GEL/SHELLAC REMOVAL</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$15</p>
                  <p className="text-sm text-charcoal/60">15mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                If you currently have gel/shellac on your nails please include gel removal in your booking to allow enough time for a gentle soak-off.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brows Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Brows
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Services List */}
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Brow Shape */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BROW SHAPE</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$30</p>
                  <p className="text-sm text-charcoal/60">20mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A gentle wax, trim and tweeze to shape and refine your brows for a clean finish.
              </p>
            </div>

            {/* Brow Colour */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BROW COLOUR</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$30</p>
                  <p className="text-sm text-charcoal/60">20mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Custom-blended colour for naturally fuller-looking brows and added definition.
              </p>
            </div>

            {/* Brow Sculpt */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BROW SCULPT</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$60</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A full brow refresh including mapping, shaping and colouring for defined and balanced look.
              </p>
            </div>

            {/* Brow Lamination Only */}
            <div className="pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">BROW LAMINATION ONLY</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$40</p>
                  <p className="text-sm text-charcoal/60">20mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-3">
                Brow lamination is a gentle process that restructures and sets your natural brow hairs into your desired position, creating a fuller, lifted, and more defined look.
              </p>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                This option is lamination only, meaning it does not include any brow shaping, waxing, tweezing, or tinting. It's perfect if you're happy with your current brow shape and simply want your natural hairs to stay in place for up to 6–8 weeks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lashes Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Lashes
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Services List */}
          <motion.div className="space-y-8" {...fadeInUp}>
            {/* Lash Tint */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">LASH TINT</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$30</p>
                  <p className="text-sm text-charcoal/60">20mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Enhance your natural lashes with a lash tint. This treatment adds volume and definition, particularly for those with fair lashes.
              </p>
            </div>

            {/* Lash Lift */}
            <div className="border-b border-charcoal/20 pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">LASH LIFT</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$80</p>
                  <p className="text-sm text-charcoal/60">45mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                Gently lifts and curls your natural lashes for an effortless, open-eye effect.
              </p>
            </div>

            {/* Lash Lift and Lash Tint */}
            <div className="pb-8">
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="text-lg md:text-xl font-medium">LASH LIFT AND LASH TINT</h3>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-medium">$95</p>
                  <p className="text-sm text-charcoal/60">60mins</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                A total lash refresh—lift, curl, and tint for long-lasting definition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Face Waxing Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS AND BEAUTY</h1>
            <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Face Waxing
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-8"></div>
          </motion.div>

          {/* Services Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" {...fadeInUp}>
            {/* Eyebrow Wax */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium">EYEBROW WAX</h3>
              <div className="text-right">
                <p className="text-lg font-medium">$30</p>
                <p className="text-sm text-charcoal/60">30mins</p>
              </div>
            </div>

            {/* Lip Wax */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium">LIP WAX</h3>
              <div className="text-right">
                <p className="text-lg font-medium">$10</p>
                <p className="text-sm text-charcoal/60">10mins</p>
              </div>
            </div>

            {/* Chin Wax */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium">CHIN WAX</h3>
              <div className="text-right">
                <p className="text-lg font-medium">$10</p>
                <p className="text-sm text-charcoal/60">10mins</p>
              </div>
            </div>

            {/* Sideburns */}
            <div className="border border-charcoal/30 rounded-full px-8 py-6 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium">SIDEBURNS</h3>
              <div className="text-right">
                <p className="text-lg font-medium">$15</p>
                <p className="text-sm text-charcoal/60">15mins</p>
              </div>
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

export default Services;
