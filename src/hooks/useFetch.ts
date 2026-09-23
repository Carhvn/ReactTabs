import { useEffect, useState } from "react";
export default function useFetch<T>(url: string, initialValue: T) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const fetchedData: T = await response.json();
        if (!controller.signal.aborted) {
          setData(fetchedData);
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ошибка загрузки данных");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    loading,
    error,
    data,
  };
}
