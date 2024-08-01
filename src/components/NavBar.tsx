import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { Menu } from "@mui/icons-material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;



export const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Code Challenge
        </Typography>
        <Divider />
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar
            position="fixed"
            component="nav"
            sx={{ 

            }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Code Challenge
            </Typography>
            <Divider />
           
          </Toolbar>
        </AppBar>
        <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Box>
    );
}