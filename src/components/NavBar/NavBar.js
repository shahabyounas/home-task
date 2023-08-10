import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';




export default function SearchAppBar() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#0a108c'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', fontWeight: 'bold'} }}
          >
            SpaceX Missions
          </Typography>
          
        </Toolbar>
      </AppBar>
  );
}