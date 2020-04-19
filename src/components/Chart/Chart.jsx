import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data: { confirmed, recovered, deaths }, country}) => {

    const [ dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    }, []);

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

    const barChart = (
        confirmed
        ? (
            <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['#0099e5', '#34bf49', '#ff4c4c'],
                    data: [ confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }} />
        ): null
    );

    return(
        <div className={styles.container}>
            {country? barChart: lineChart}
        </div>
    )
} 

export default Chart;