import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate} } ) => {

    if(!confirmed){
        return "Loading ..."
    }
    return(
        <div className={styles.container}>
            <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
            <Grid container spacing={3} justify="center" > 
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator="," 
                                />    
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2}
                                separator="," 
                                />    
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2}
                                separator="," 
                                />    
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                </Grid>
                    
            </Grid>

        </div>
    )
} 

export default Cards;