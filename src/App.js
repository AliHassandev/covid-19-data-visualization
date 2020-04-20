import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api/index';



class App extends React.Component {

    state = {
        data: {},
        country: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);    
        this.setState( { data: fetchedData, country: country } );

    }

    render() {

        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <h1>COVID-19 Data Visualization</h1>
                <CountryPicker
                    handleCountryChange={this.handleCountryChange} 
                    />
                <Cards
                    data={data} 
                    />
                <Chart data={data} country={country} />
                <p>By: <a href="https://github.com/AliHassandev" target="_blank">Ali Hassan</a></p>
            </div>
        )
    }
}

export default App;