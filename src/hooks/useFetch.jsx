// Custom Hook

import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../config/api";
// import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(endpoint)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;