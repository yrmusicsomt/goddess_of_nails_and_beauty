import { motion } from 'framer-motion';
import { useServices } from '../hooks/useServices';
import { SHOP_ID } from '../lib/supabase';
import type { CategoryWithServices, Service } from '../types/database';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

function formatPrice(price: string) {
  if (price.startsWith('from ')) {
    return `from $${price.slice(5)}`;
  }
  return `$${price}`;
}

function groupBySubcategory(services: Service[]) {
  const groups: { subcategory: string | null; subtitle: string | null; services: Service[] }[] = [];
  for (const svc of services) {
    const last = groups[groups.length - 1];
    if (last && last.subcategory === svc.subcategory) {
      last.services.push(svc);
    } else {
      groups.push({
        subcategory: svc.subcategory,
        subtitle: svc.subcategory_subtitle,
        services: [svc],
      });
    }
  }
  return groups;
}

function CategorySection({ category, isFirst }: { category: CategoryWithServices; isFirst: boolean }) {
  const groups = groupBySubcategory(category.services);
  const hasSubcategories = groups.some(g => g.subcategory !== null);

  return (
    <section className={`py-12 md:py-16 ${isFirst ? '' : 'border-t border-charcoal/10'}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          {isFirst && (
            <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-2">GODDESS OF NAILS & BEAUTY</h1>
          )}
          <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {category.name}
          </h2>
          <div className="w-full h-px bg-charcoal/30 mb-8"></div>
        </motion.div>

        {hasSubcategories ? (
          groups.map((group, gi) => (
            <motion.div key={gi} className={gi < groups.length - 1 ? 'mb-8' : ''} {...fadeInUp}>
              {group.subcategory && (
                <h3 className="text-2xl font-light mb-6">{group.subcategory.toUpperCase()}</h3>
              )}
              {group.subtitle && (
                <p className="text-sm text-charcoal/60 mb-4 italic">{group.subtitle}</p>
              )}
              <div className="space-y-6">
                {group.services.map(svc => (
                  <ServiceItem key={svc.id} service={svc} />
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div className="space-y-6" {...fadeInUp}>
            {category.services.map(svc => (
              <ServiceItem key={svc.id} service={svc} />
            ))}
          </motion.div>
        )}

        {category.notes && (
          <div className="pt-4 text-sm text-charcoal/70">
            {category.notes.split('\n').map((line, i) => (
              <p key={i} className={i === 0 ? 'italic' : ''}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceItem({ service }: { service: Service }) {
  return (
    <div className="flex justify-between items-start gap-4 border-b border-charcoal/10 pb-4">
      <div className="flex-1">
        <h4 className="text-base md:text-lg font-medium">{service.name.toUpperCase()}</h4>
        {service.description && (
          <p className="text-sm text-charcoal/60 mt-1">{service.description}</p>
        )}
      </div>
      <p className="text-lg font-medium flex-shrink-0">{formatPrice(service.price)}</p>
    </div>
  );
}

const PriceList = () => {
  const { categories, loading, error } = useServices(SHOP_ID);

  const handleBooking = () => {
    window.open('https://www.instagram.com/goddessofnailsandbeauty/', '_blank');
  };

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 bg-cream min-h-screen flex items-center justify-center">
        <div className="text-charcoal/50 text-lg">Loading services...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 md:pt-20 bg-cream min-h-screen flex items-center justify-center">
        <div className="text-charcoal/50 text-lg">Unable to load services. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20 bg-cream">
      {categories.map((cat, index) => (
        <CategorySection key={cat.id} category={cat} isFirst={index === 0} />
      ))}

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
