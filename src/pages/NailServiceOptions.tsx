import { motion } from 'framer-motion';
import { CheckCircle, Clock, Sparkles, Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const NailServiceOptions = () => {
  const handleBooking = () => {
    window.open('https://www.instagram.com/goddessofnailsandbeauty/', '_blank');
  };

  const services = [
    {
      name: "Gel Polish Manicure",
      description: "This service is best for someone with strong, short nails with a low impact hands on lifestyle. Gel polish has a lasting power of around 2 weeks before needing removal.",
      duration: "~2 weeks"
    },
    {
      name: "Gel Manicure with Bio Gel Base",
      description: "Durable treatment gel base coat to extend life of gel polish. This is best for people that prefer a thinner gel application with more durability than a standard gel polish. We estimate this product can last around 3 weeks before needing removal.",
      duration: "~3 weeks"
    },
    {
      name: "Builder in a Bottle Manicure",
      description: "BIAB is a thicker and more durable gel product. It has the ability to bend and flex with the nails natural movements. The gel can be sculpted to support parts of the nail that need extra strength with the option of covering with a gel polish or choosing from the BIAB colours. This product is better for people with a more hands on lifestyle that finds that gel polish doesn't last for them. This is also great for people wanting to grow out their natural nails. BIAB is a refillable product which means each appointment, we file down the colour, rebalance the builder gel and reapply a colour of choice.",
      duration: "~3 weeks",
      refillable: true
    },
    {
      name: "Bio Sculpture Gel Manicure",
      description: "Bio Sculpture gel cares about natural nail health. Developed using the highest quality ingredients, our treatment gels unique flexible properties are able to bend and flex with the nails natural movements, providing them with protection and allow them to grow without breaking.",
      duration: "~3 weeks"
    },
    {
      name: "IBX Treatment",
      description: "IBX is a professional natural nail treatment that helps improve nail growth, strengthen nail plate and protects nails against gel polish damage. IBX treatment will increase longevity for gel products. (Can be done on its own or add to other gel services.)",
      addon: true
    },
    {
      name: "Hard Gel Extensions",
      description: "Similar feel to SNS & Acrylic nails. Non soak-off and non flexible product for people who find gel lifts quickly. Also for people wanting substantial length extended on their natural nails.",
      duration: "~3 weeks",
      refillable: true
    },
    {
      name: "Bio Sculpture Gel Extensions",
      description: "Create instant nail length with Bio Sculpture Gel. Flexible, soak-off gel. Great for people that have soft nail beds and prefer an extension they can soak off.",
      duration: "~3 weeks",
      refillable: true
    },
    {
      name: "Gel-X Extensions",
      description: "Pre-sized full cover gel tips that are soak off extensions. Ideal for people wanting instant length and easy removal.",
      duration: "~3 weeks",
      refillable: true
    }
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "SELECT THE TYPE OF PRODUCT TO BE REMOVED",
      subtitle: "Do you have product other than normal polish on your nails?",
      content: "If so, select the type of product to be removed (different nails take different time to remove):",
      options: [
        "Remove SNS/Acrylic or Hard gel",
        "Remove Builder Gel",
        "Remove gel polish"
      ],
      note: "Builder Gel, Gel-X Extensions and Hard Gel are all refillable!"
    },
    {
      step: 2,
      title: "WHAT TYPE OF MANICURE WOULD YOU LIKE?",
      options: [
        "Gel polish - best for people with strong short nails without a hands on lifestyle. 2 week life expectancy.",
        "Gel polish with bio base - best for people that find gel polish doesn't last the 2-3 weeks and need some extra strength.",
        "Bio Sculpture Manicure - 4 layers of builder gel applied to give a strong foundation for people with weaker nails and a more hands on lifestyle",
        "Builder in a Bottle Manicure - A thicker, more durable gel product. Sculpted to support the nail, and flexible to allow for movement of natural nail. Can choose from a BIAB colour, or have a gel colour over the top.",
        "Hard Gel Manicure - Hard gel is a non soak off product which is refilled every 3 (or so) weeks. Best for people with longer nails needing a builder gel. Hard gel has a similar feel to Acrylic or SNS where there is no flexibility.",
        "Hard Gel Extensions - As described above but for people wanting length created over their natural nails. Only refillable or buffed off by an experienced nail technician.",
        "Gel-X Extensions - Instant length created by full cover soft gel tips. This product is great for all nails and can be soaked off for people only wanting them as a once off or refills every 3 weeks (or so)"
      ]
    },
    {
      step: 3,
      title: "WOULD YOU LIKE TO HAVE SOME COOL, FANCY NAIL ART?",
      subtitle: "Choose the type of nail art:",
      options: [
        "Level 1 - 20 minutes for up to 4 feature nails",
        "Level 2 - 40 minutes for simple patterns on all nails (single layer designs)",
        "Level 3 - 60 minutes for mixture of simple and complex patterns",
        "Level 4 - 90 minutes for complex layers patterns on each nail",
        "Chrome / Cat eyes",
        "Dealers Choice Simple and Complex",
        "Glitter/Colour Fades",
        "and so many more!"
      ]
    },
    {
      step: 4,
      title: "WOULD YOU LIKE A LITTLE LOVE FOR YOUR NATURAL NAILS?",
      content: "Adding IBX treatment will strengthen and repair the natural nail before we jazz up your nails!!"
    },
    {
      step: 5,
      title: "CHOOSE ALL THE SERVICES YOU REQUIRE DURING YOUR APPOINTMENT",
      content: "You will receive a confirmation text & email very soon."
    }
  ];

  const waxingTips = {
    before: [
      "On the morning of your wax, give yourself a very gentle exfoliation. Do not moisturise before your wax. This makes the hair slippery and the wax will have a hard time gripping onto them.",
      "Do not wear tight clothing to your appointment. Wear something baggy so your skin can breathe.",
      "If you're really worried about the pain, take 1 or 2 paracetamol about 30-40 minutes before your appointment. This can help reduce the surface discomfort, but doesn't work for everybody.",
      "Make sure your hair is long enough to remove completely from the roots — it should be at the very least 0.5cm, but closer to 1cm is best. If you've shaved the area within the last few weeks it might take a couple of waxes to get your hair into a cycle of growth that allows the most effective wax finish.",
      "Alternatively, if your hair is longer than 1.5cm, a trim with clippers is recommended (if you can reach of course!). Longer hair can actually end up making the treatment more painful, so clipping your hair to about 1cm really helps!"
    ],
    immediately: [
      "It's normal immediately after your wax for a little bit of redness and a prickly heat type rash to appear. This should disappear after a few hours and is normally due to a histamine reaction. Because waxing removes the hair at the root, it's important that you keep the area clean and bacteria free.",
      "Do not wear tight clothing straight after your appointment. Your skin needs to breathe for a few hours after, and tight clothing can cause you to sweat which can extend inflammation and cause infection",
      "No hot showers! Keep the temperature on the cooler side to help reduce inflammation",
      "No sunbathing for at least 12 hours (have your waxing done at least the day before you go on holiday)",
      "No swimming, spas or saunas for 24 hours",
      "Also avoid touching the waxed area to ensure it remains bacteria free",
      "Use tea tree lotion or witchhazel lotion to apply to the area for its anti-bacterial qualities. Avoid applying any other topical lotions for at least 12 hours."
    ],
    aftercare: [
      "Use a soft brush or exfoliating glove to gently buff the area every 2-3 days – this is particularly important after about day 3 through to about the 10 day mark. It doesn't need to be hard scrubbing, just a gentle exfoliation.",
      "Use a product like Legole Anti Ingrown Hair Serum or Bump eRaiser to apply over the area after showering. Both are available from Priceline.",
      "The added bonus of following the after care advice (apart from your skin looking hair-free and smooth for longer), is that it really will make your next wax a whole lot quicker and less painful!"
    ]
  };

  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-light italic mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Nail Services Guide
            </h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8 text-charcoal">
              WHAT SERVICE IS RIGHT FOR ME?
            </h2>
            <div className="w-full h-px bg-charcoal/30"></div>
          </motion.div>

          {/* Services List */}
          <div className="space-y-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-charcoal/10 hover:shadow-md transition-shadow duration-300"
                {...fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="w-6 h-6 text-brown" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-medium text-charcoal">
                        {service.name}
                      </h3>
                      {service.duration && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#fdf3e6] text-brown text-sm rounded-full">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                      )}
                      {service.refillable && (
                        <span className="px-3 py-1 bg-brown/10 text-brown text-sm rounded-full">
                          Refillable
                        </span>
                      )}
                      {service.addon && (
                        <span className="px-3 py-1 bg-brown/10 text-brown text-sm rounded-full">
                          Add-on Available
                        </span>
                      )}
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How Long Section */}
          <motion.div className="bg-[#fdf3e6] rounded-lg p-8 mb-12 border border-brown/20" {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-charcoal">
              HOW LONG WILL MY NAILS LAST?
            </h2>
            <p className="text-charcoal/80 leading-relaxed">
              This varies on different lifestyles and how you take care of your nails. We recommend to soak-off or change the nails at around 3 weeks, to avoid lifting and bending which can cause damages to natural nails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Making a Booking
            </h2>
            <div className="w-full h-px bg-charcoal/30"></div>
          </motion.div>

          <div className="space-y-8">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-cream rounded-lg shadow-sm p-6 md:p-8 border border-charcoal/10"
                {...fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brown text-white rounded-full flex items-center justify-center text-lg font-medium">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium mb-2 text-charcoal">
                      Step {step.step}: {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-charcoal/70 mb-3 italic">{step.subtitle}</p>
                    )}
                    {step.content && (
                      <p className="text-charcoal/80 mb-3 leading-relaxed">{step.content}</p>
                    )}
                    {step.options && (
                      <ul className="space-y-2">
                        {step.options.map((option, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-brown flex-shrink-0 mt-0.5" />
                            <span className="text-charcoal/80">{option}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.note && (
                      <div className="mt-4 p-3 bg-brown/10 rounded-lg">
                        <p className="text-brown font-medium text-sm">{step.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div className="mt-8 p-6 bg-[#fdf3e6] rounded-lg text-center border border-brown/20" {...fadeInUp}>
            <p className="text-xl font-medium text-charcoal mb-2">ALL DONE!</p>
            <p className="text-charcoal/80">Thanks for booking, see you at Goddess of Nails and Beauty!</p>
          </motion.div>
        </div>
      </section>

      {/* Waxing Recommendations Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Waxing Recommendations
            </h2>
            <div className="w-full h-px bg-charcoal/30 mb-4"></div>
            <p className="text-lg text-charcoal/70">
              So you've booked a wax! YAY! Here's a couple of tips to lessen the pain (and increase the longevity of that hair free feeling).
            </p>
          </motion.div>

          {/* Before Your Wax */}
          <motion.div className="mb-12" {...fadeInUp}>
            <div className="bg-white rounded-lg p-8 border border-charcoal/10 shadow-sm">
              <h3 className="text-2xl font-medium mb-6 text-charcoal flex items-center gap-2">
                <Heart className="w-6 h-6 text-brown" />
                Before Your Wax
              </h3>
              <ul className="space-y-4">
                {waxingTips.before.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brown flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After Your Wax - Immediately */}
          <motion.div className="mb-12" {...fadeInUp}>
            <div className="bg-white rounded-lg p-8 border border-charcoal/10 shadow-sm">
              <h3 className="text-2xl font-medium mb-6 text-charcoal flex items-center gap-2">
                <Heart className="w-6 h-6 text-brown" />
                Immediately After Your Wax
              </h3>
              <ul className="space-y-4">
                {waxingTips.immediately.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brown flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 3-10 Days After */}
          <motion.div className="mb-12" {...fadeInUp}>
            <div className="bg-white rounded-lg p-8 border border-charcoal/10 shadow-sm">
              <h3 className="text-2xl font-medium mb-6 text-charcoal flex items-center gap-2">
                <Heart className="w-6 h-6 text-brown" />
                3-10 Days After Waxing
              </h3>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                As your skin closes over the follicles, the next consideration is to ensure you prevent ingrown hairs. This is when new, often softer hair can get trapped under the skin. A few simple measures can easily avoid this situation.
              </p>
              <ul className="space-y-4">
                {waxingTips.aftercare.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brown flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* How Long Will Your Wax Last */}
          <motion.div {...fadeInUp}>
            <div className="bg-[#fdf3e6] rounded-lg p-8 border border-brown/20">
              <h3 className="text-2xl font-medium mb-4 text-charcoal">
                How Long Will Your Wax Last?
              </h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                If you're a first-timer or occasional waxer, you will likely notice some new hair growth within 7 days - 2 weeks due to your naturally staggered hair growth cycle. This part of regrowth will be sparse, about one-third of the hair normally present. Soon after the remaining hair will begin growing in.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Regular waxing will leave the area hair free for 3 – 6 weeks. Over time the density of hair in the waxed area may start to decrease as well.
              </p>
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

export default NailServiceOptions;
