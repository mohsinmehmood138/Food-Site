import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectCoverflow } from "swiper";
import './Chef.css'
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSelector } from "react-redux";

export function Chef() {

  let data = useSelector((item) => {
    return item.MenuData.myarr
  })





  return <>


    <Box className='chef'>
      <Typography variant="h3" sx={{ color: "white", textAlign: 'center' }}>OUR STAFF</Typography>

      <Typography variant="h6" sx={{ fontVariantCaps: "small-caps", color: "white", textAlign: "center", margin: "20px 20px" }}>
        Fast food is popular because it's convenient, it's cheap, and it tastes good.
        The idea behind fast food is great - people want convenience..
        Society is fast - fast food, fast cars, fast everything...
        By eating many fruits and vegetables in place of fast food and junk food, people could avoid obesity.
      </Typography>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}

        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swipermySwiperchef "

      >
        {
          data.map((staff, index) => {
            if(staff.id=="staff"){

            

            return <SwiperSlide className="swiperslidechef" key={index}>
              <Avatar
                alt="Remy Sharp"

                sx={{ width: 120, height: 120, objectFit: 'cover', margin: '20px auto' }}
              >
                <img src={require(`${staff.img}`)} style={{ objectFit: 'contain' }}></img>
              </Avatar>
              <Typography variant='h5'>{staff.name}</Typography>
              <Typography sx={{ margin: "3px" }}>{staff.rank}</Typography>
              <Typography sx={{ fontVariantCaps: "small-caps", margin: "8px 10px !important", }}>{staff.desc}</Typography>
              <Box className='stafficonbox'>
                <LinkedInIcon className='stafficon' />
                <FacebookIcon className='stafficon' />
                <TwitterIcon className='stafficon' />
              </Box>
            </SwiperSlide>
}

})
}
      </Swiper>
    </Box>

  </>
}

