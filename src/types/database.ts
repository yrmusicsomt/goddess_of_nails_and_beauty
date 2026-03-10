export interface ServiceCategory {
  id: string;
  shop_id: string;
  name: string;
  display_order: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  category_id: string;
  subcategory: string | null;
  subcategory_subtitle: string | null;
  name: string;
  description: string | null;
  price: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface CategoryWithServices extends ServiceCategory {
  services: Service[];
}
