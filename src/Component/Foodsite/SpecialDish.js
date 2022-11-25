import { Typography } from "@mui/material"
import { Box } from "@mui/system";
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./SpecialDish.css"
export function Special() {

  let data = useSelector((item) => {
    return item.MenuData.myarr
  })






  return <>
    <Box className='specialdish'>
      <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">Special Dishes</Typography>
      <Typography variant="h5" sx={{ width: "78%", textAlign: "center", margin: "30px auto", fontVariantCaps: "small-caps", color: "white" }}>
        You’ll find the most comprehensive recipes written anywhere, right here!
        Get insider knowledge on recipes, food culture, food history, ingredients, drinks
        and so much more. Exotic and otherwise!.........
      </Typography>
      <Fade left>



        < Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1200: {

              slidesPerView: 4,
            },
            1100: {

              slidesPerView: 4,
            },
            900: {

              slidesPerView: 3,
            },
            750: {

              slidesPerView: 3,
            },
            600: {

              slidesPerView: 2,
            },
            550: {

              slidesPerView: 2,
            },

            480: {

              slidesPerView: 2,
            },
            320: {

              slidesPerView: 1,
            },
          }}
          spaceBetween={10}
          slidesPerGroup={1}
          slidesPerView={4}
          loop={true}
          // loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation,Autoplay]}
          className='specialswiper'

        >
          {
            data.map((specialdish,index)=>{
                if(specialdish.id=='specialdish'){
                  return <SwiperSlide className="swiper-slidespecial " key={index}>

                  <img src={require(`${specialdish.img}`)} style={{ width: '200px', height: '200px', margin: "20px auto" }} ></img>
                  <Typography variant="h4">{specialdish.dishname} </Typography>
                  <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "14px 13px" }}>
                    <AccessTimeIcon  /> : {specialdish.time}
                    <PeopleAltIcon sx={{ marginLeft: "50px" }} />   : {specialdish.peole}
                  </Box>
      
      
                  <Typography variant="h5">PRICE : {specialdish.price}</Typography>
                  <Button sx={{ background: "red", color: "white", margin: "10px auto" }}> <AddShoppingCartIcon sx={{ color: "white" }} /></Button><br />
      
                  <Rating name="read-only" defaultValue={specialdish.rating} readOnly />
      
                </SwiperSlide>
                }
            })
          }

          


        </Swiper>

      </Fade>
    </Box>
  </>
}