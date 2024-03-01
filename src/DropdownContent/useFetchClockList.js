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

    function dataToObject (arrA) {
        const arrB = [];
        arrA.forEach((country, index) => {
          arrB.push({
            id: index + 1,
            country: country,
          });
        });
        return arrB;
    }

    if (data) {
        var newData = dataToObject(data);
    }

    return(
        newData?.filter((i)=>(
            i.country.includes("Africa") || i.country.includes("America") || i.country.includes("Antartica") || i.country.includes("Asia") || i.country.includes("Atlantic") || i.country.includes("Australia") || i.country.includes("Europe") || i.country.includes("Pacific") || i.country.includes("Indian")
        ))
    )

}

export {useFetchClockList};
