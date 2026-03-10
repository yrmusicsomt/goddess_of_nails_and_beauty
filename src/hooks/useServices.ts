import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { CategoryWithServices, ServiceCategory, Service } from '../types/database';

export function useServices(shopId: string) {
  const [categories, setCategories] = useState<CategoryWithServices[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data: cats, error: catErr } = await supabase
      .from('goddess_service_categories')
      .select('*')
      .eq('shop_id', shopId)
      .order('display_order');

    if (catErr) {
      setError(catErr.message);
      setLoading(false);
      return;
    }

    const categoryIds = (cats as ServiceCategory[]).map(c => c.id);

    if (categoryIds.length === 0) {
      setCategories([]);
      setLoading(false);
      return;
    }

    const { data: svcs, error: svcErr } = await supabase
      .from('goddess_services')
      .select('*')
      .in('category_id', categoryIds)
      .order('display_order');

    if (svcErr) {
      setError(svcErr.message);
      setLoading(false);
      return;
    }

    const grouped = (cats as ServiceCategory[]).map(cat => ({
      ...cat,
      services: (svcs as Service[]).filter(s => s.category_id === cat.id),
    }));

    setCategories(grouped);
    setLoading(false);
  }, [shopId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { categories, loading, error, refetch: fetchData };
}
