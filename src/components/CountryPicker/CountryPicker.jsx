import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from './../../api/index';

import styles from './CountryPicker.module.css';

const CountryPicker = ( {handleCountryChange} ) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries() );
        }

        fetchApi();
    }, [setFetchedCountries]);
    
    return(
        <div>
        <p className={styles.selecthint}>Choose a Country</p>
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Worldwide</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
        )
} 

export default CountryPicker;