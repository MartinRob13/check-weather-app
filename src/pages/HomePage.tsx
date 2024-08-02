import { Autocomplete, Button, Container, FormControl, Grid, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { WeatherGrid } from "../components/WeatherGrid";

export const HomePage = () => {

  const [city, setCity] = useState('');
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [placeSelected, setPlaceSelected] = useState({} || null)

  const handleChange = (e) => {
    setPlaceSelected(null);
    setPlaces([]);
    setCity(e.target.value);
  }

  const onSearchPlaces = async() => {

    await fetch('https://search.reservamos.mx/api/v2/places?q='+city)
      .then(data => data.json())
      .then(json => {
        setPlaces(json)
      })
      .finally();
  }

  const handleDestinyChange = () => {
    
    if(placeSelected?.lat != undefined){
      
      fecthWeatherPlace()
    }
  }

  const fecthWeatherPlace = async() => {

    await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${import.meta.env.VITE_openweather_key}&lat=${placeSelected?.lat}&lon=${placeSelected?.long}`)
    .then(data => data.json())
    .then(json => {
      
      let result = [];
      result.push(json);
      handleGetWeatherData(result);
    })
    .catch(error => console.error(error))
    .finally();

    
    
  }

  const handleGetWeatherData = (result) =>{
    
    setWeatherData(result);

  }
  
  return (
    <>
      <Container maxWidth="md">
        <Grid container >
          <Grid item xs={12}>
            <Typography variant="h2" component="h2"> Welcome to our website!</Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid container  sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' , width: '100%' }}>
        <Grid item mt={8} xs={6} sx={{width: '100%'}}>
          <Typography>Write here the place where you  want to travel</Typography>
            <TextField id="place-input" label="Place:" value={city} variant="outlined" onChange={handleChange} fullWidth />
            <Button type="submit" disabled={city === ''}  variant="contained" onClick={onSearchPlaces} >Search places</Button>
        </Grid>
  
      {
        places.length > 0 && 
          
            <Grid item mt={8} xs={6} sx={{width: '100%'}}>
              <Typography>Select your destiny in the options to check the weather</Typography>
              <Autocomplete
                disablePortal
                sx={{ width: "100%" }}
                id="combo-box-places"
                options={places}
                onChange={(event: any, newValue: object | null) => {
                  setPlaceSelected(newValue); 
                  handleDestinyChange();
                }}
                onInputChange={(event, newInputValue) => {
                  setPlaceSelected(newInputValue); 
                  handleDestinyChange();
                }}
                getOptionLabel={(option) => option.display + ' / ' + option.state + ' / ' + option.country }
                renderOption={(props, option) => {
                  return (
                    <li {...props} key={option.id}>
                      {option.display + ' / ' + option.state + ' / ' + option.country}
                    </li>
                  );
                }}
                renderInput={(params) => <TextField {...params} label="Place:" fullWidth />
              }
              />
            </Grid>
      }

           { placeSelected && weatherData && <WeatherGrid {...weatherData} /> }

      </Grid>

      
    </>
  )
}
