-- ============================================
-- Price list update — Goddess Brochure, Oct 19 2026
-- Run this in the Supabase SQL Editor (Project: dmxroejtnqdvjzlkbrzu)
-- Safe to run once. Wrapped in a transaction so it's all-or-nothing.
-- ============================================

BEGIN;

-- ---------- 1. Manicure (9e925317-a132-41ff-b830-1ecd02a00764) ----------
UPDATE goddess_services SET price = '27', updated_at = now()
  WHERE category_id = '9e925317-a132-41ff-b830-1ecd02a00764' AND name = 'Clear Manicure';
UPDATE goddess_services SET price = '25', updated_at = now()
  WHERE category_id = '9e925317-a132-41ff-b830-1ecd02a00764' AND name = 'Buffing & Shaping (Fingers) with Polish';
UPDATE goddess_services SET price = '35', updated_at = now()
  WHERE category_id = '9e925317-a132-41ff-b830-1ecd02a00764' AND name = 'Buffing & Shaping (Toes) with Polish';

-- ---------- 2. Spa Pedicure (89282df3-7425-41cb-bc2d-fcf1d2b708ec) ----------
UPDATE goddess_services SET price = '45 / 50', updated_at = now()
  WHERE category_id = '89282df3-7425-41cb-bc2d-fcf1d2b708ec' AND name = 'Deluxe Pedicure';
UPDATE goddess_services SET price = '65', updated_at = now()
  WHERE category_id = '89282df3-7425-41cb-bc2d-fcf1d2b708ec' AND name = 'Goddess Pedicure';
UPDATE goddess_services SET price = '65', updated_at = now()
  WHERE category_id = '89282df3-7425-41cb-bc2d-fcf1d2b708ec' AND name = 'Brightening Pedicure';

-- ---------- 3. Manicure & Spa Pedicure Packages (bdd03b6e-076a-4384-bb5a-a9c15241ccfa) ----------
UPDATE goddess_services SET price = '70', updated_at = now()
  WHERE category_id = 'bdd03b6e-076a-4384-bb5a-a9c15241ccfa' AND name = 'Deluxe Manicure & Pedicure';

-- ---------- 4. Gel X, Acrylic & SNS -> Dual Form, Tap Gel, Gel X, Acrylic & SNS ----------
-- (171482a3-ef70-4c6e-990e-fb8e167fbffe) full restructure to match brochure

UPDATE goddess_service_categories
  SET name = 'Dual Form, Tap Gel, Gel X, Acrylic & SNS',
      notes = E'*Manicure with Acrylic, SNS, Gel X, Builder Gel/Biab, Bio Gel, Dual Form add $10\n*Chrome Powder extra from $20   *Magnetic Gel Cat Eyes extra from $20\n*French Classic extra from $15   *Deep Curl French extra from $25',
      updated_at = now()
  WHERE id = '171482a3-ef70-4c6e-990e-fb8e167fbffe';

DELETE FROM goddess_services WHERE category_id = '171482a3-ef70-4c6e-990e-fb8e167fbffe';

INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Dual Form / Tap Gel', 'Extend (XS/S)', 'Seamless gel extension with a sleek, lightweight finish', '85', 1),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Dual Form / Tap Gel', 'Extend (M)', NULL, '95', 2),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Dual Form / Tap Gel', 'Extend (L/XL)', NULL, '110', 3),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Dual Form / Tap Gel', 'Refill', NULL, '80', 4),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Gel X', 'XS / S / M', NULL, '75', 5),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Gel X', 'L / XL', NULL, '85', 6),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'SNS', 'Natural Nails', NULL, '60', 7),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'SNS', 'Extension', NULL, '65', 8),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'With Shellac (Fingers) — Full Set', NULL, '70', 9),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'With Shellac (Fingers) — Refill', NULL, '60', 10),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'With Lacquer (Fingers) — Full Set', NULL, '65', 11),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'With Lacquer (Fingers) — Refill', NULL, '55', 12),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'On Toes — Lacquer', NULL, '70', 13),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', 'Acrylic', 'On Toes — Gel', NULL, '80', 14),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'One Nail Repair (Natural Nails)', NULL, '10', 15),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'One Nail Repair (Extension)', NULL, '15', 16),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Removal Only (Acrylic / Biab / Hard Gel / SNS)', NULL, '30', 17),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Removal Only (Shellac)', NULL, '15', 18),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Removal for New Service', 'Acrylic / Biab / Hard Gel / SNS, Shellac, etc.', '10', 19),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Nail Art (Per Finger)', NULL, 'from 10', 20),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Nail Art (Full Set)', NULL, 'from 45', 21),
  ('171482a3-ef70-4c6e-990e-fb8e167fbffe', NULL, 'Cut Down (Shorten & Reshape)', NULL, '25', 22);

