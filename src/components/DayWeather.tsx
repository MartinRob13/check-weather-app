import { Box, Typography } from '@mui/material'
import React from 'react'

export const DayWeather = (dayData:any) => {
   
   let dataByDay = Object.keys(dayData); 

  return (
    <>
        {
            dayData && dataByDay.map(
                (day, index) => (
                    <Box component="div" key={index} 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            background: '#54c6de',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography>{dayData[day].weather}</Typography>
                        <img src={`http://openweathermap.org/img/w/${dayData[day].icon}.png`} alt="icon" width={70} />
                        <Typography>{dayData[day].dt_display}</Typography>
                    </Box>
                )
            )
        }
    </>
  )
}
