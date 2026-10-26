import { useEffect, useState, useCallback, useRef } from 'react';

const API_URL = import.meta.env.VITE_API_URL;
const POLL_INTERVAL = 30_000;

export function useScores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const controller = new AbortController();

    async function load(showLoading = true) {
      if (showLoading) setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid data format');

        const sorted = data
          .map((d) => ({
            date: String(d.date ?? ''),
            name: String(d.name ?? ''),
            score: Number(d.score) || 0,
          }))
          .sort((a, b) => b.score - a.score)
          .map((d, i) => ({ ...d, rank: i + 1 }));

        setScores(sorted);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load(true);
    isFirstLoad.current = false;

    const timer = setInterval(() => {
      if (!controller.signal.aborted) load(false);
    }, POLL_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, [reloadKey]);

  const refetch = useCallback(() => setReloadKey((k) => k + 1), []);
  return { scores, loading, error, refetch };
}