-- ---------- 5. Bio-Sculpture & EVO Oxygenating Gel (bf45ae9c-1b1b-49b7-9e67-00f810643fdb) ----------
-- Removing two line items not listed on the new brochure
DELETE FROM goddess_services
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb'
    AND name IN ('EVO Oxygenating Gel with Manicure', 'Bio-Gel with Deluxe Manicure');

UPDATE goddess_services SET price = '60', display_order = 1, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND name = 'EVO Oxygenating Gel Express';
UPDATE goddess_services SET price = '75', display_order = 2, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND name = 'Bio-Gel Express';
UPDATE goddess_services SET price = '110', display_order = 4, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND name = 'Bio-Gel Full Set (Tips)';
UPDATE goddess_services SET price = '130', display_order = 5, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND name = 'Bio-Gel Full Set (Sculpture)';
UPDATE goddess_services SET display_order = 6, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND subcategory = 'Builder Gel / BIAB' AND name = 'Natural Nails';
UPDATE goddess_services SET display_order = 8, updated_at = now()
  WHERE category_id = 'bf45ae9c-1b1b-49b7-9e67-00f810643fdb' AND subcategory = 'Builder Gel / BIAB' AND name = 'Extensions';

INSERT INTO goddess_services (category_id, subcategory, name, description, price, display_order) VALUES
  ('bf45ae9c-1b1b-49b7-9e67-00f810643fdb', NULL, 'Bio-Gel Refill', NULL, '70', 3),
  ('bf45ae9c-1b1b-49b7-9e67-00f810643fdb', 'Builder Gel / BIAB', 'Refill', NULL, '70', 7);

-- ---------- 6. Silky Smooth Waxing (60a3d5b0-6c82-4b4f-a12d-7faad7a40d02) ----------
-- Female Waxing
UPDATE goddess_services SET price = '20', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Eyebrows';
UPDATE goddess_services SET price = '15', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Chin';
UPDATE goddess_services SET price = '12', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Upper Lip';
UPDATE goddess_services SET price = '45', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Face Wax';
UPDATE goddess_services SET price = '55', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Full Brazilian';
UPDATE goddess_services SET name = 'Under Arms', price = '22', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Underarms';
UPDATE goddess_services SET price = '30', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Lower Half Arms';
UPDATE goddess_services SET price = '35', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Upper Half Arms';
UPDATE goddess_services SET price = '45', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Female Waxing' AND name = 'Full Arms';

-- Male Waxing
UPDATE goddess_services SET price = '25', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Eyebrows';
UPDATE goddess_services SET price = '35', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Lower Half Arms';
UPDATE goddess_services SET price = '40', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Upper Half Arms';
UPDATE goddess_services SET price = '55', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Full Arms';
UPDATE goddess_services SET price = '40', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Shoulders';
UPDATE goddess_services SET price = '35', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Stomach';
UPDATE goddess_services SET price = '45', updated_at = now()
  WHERE category_id = '60a3d5b0-6c82-4b4f-a12d-7faad7a40d02' AND subcategory = 'Male Waxing' AND name = 'Half Legs';

COMMIT;
