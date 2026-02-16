import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import god1 from '../assets/images/gallery/god1.JPG';
import god2 from '../assets/images/gallery/god2.JPG';
import god3 from '../assets/images/gallery/god3.JPG';
import god4 from '../assets/images/gallery/god4.JPG';
import god5 from '../assets/images/gallery/god5.JPG';
import god6 from '../assets/images/gallery/god6.JPG';
import god7 from '../assets/images/gallery/god7.JPG';
import god8 from '../assets/images/gallery/god8.JPG';
import god9 from '../assets/images/gallery/god9.JPG';
import god10 from '../assets/images/gallery/god10.JPG';
import god11 from '../assets/images/gallery/god11.JPG';
import god12 from '../assets/images/gallery/god12.JPG';
import god13 from '../assets/images/gallery/god13.JPG';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const Gallery = () => {
  // Gallery images
  const galleryImages = [
    { id: 1, src: god1, alt: 'Nail art 1' },
    { id: 2, src: god2, alt: 'Nail art 2' },
    { id: 3, src: god3, alt: 'Nail art 3' },
    { id: 4, src: god4, alt: 'Nail art 4' },
    { id: 5, src: god5, alt: 'Nail art 5' },
    { id: 6, src: god6, alt: 'Nail art 6' },
    { id: 7, src: god7, alt: 'Nail art 7' },
    { id: 8, src: god8, alt: 'Nail art 8' },
    { id: 9, src: god9, alt: 'Nail art 9' },
    { id: 10, src: god10, alt: 'Nail art 10' },
    { id: 11, src: god11, alt: 'Nail art 11' },
    { id: 12, src: god12, alt: 'Nail art 12' },
    { id: 13, src: god13, alt: 'Nail art 13' },
  ];

  // Customer reviews
  const reviews = [
    {
      id: 1,
      name: 'Rhea Sharma',
      rating: 5,
      text: 'So happy with my freshly done nails! Would recommend to everyone. Karen was so lovely and had so much attention to detail while doing my nails!',
      date: '3 months ago'
    },
    {
      id: 2,
      name: 'daisy jo',
      rating: 5,
      text: 'everytime i come to visit melbourne i always get my nails done here! everyone is so friendly and lovely. service is incredible and efficient!',
      date: '2 months ago'
    },
    {
      id: 3,
      name: 'Cooper Long',
      rating: 5,
      text: 'Fantastic experience got full set acrilic extensions, Tracy even hand drew the lace design, and gave suggestions on the inspiration. Overall very skillful work, especially in such a short period of time, even staying open late just to ensure good quality. 💙💙💙 Totally worth the money',
      date: '4 months ago'
    },
    {
      id: 4,
      name: 'lakshmi snakruthi',
      rating: 5,
      text: 'THE BEST NAILS EVERRR. I was skeptical of getting this particular design wondering if they\'ll get it right or do a wonderboi job. I absolutely love them and can\'t wait to come back soon!',
      date: '4 months ago'
    },
    {
      id: 5,
      name: 'Vijeta Bhanot',
      rating: 5,
      text: 'I\'m in AWEEEE!!!! My nail tech was so patient, and careful with the colour and length I chose. So sweet and kind. The best service I\'ve received in so long.. im so happy with my nails. She did soooo soo good. I absolutely love the work and the variety of options. I will definitely be coming back and the prices were reasonable. Thankyou so much 😍😍😍😍👌🏻👌🏻👌🏻 My second time coming here, nails were amazing colour and done with so much patience and choice of my design. I love the shade of pink/wine. She once again did a really good job',
      date: '7 months ago'
    },
    {
      id: 6,
      name: 'kanha meas',
      rating: 5,
      text: 'LOVE LOVE, great services and Lyna done an excellent job for me. Highly recommended!! COME AGAIN and never disappointed by their service and performance. This time Karen did my nails and it looks exactly like the picture. Highly recommended!!',
      date: '4 months ago'
    },
  ];

  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-6" {...fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 uppercase tracking-wide">
              GALLERY
            </h1>
            <h2 className="text-2xl md:text-3xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Our Work
            </h2>
            <p className="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto">
              Browse through our collection of stunning nail designs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Masonry Section */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Masonry Grid Layout */}
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            {...fadeInUp}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-16 border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Customer Reviews
            </h2>
            <p className="text-charcoal/60 text-sm md:text-base">
              What our valued customers say about us
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            {...fadeInUp}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-charcoal/10"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brown text-brown" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-charcoal/80 text-sm md:text-base leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="font-medium text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal/50 mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to get your nails done?
            </h2>
            <p className="text-charcoal/60 mb-8 text-sm md:text-base">
              Book your appointment today and experience our premium nail services
            </p>
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

export default Gallery;
