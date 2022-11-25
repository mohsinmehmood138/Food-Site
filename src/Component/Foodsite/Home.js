import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, } from "@mui/system";
import { Typography } from "@mui/material";
import Fab from '@mui/material/Fab';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "swiper/css";
import "swiper/css/pagination";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css"
import { Button } from "antd";



export function Home() {

  const tost=()=> toast.success("Thanks For signup");
    const tost1=()=> toast.error("Already Register");

  return <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide >
        <Box  sx={{ display:{sm:'block',md:'flex'}, width: "100%", height: "560px" }}  >
          <Box   className="homedoc">
            <Typography variant="h3" sx={{ textAlign: "initial" }}>
              ONE-STOP
            </Typography>
            <Typography variant="h1" sx={{ display:{xs:"none",sm:"none",md:"block"} ,textAlign: "center", color:"#ff5f5f" }}  >
            <span style={{color:"white"}}>"</span>DELICIOUS<span style={{color:"white"}}>"</span>
            </Typography>
            <Typography variant="h2" sx={{display:{xs:"none",sm:"block",md:"none"} , textAlign: "center", color: "red" }} >
              DELICIOUS
            </Typography>
            <Typography variant="h3" sx={{display:{xs:"block",sm:"none",md:"none"} , textAlign: "center", color: "red" }} >
              DELICIOUS
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "end", display:{xs:"none",sm:"block",md:"block"} }}>
              FOODS PLACE ..
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "end",display:{xs:"block",sm:"none",md:"none"}  }}>
              FOODS PLACE ..
            </Typography>
            <Typography sx={{ marginTop: "30px", fontVariantCaps: "small-caps" }}>
              Food is the necessity of life.
              It provides nutrition, sustenance and growth to human body.
              Food can be classified into cereals, pulses, nuts and oilseeds,
              vegetable, fruits, milk and milk products and flesh food.

            </Typography>
            <Box  className="homebtn">

            <Fab onClick={(e)=>{
              tost1();
            }} variant="extended" sx={{backgroundColor:"white",color:"red"}} aria-label="add">
            <ArrowRightAltIcon sx={{mr:1}}/>
              Order Now
            </Fab>
            <ToastContainer />
            </Box>



          </Box>
          <Box sx={{margin:"0 auto", display:{sm:"none",md:'block',xs:"none"} }}>
            <img src="images\one (1).png"></img>

          </Box>

        </Box>
      </SwiperSlide>
      <SwiperSlide >
        vertical 2
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          direction={"vertical"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide> Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>

        </Swiper>
      </SwiperSlide>
      <SwiperSlide>vertical 3</SwiperSlide>

    </Swiper>

  </>
}