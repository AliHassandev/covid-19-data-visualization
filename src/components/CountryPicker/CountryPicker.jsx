import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from './../../api/index';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries() );
        }

        fetchApi();
    }, [setFetchedCountries]);
    
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        )
} 

export default CountryPicker;