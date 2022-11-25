import { Card, Grid, Typography, CardMedia, Button } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Backdrop from '@mui/material/Backdrop';
import Fab from '@mui/material/Fab';
import "./Menu.css"
import { useSelector } from "react-redux";
import { Divider } from "antd";





export function Menu() {

  const [open, setOpen] = React.useState(false);

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },

  });




  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };



  let data = useSelector((item) => {
    return item.MenuData.myarr
  })
 
 





  return <Box className="menu">
    <Typography variant="h3" sx={{ color: "white", textAlign: "center" }}>Menu Category</Typography>

    
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1200: {

          slidesPerView: 6,
        },
        1100: {

          slidesPerView: 5,
        },
        900: {

          slidesPerView: 5,
        },
        750: {

          slidesPerView: 4,
        },
        600: {

          slidesPerView: 3,
        },
        500: {

          slidesPerView: 2,
        },
        420: {

          slidesPerView: 2,
        },
        320: {

          slidesPerView: 2,
        },
      }}
      slidesPerView={6}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Pagination, Navigation,Autoplay]}
      className="mymenuSwiper"
    >

      { 
        data.map((menuitem, index) => {
            
          if(menuitem.id=='menucarditem'){
          return <SwiperSlide className="menuSwiperSlide" key={index} >
            <Card variant="outlined" className="menucard" sx={{ borderRadius: "20px" }}>

              <img
                src={require(`${menuitem.img}`)}
                alt=''
                loading="lazy"
                style={{ width: "156px", height: "137px", margin: "28px auto" }}
              />

              <Box className="menucardoverlay">
                <Box className="text">{menuitem.dishname}
                  <Button onClick={handleToggle} sx={{ backgroundColor: "red", color: "white", marginTop: "20px", opacity: 1 }}><ArrowRightAltIcon sx={{ mr: 1 }} /></Button>
                </Box>
              </Box>

            </Card>
          </SwiperSlide>




}
        })
      }
    </Swiper>
    <Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

        className="menubackdrop"
      >
        <Box sx={{ width: "98%", height: "auto" }}>

          <Button onClick={handleClose} sx={{ color: "white", position: "absolute", top: "-9px", right: "5px", }}><CloseIcon sx={{ height: "125px", width: "140px" }} /></Button>
          <Typography variant="h2" sx={{ textAlign: 'center', textShadow: " 5px 6px 9px red", marginTop: "80px" }}>ENJOY YOUR PIZZA</Typography>
          <Grid container spacing={2} className='menugrid'>
            <Grid item lg={4} md={6} className='menugriditem'>

              <Card className="menubackdropcard">

                <img
                  src='firstpizza.png'
                  alt=''
                  loading="lazy"
                  style={{ width: "156px", height: "137px", }}
                />
                <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

                <Box className="menucarditemoverlay">
                  <Box className="menucarditemtext">
                    <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
                    <hr />
                    <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
                      <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
                      <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
                    </Box>

                    <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                      <StyledRating
                        defaultValue={3}
                        precision={0.5} readOnly
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon />}
                      />

                      <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
                        <AddShoppingCartIcon sx={{ color: "white" }} />
                      </Fab>
                    </Box>

                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>
<Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>
<Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>
<Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>
<Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>
<Grid item lg={4} md={6} className='menugriditem'>

<Card className="menubackdropcard">

  <img
    src='firstpizza.png'
    alt=''
    loading="lazy"
    style={{ width: "156px", height: "137px", }}
  />
  <Typography sx={{ fontFamily: "emoji", marginTop: '20px' }} variant="h4">Feejeeta chicken pizza</Typography>

  <Box className="menucarditemoverlay">
    <Box className="menucarditemtext">
      <Typography variant="h4" sx={{ marginTop: "10px" }}>Feejeeta chicken pizza</Typography>
      <hr />
      <Box sx={{ display: 'flex', alignItems: "center", margin: "10px 10px" }}>
        <AccessTimeIcon sx={{ marginLeft: "50px" }} /> : 20 mint
        <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : 2 Persons
      </Box>

      <Typography sx={{ margin: "15px auto" }} variant="h5">PRICE : 1000</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <StyledRating
          defaultValue={3}
          precision={0.5} readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon />}
        />

        <Fab size="medium" sx={{ background: "rgb(245, 0, 87)" }} aria-label="add">
          <AddShoppingCartIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

    </Box>
  </Box>
</Card>
</Grid>

          </Grid>
        </Box>
      </Backdrop>
    </Box>

  </Box>
}











