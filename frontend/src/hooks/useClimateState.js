import { useState, useEffect } from 'react';
import { getCurrentClimate } from '../services/climateService';

/**
 * Custom hook to consume and manage current climate state
 */
export function useClimateState() {
  const [climate, setClimate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const data = await getCurrentClimate();
        if (isMounted) {
          setClimate(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load climate state');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { climate, loading, error };
}
