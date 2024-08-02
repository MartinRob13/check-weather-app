
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DayWeather } from './DayWeather.tsx';

export const WeatherGrid = (weatherData:any) => {

    
    const [cleanData, setCleanData] = useState([]);

    useEffect(() => {
      
        let weekWeather = [];
        let datesByDay = [];
        let counter = 0; 
        let today = (new Date()).getUTCDay();      
        
        weatherData[0]?.cod === '200' && weatherData[0].list.map(data => {
            
            if(today != new Date(data.dt * 1000).getUTCDay()){

                if(counter < 7){
                    datesByDay.push({
                        dt_txt: data.dt_txt, 
                        dt_display: new Date(data.dt * 1000).toUTCString(), 
                        dt_title: new Date(data.dt * 1000).toDateString(),
                        dt: data.dt, 
                        weather: data.weather[0].main,
                        icon: data.weather[0].icon
                    });
                    counter++;
        
                }
                else{
                    weekWeather.push(datesByDay);
                    datesByDay = [];
                    counter=0;
                }
            }
            
            
    
        });
        
        setCleanData(weekWeather);
    }, [weatherData])
    


  return (
    <Grid container>

        {
            cleanData && cleanData.map( (data, id) => (
                <Grid key={id} item sx={{width: '100%', display:'flex', justifyContent: 'space-around', gap: '10px', margin: '20px 0', flexDirection: 'column'}}>
                     <Box sx={{width: '100%'}}><Typography variant="h5">{data[3]?.dt_title}</Typography></Box>
                     <Box sx={{width: '100%', display:'flex', justifyContent: 'space-around', gap: '10px'}}> <DayWeather {...data} /></Box>
                </Grid>
            ))
        }
    
     
    </Grid>
  )
}
