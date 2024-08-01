import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";

type Props = {
    children: string | JSX.Element | JSX.Element[]
};

export const AppLayout = ({children}:Props) => {
  return (
    <Box sx={{ display: 'flex'}}>
        <NavBar />

        <Box 
            component="main"
            sx={{ flexGrow: 1}}
        >   
            <Toolbar />
            
            {children}

        </Box>

    </Box>
  )
}
