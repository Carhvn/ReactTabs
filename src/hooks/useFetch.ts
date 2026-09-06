import { useEffect, useState } from "react";
export default function useFetch<T>(url:string, initialValue: T) { 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<T>(initialValue)
    

    useEffect(() => { 
        async function fetchData() {
           try { 
            setLoading(true);
            setError(null);
            const response = await fetch(url);

            if (!response.ok) { 
                throw new Error("Ошибка загрузки данных");
            }

            const fetchedData: T = await response.json()
            setData(fetchedData)
           } catch (error) { 
            if (error instanceof Error) { 
                setError(error.message) 
            } else { 
                setError("Ошибка загрузки данных")
            }

           } finally { 
            setLoading(false)
           }


        }
        
        fetchData()

    }, [url])

    return { 
        loading,
        error,
        data
    }
}