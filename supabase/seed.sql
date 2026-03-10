-- ============================================
-- SCHEMA
-- ============================================

CREATE TABLE IF NOT EXISTS goddess_service_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shop_id TEXT NOT NULL,
  name TEXT NOT NULL,
  display_order INT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS goddess_services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID NOT NULL REFERENCES goddess_service_categories(id) ON DELETE CASCADE,
  subcategory TEXT,
  subcategory_subtitle TEXT,
  name TEXT NOT NULL,
  description TEXT,
  price TEXT NOT NULL,
  display_order INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_goddess_categories_shop ON goddess_service_categories(shop_id, display_order);
CREATE INDEX IF NOT EXISTS idx_goddess_services_category ON goddess_services(category_id, display_order);

-- RLS
ALTER TABLE goddess_service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE goddess_services ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read goddess categories') THEN
    CREATE POLICY "Public read goddess categories" ON goddess_service_categories FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read goddess services') THEN
    CREATE POLICY "Public read goddess services" ON goddess_services FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth manage goddess categories') THEN
    CREATE POLICY "Auth manage goddess categories" ON goddess_service_categories FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Auth manage goddess services') THEN
    CREATE POLICY "Auth manage goddess services" ON goddess_services FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');
  END IF;
END $$;

-- ============================================
-- SEED DATA FOR GODDESS
-- ============================================

-- 1. Manicure
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Manicure', 1, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Clear Manicure', 'Cuticle care, massage, shape, 100% Argan Oil', '25', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Deluxe Manicure', 'Cuticle care, massage, shape, 100% Argan Oil & polish', '30', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Manicure Scrub', 'Rejuvenate, invigorate or revitalise your manicure with one of our luscious blissful scrubs', '35', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Goddess Manicure', 'Cuticle care, deep exfoliation, massage, mask, 100% organic Argan Oil, shape & polish', '40', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Brightening Manicure', 'A scrub and mask that gently exfoliate dead skin cells, restoring moisture and promoting glowing, healthy skin', '40', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Buffing & Shaping (Fingers) with Polish', NULL, '20', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Buffing & Shaping (Toes) with Polish', NULL, '30', 7);

-- 2. Spa Pedicure
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Spa Pedicure', 2, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Deluxe Pedicure', 'Cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, shape, with or without polish', '45', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Goddess Pedicure', 'Pedicure soak with essential oils, cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, mask, shape & polish', '60', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Brightening Pedicure', 'A brightening scrub gently exfoliates away dead skin cells, revealing new, clear skin while stimulating circulation. A brightening mask deeply hydrates, restoring moisture balance', '60', 3);

-- 3. Manicure & Spa Pedicure Packages
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Manicure & Spa Pedicure Packages', 3, E'Paraffin wax \u2013 fights dehydrated skin.\nAdd to any manicure: $10 | Pedicure: $15');
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Deluxe Manicure & Pedicure', NULL, '65', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Goddess Manicure & Pedicure', NULL, '90', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Brightening Manicure & Pedicure', NULL, '90', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Shellac Manicure & Pedicure', NULL, '105', 4);

-- 4. Gel X, Acrylic & SNS (Organic)
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Gel X, Acrylic & SNS (Organic)', 4, E'French Polish +$10\nDeep French from +$15');
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Gel X', 'XS / S / M', NULL, '75', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Gel X', 'L / XL', NULL, '85', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Natural Nails Overlay', NULL, '55 / 55', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Full Set with Colour', NULL, '55 / 60', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Full Set with Shellac', NULL, '65', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Full Set Toe Nails', NULL, '60', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Refill', NULL, '45', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Rebalance', NULL, '55', 8),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'One Nail Repair', NULL, '10 / 10', 9),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Soak Off / Removal (Shellac / Bio Sculpture)', NULL, 'from 15', 10),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Soak Off / Removal (Acrylic Powder / Hard Gel)', NULL, 'from 20', 11),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Nail Art (per finger)', NULL, '5', 12),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Nail Art (Full Set)', NULL, 'from 35', 13),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Gel X, Acrylic & SNS (Organic)'), 'Acrylic / SNS', 'Cut Down (Shorten & Reshape)', NULL, '20', 14);

