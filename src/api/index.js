import axios from 'axios';
import { apiUrl } from './../config.json';

export const fetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);

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
        
    }
};

