import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api/index';



class App extends React.Component {

    async componentDidMount(){
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;