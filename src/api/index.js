import axios from 'axios';
import { apiUrl } from './../config.json';

export const fetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
}

