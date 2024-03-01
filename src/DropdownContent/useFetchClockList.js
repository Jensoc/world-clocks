import { useEffect, useState } from 'react';

function useFetchClockList() {

    const [data, setData] = useState(null);
    let url = "https://worldtimeapi.org/api/timezone/";

    useEffect(() =>{
        fetch(url)
            .then((res)=> res.json())
            .then((json) => setData(json))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    for (let i in data) {
        if  (!(i.includes("Africa") || i.includes("America") || i.includes("Antartica") || i.includes("Asia") || i.includes("Atlantic") || i.includes("Australia") || i.includes("Europe") || i.includes("Pacific") || i.includes("Indian"))) {
            data.pop(i);

            
        }
    }


    return (data);
}

export {useFetchClockList};