import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
    }, [url])

    return ({ blogs, loading })
}

export default useFetch;