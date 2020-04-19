import axios from 'axios';
import { apiUrl } from './../config.json';

export const fetchData = async (country) => {

    let dynamicUrl = apiUrl;

    if(country){
        dynamicUrl = `${apiUrl}/countries/${country}`;
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}/daily`);
        
        const requiredData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
            
        }));

        return requiredData;
        
    } catch (error) {
        console.log(error);
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${apiUrl}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}
