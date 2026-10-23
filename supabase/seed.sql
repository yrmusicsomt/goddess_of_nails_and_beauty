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
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Clear Manicure', 'Cuticle care, massage, shape, 100% Argan Oil', '27', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Deluxe Manicure', 'Cuticle care, massage, shape, 100% Argan Oil & polish', '30', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Manicure Scrub', 'Rejuvenate, invigorate or revitalise your manicure with one of our luscious blissful scrubs', '35', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Goddess Manicure', 'Cuticle care, deep exfoliation, massage, mask, 100% organic Argan Oil, shape & polish', '40', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Brightening Manicure', 'A scrub and mask that gently exfoliate dead skin cells, restoring moisture and promoting glowing, healthy skin', '40', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Buffing & Shaping (Fingers) with Polish', NULL, '25', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure'), NULL, 'Buffing & Shaping (Toes) with Polish', NULL, '35', 7);

-- 2. Spa Pedicure
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Spa Pedicure', 2, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Deluxe Pedicure', 'Cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, shape, with or without polish', '45 / 50', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Goddess Pedicure', 'Pedicure soak with essential oils, cuticle care, deep exfoliation, treatment for hardened and calloused skin, hot stone massage, mask, shape & polish', '65', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Spa Pedicure'), NULL, 'Brightening Pedicure', 'A brightening scrub gently exfoliates away dead skin cells, revealing new, clear skin while stimulating circulation. A brightening mask deeply hydrates, restoring moisture balance', '65', 3);

-- 3. Manicure & Spa Pedicure Packages
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Manicure & Spa Pedicure Packages', 3, E'Paraffin wax \u2013 fights dehydrated skin.\nAdd to any manicure: $10 | Pedicure: $15');
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Deluxe Manicure & Pedicure', NULL, '70', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Goddess Manicure & Pedicure', NULL, '90', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Brightening Manicure & Pedicure', NULL, '90', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Manicure & Spa Pedicure Packages'), NULL, 'Shellac Manicure & Pedicure', NULL, '105', 4);

-- 4. Dual Form, Tap Gel, Gel X, Acrylic & SNS
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Dual Form, Tap Gel, Gel X, Acrylic & SNS', 4, E'*Manicure with Acrylic, SNS, Gel X, Builder Gel/Biab, Bio Gel, Dual Form add $10\n*Chrome Powder extra from $20   *Magnetic Gel Cat Eyes extra from $20\n*French Classic extra from $15   *Deep Curl French extra from $25');
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Dual Form / Tap Gel', 'Extend (XS/S)', 'Seamless gel extension with a sleek, lightweight finish', '85', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Dual Form / Tap Gel', 'Extend (M)', NULL, '95', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Dual Form / Tap Gel', 'Extend (L/XL)', NULL, '110', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Dual Form / Tap Gel', 'Refill', NULL, '80', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Gel X', 'XS / S / M', NULL, '75', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Gel X', 'L / XL', NULL, '85', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'SNS', 'Natural Nails', NULL, '60', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'SNS', 'Extension', NULL, '65', 8),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'With Shellac (Fingers) — Full Set', NULL, '70', 9),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'With Shellac (Fingers) — Refill', NULL, '60', 10),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'With Lacquer (Fingers) — Full Set', NULL, '65', 11),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'With Lacquer (Fingers) — Refill', NULL, '55', 12),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'On Toes — Lacquer', NULL, '70', 13),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), 'Acrylic', 'On Toes — Gel', NULL, '80', 14),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'One Nail Repair (Natural Nails)', NULL, '10', 15),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'One Nail Repair (Extension)', NULL, '15', 16),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Removal Only (Acrylic / Biab / Hard Gel / SNS)', NULL, '30', 17),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Removal Only (Shellac)', NULL, '15', 18),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Removal for New Service', 'Acrylic / Biab / Hard Gel / SNS, Shellac, etc.', '10', 19),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Nail Art (Per Finger)', NULL, 'from 10', 20),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Nail Art (Full Set)', NULL, 'from 45', 21),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Dual Form, Tap Gel, Gel X, Acrylic & SNS'), NULL, 'Cut Down (Shorten & Reshape)', NULL, '25', 22);

-- 5. Bio-Sculpture & EVO Oxygenating Gel
INSERT INTO goddess_service_categories (shop_id, name, display_order, notes) VALUES ('goddess', 'Bio-Sculpture & EVO Oxygenating Gel', 5, NULL);
INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'EVO Oxygenating Gel Express', NULL, '60', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Express', NULL, '75', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Refill', NULL, '70', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Full Set (Tips)', NULL, '110', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), NULL, 'Bio-Gel Full Set (Sculpture)', NULL, '130', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), 'Builder Gel / BIAB', 'Natural Nails', NULL, '75', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Bio-Sculpture & EVO Oxygenating Gel'), 'Builder Gel / BIAB', 'Refill', NULL, '70', 7),
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
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Eyebrows', NULL, '20', 1),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Chin', NULL, '15', 2),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Sides', NULL, '15', 3),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Lip', NULL, '12', 4),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Face Wax', NULL, '45', 5),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Bikini Line', NULL, '25', 6),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'G-String', NULL, '35', 7),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', '½ Brazilian', NULL, '45', 8),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Brazilian', NULL, '55', 9),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Under Arms', NULL, '22', 10),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Lower Half Arms', NULL, '30', 11),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Half Arms', NULL, '35', 12),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Arms', NULL, '45', 13),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Lower Half Legs', NULL, '30', 14),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Upper Half Legs', NULL, '35', 15),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', '¾ Legs', NULL, '40', 16),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Female Waxing', 'Prices from', 'Full Legs', NULL, '55', 17),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Eyebrows', NULL, '25', 18),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Lower Half Arms', NULL, '35', 19),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Upper Half Arms', NULL, '40', 20),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Full Arms', NULL, '55', 21),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Shoulders', NULL, '40', 22),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Stomach', NULL, '35', 23),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Half Legs', NULL, '45', 24),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Full Legs', NULL, '65', 25),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Chest', NULL, '40', 26),
  ((SELECT id FROM goddess_service_categories WHERE shop_id='goddess' AND name='Silky Smooth Waxing'), 'Male Waxing', 'Prices from', 'Back Wax', NULL, '50', 27);