-- 5. Bio-Sculpture & EVO Oxygenating Gel
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Bio-Sculpture & EVO Oxygenating Gel', 5, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'EVO Oxygenating Gel Express', NULL, '55', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'EVO Oxygenating Gel with Manicure', NULL, '60', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Express', NULL, '65', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel with Deluxe Manicure', NULL, '75', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Full Set (Tips)', NULL, '100', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Full Set (Sculpture)', NULL, '120', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), 'Builder Gel / BIAB', 'Natural Nails', NULL, '75', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), 'Builder Gel / BIAB', 'Extensions', NULL, '110', 8);

-- 6. Shellac (OPI & Other Gels)
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Shellac (OPI & Other Gels)', 6, 'Bio Gel / Shellac customers who purchase a new set: soak-off only $10.');
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Shellac (OPI & Other Gels)'), NULL, 'Fingers (Natural Nails)', NULL, '35', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Shellac (OPI & Other Gels)'), NULL, 'Toes (Natural Nails)', NULL, '40', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Shellac (OPI & Other Gels)'), NULL, 'With Deluxe Manicure (recommended)', NULL, '45', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Shellac (OPI & Other Gels)'), NULL, 'With Deluxe Pedicure (recommended)', NULL, '65', 4);

-- 7. Eyelash Extensions, Brows & Lashes
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Eyelash Extensions, Brows & Lashes', 7, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Classic', 'Full Set', NULL, '100', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Classic', 'Infill (Week 1)', NULL, '35', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Classic', 'Infill (Week 2)', NULL, '65', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Classic', 'Infill (Week 3)', NULL, '80', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Russian Volume', 'Full Set', NULL, '130', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Russian Volume', 'Infill (Week 1)', NULL, '45', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Russian Volume', 'Infill (Week 2)', NULL, '80', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Russian Volume', 'Infill (Week 3)', NULL, '100', 8),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Other Services', 'Eyelash Extension Take-Off', NULL, '20', 9),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Other Services', 'Eyebrow Tint', NULL, '20', 10),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Eyelash Extensions, Brows & Lashes'), 'Other Services', 'Natural Eyelash Tint', NULL, '25', 11);

-- 8. Goddess Sun Kiss Tanning
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Goddess Sun Kiss Tanning', 8, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Goddess Sun Kiss Tanning'), NULL, 'Spray Tan (Face & Neck)', NULL, '25', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Goddess Sun Kiss Tanning'), NULL, 'Spray Tan (Half Body)', NULL, '35', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Goddess Sun Kiss Tanning'), NULL, 'Spray Tan / Organic Full Body', NULL, '45', 3);

-- 9. Silky Smooth Waxing
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Silky Smooth Waxing', 9, NULL);
INSERT INTO goddess_services (category_id, subcategory, subcategory_subtitle, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Eyebrows', NULL, '18', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Chin', NULL, '12', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Sides', NULL, '15', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Lip', NULL, '10', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Face Wax', NULL, '40', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Bikini Line', NULL, '25', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'G-String', NULL, '35', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', '½ Brazilian', NULL, '45', 8),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Brazilian', NULL, '50', 9),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Underarms', NULL, '20', 10),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Lower Half Arms', NULL, '25', 11),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Half Arms', NULL, '30', 12),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Arms', NULL, '35', 13),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Lower Half Legs', NULL, '30', 14),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Half Legs', NULL, '35', 15),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', '¾ Legs', NULL, '40', 16),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Legs', NULL, '55', 17),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Eyebrows', NULL, '20', 18),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Lower Half Arms', NULL, '30', 19),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Upper Half Arms', NULL, '35', 20),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Full Arms', NULL, '45', 21),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Shoulders', NULL, '35', 22),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Stomach', NULL, '30', 23),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Half Legs', NULL, '40', 24),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Full Legs', NULL, '65', 25),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Chest', NULL, '40', 26),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Back Wax', NULL, '50', 27);
