import React, { useState, useEffect } from 'react';
import {fetchDailyData } from '../../api';
const Chart = () => {

    const [ dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    });

    return(
        <h2>Chart</h2>
    )
} 

export default Chart;