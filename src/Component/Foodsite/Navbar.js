import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import LiquorSharpIcon from '@mui/icons-material/LiquorSharp';
import PersonPinCircleSharpIcon from '@mui/icons-material/PersonPinCircleSharp';
import DialpadSharpIcon from '@mui/icons-material/DialpadSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Button, Link } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Controller, useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Account } from './Account';
import { Search } from './Search';
import "./Navbar.css";
import { useSelector } from 'react-redux';


const drawerWidth = 270;
const navItems = ['Home', 'About', 'Contact'];


function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Navbar(props) {








  const { handleSubmit, reset, control } = useForm();
  const [account, setaccount] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

 



  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let userdata = useSelector((data) => {
    return data.adreducer.userarr
  })

  const onSubmit = (data) => {
    let usermilgya = userdata.find((user, index) => {
      if (user.name == data.name && user.password == data.password) {
        return true
      }
    })
    if (usermilgya) {
      props.setloginha(true)
      alert('welcome to profile')
    }
    else {
      alert('information error')
    }
  };





  const drawer = (


    <Box onClick={handleDrawerToggle} sx={{background:"white"}} className="drawer">
      <Box sx={{background:"white"}}>
      <img src="images\logo.png" className='drawerimg'></img>
      <Typography variant='h4' sx={{ marginTop: "10px", marginLeft: "5PX", color: "tomato" }} >FOODY</Typography>
      <Divider sx={{ backgroundColor: "white", width: "180px", margin: "20px auto" }} />

      <List>
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center" }}> FOODY <RestaurantSharpIcon sx={{ marginLeft: "24px" }} /></ListItem>
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center" }}>DRINKS <LiquorSharpIcon sx={{ marginLeft: "24px" }} /></ListItem>
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center" }}>LOCATION <PersonPinCircleSharpIcon sx={{ marginLeft: "10px" }} /></ListItem>
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center" }}>CONTACT <DialpadSharpIcon sx={{ marginLeft: "17px" }} /></ListItem>
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center", marginLeft: "8px" }}>ABOUT <HelpSharpIcon sx={{ marginLeft: "26px" }} /></ListItem>
        <Divider sx={{ backgroundColor: "white", width: "180px", margin: "20px auto" }} />
        <ListItem className="drawerlistitem" sx={{ justifyContent: "center" }}>Cart<Badge color="error" badgeContent={props.badges}><ShoppingCartSharpIcon sx={{ marginLeft: "17px" }} /></Badge></ListItem>
      </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }}>

      <HideOnScroll {...props}>
        <AppBar component="nav" elevation={0} >
          <Toolbar className="navbar" >


            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'block', md: 'none', lg: "none" } }}>
              <MenuIcon />
            </IconButton>


            <Box className="navbarimgbox" sx={{ display: { xs: 'none', sm: "flex", md: "flex" }, }}>
              <img src="images\logo.png" style={{ width: "75px", margin: "5px auto" }} />
              <Typography variant='h4' sx={{ margin: " 21px 10px", color: "white", display: { sm: "block", md: "block", lg: "block" } }}>FOODY</Typography>
            </Box>




            <Box sx={{ display: { xs: 'none', sm: 'none', md: "block" } }}>
              <List sx={{ display: "flex", width: "300px", margin: "10px auto" }}>
                <ListItem className="drawerlistitem">HOME</ListItem>
                <ListItem className="drawerlistitem">MENU</ListItem>
                <ListItem className="drawerlistitem">SPECIAL</ListItem>
                <ListItem className="drawerlistitem">DEALS</ListItem>
                <ListItem className="drawerlistitem">CONTACT</ListItem>
              </List>
            </Box>


            <Typography variant='h4' sx={{ margin: "21px auto", width: "300px", justifyContent: "end", display: { md: "none", lg: "none", sm: "none", xs: "flex" } }}>FOODY</Typography>


            <Box className="navright">
              <Badge badgeContent={props.badges} sx={{ display: { xs: "none", sm: "block" }, marginRight: "30px", color: "white" }}> <ShoppingCartSharpIcon
                onClick={() => {
                  if (props.loginha) {

                    props.setOpencart(true)
                  }

                  else {
                    setaccount(true)
                  }
                }
                }
                sx={{ display: { xs: "none", sm: 'inline-block', color: "white" } }}
              >
              </ShoppingCartSharpIcon></Badge>
              <ContentPasteSearchIcon className='navrighticons' onClick={handleToggle} />
              <Tooltip title="Login / signup">
                <AccountCircleSharpIcon className='navrighticons' fontSize="large" onClick={() => {
                   
                  setaccount(true)
                }} />
              </Tooltip>
      
                
            </Box>


          </Toolbar>
        </AppBar>
      </HideOnScroll>


      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{

            display: { xs: 'block', sm: 'block', md: 'block', lg: "block" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />

      <Box>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >

          <Button onClick={handleClose} sx={{ color: "white", position: "absolute", top: "-25px", right: "-20px", }}><CloseIcon sx={{ height: "125px", width: "140px" }} /></Button>
          <Box sx={{ height: "250px", position: "fixed", top: "200px" }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 320, height: '65px', borderRadius: "10px" }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder=" FOODY MOOD................"
                inputProps={{ 'aria-label': 'Search Your FOODY Mood................' }}
                onSubmit={(e) => { console.log(e.target.value); }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              </IconButton>

            </Paper>
          </Box>
        </Backdrop>
      </Box>

      <Box>
        <SwipeableDrawer
          sx={{ width: "200px", height: '400px', }}
          open={account}


        >
          <Box
            sx={{ overflow: 'scroll', display: 'flex', alignItems: "center", flexDirection: "column", width: 330, top: 80, right: 0, position: "fixed", background: "white", height: '100vh', borderRadius: '10px' }}
            role="presentation"


          >
            <Box sx={{ width: "120px", marginTop: '20px' }}>

              <Button sx={{ color: "black", position: "absolute", top: "10px", right: "10px" }} onClick={() => {
                setaccount(false)
              }}><CloseIcon sx={{ height: "40px", width: "40px" }} /></Button>


              <img src='images\logo.png' width='100px' style={{ marginLeft: "16px" }}></img>
              <Typography sx={{ marginTop: "15px", marginLeft: "16px", color: 'red' }} variant='h5'>FOODY.....</Typography>
              <Divider sx={{ color: "black", width: "210px", margin: "15px -38px" }} />
              <Box sx={{ width: "30px" }}>
                <form style={{ marginLeft: "-70px", marginTop: "30px" }} onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput

                        {...field}
                        type='text'
                        sx={{ width: '280px', height: "40px" }}
                        placeholder='USER-NAME' startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>} />)} />
                  <br />
                  <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (

                      <OutlinedInput
                        {...field}
                        type='password'
                        sx={{ marginTop: "22px", width: '280px', height: "40px" }}
                        placeholder='PASSWORD' startAdornment={
                          <InputAdornment position="start">
                            <VpnKeyIcon />
                          </InputAdornment>} />)} />
                  <Box>

                    <Button variant="contained" size="large"
                      sx={{ position: "absolute", right: "18px", margin: "23px 2px" }}
                      type='submit'
                    >
                      LOGIN
                    </Button>
                  </Box>
                </form >
              </Box>
            </Box>

            <Typography sx={{ marginTop: "71px", color: 'red' }} variant='h6' onClick={() => { props.setopensignup(true) }} className='createaccount'>Create Account</Typography>
            <Button variant="contained" startIcon={<WhatsAppIcon />} sx={{ backgroundColor: "green", marginTop: "10px" }}>
              LOGIN WITH WhatsApp
            </Button>
            <Button variant="contained" startIcon={<FacebookIcon />} sx={{ marginTop: "10px" }}>
              LOGIN WITH FACEBOOK
            </Button>
            <Button variant="contained" startIcon={<GoogleIcon />} sx={{ backgroundColor: "red", marginTop: "10px", width: "228.25px" }}>
              LOGIN WITH GOOGLE
            </Button>
          </Box>

        </SwipeableDrawer>
      </Box>
    </Box>
  );
}

























