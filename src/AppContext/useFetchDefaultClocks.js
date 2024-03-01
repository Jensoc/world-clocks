
import { useFetch } from '../DropdownContent/useFetch';

async function useFetchDefaultClocks() {

    const defaultClocks = [];

    defaultClocks.push(
        useFetch("http://worldtimeapi.org/api/timezone/America/Buenos_Aires"),
        useFetch("http://worldtimeapi.org/api/timezone/Europe/London"),
        useFetch("http://worldtimeapi.org/api/timezone/America/Caracas"),
        useFetch("http://worldtimeapi.org/api/timezone/Europe/London"),
        useFetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo"),
    );

    return ({defaultClocks});

}

export {useFetchDefaultClocks};