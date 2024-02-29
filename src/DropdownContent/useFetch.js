import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(url)
            .then((res)=> res.json())
            .then((data) => setData(data))
            .finally(()=> setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
    return ( {data, loading} );
}

export {useFetch};