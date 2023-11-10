import { useEffect, useState } from 'react';
import { token } from '../config.js';

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message)
                }

                setData(result.data);
                setLoading(false);

            } catch (e) {

                setLoading(false);
                // console.log(e.message);
                setError(e.message);

            }
        }

        fetchData();


    }, [url])


    return {
        data, loading, error
    }
}

export default useFetchData;