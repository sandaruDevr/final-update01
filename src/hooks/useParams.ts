import { useMemo } from 'react';

export function useParams() {
  const params = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
  }, []);

  return params;
}