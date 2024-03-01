import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);
    const [fetchLoading, setfetchLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        fetch(url)
            .then((res)=> res.json())
            .then((json) => setData(json))
            .catch((error) => setError(error))
            .finally(()=> setfetchLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        var time = data?.datetime.substring(11,16);
        var formattedTime = time.replace(":", "");
        formattedTime = parseInt(formattedTime);
        var zone = data?.timezone.split("/");

        if (zone.length === 3) {
            var city = zone[2].replace("_", " ");
            
        } else {
            city = zone[1].replace("_", " ");
        }
        
        var day;

        if (formattedTime > 0 && formattedTime < 2000) {
            day = true;

        } else if (formattedTime > 2000) {
            day = false;
        }

    }
    
    return ( {time, city, day, fetchLoading, error} );
    
}

export {useFetch};