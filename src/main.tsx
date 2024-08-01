import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WeatherApp } from './WeatherApp'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import theme from './theme/theme.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <WeatherApp />
        </ThemeProvider>
  </React.StrictMode>,
)
