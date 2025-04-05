import { useEffect, useRef, useState } from 'react';

export function useFetch<T = unknown>(
  url: RequestInfo | URL,
  options?: RequestInit
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, { signal, ...optionsRef.current });
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
