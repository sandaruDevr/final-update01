import { useState, useEffect } from 'react';
import type { PricingTier } from '../../pricing/types';
import { getPricingTiers } from '../utils/pricing';

export function usePricingData(planId?: string) {
  const [plan, setPlan] = useState<PricingTier | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlan = async () => {
      try {
        const tiers = getPricingTiers();
        const selectedPlan = tiers.find(t => t.name.toLowerCase() === planId?.toLowerCase());
        setPlan(selectedPlan || null);
      } catch (err) {
        setError('Failed to load plan details');
      } finally {
        setLoading(false);
      }
    };

    loadPlan();
  }, [planId]);

  return { plan, loading, error };
}