import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {

    const [ dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    });

    const lineChart = (

        dailyData.length
        ? (
            <Line 
            data={{
                labels: dailyData.map(( { date }) => date),
                datasets: [ {
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Confirmed',
                    borderColor: '#0099e5',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: '#ff4c4c',
                    fill: true,
                }],
            }}
            />
        ) : null
    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
} 

export default Chart;