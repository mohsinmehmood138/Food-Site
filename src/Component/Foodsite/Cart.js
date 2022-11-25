import { Box, Typography } from "@mui/material";
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { grey } from '@mui/material/colors';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Cart.css"
import store from "./store";





const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export function Cart(props){

  const [open, setOpen] = React.useState(false);
  let[total,settotal]=React.useState();




  const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const toggleDrawer = () => () => {
        props.setOpencart(false);
      };

      let data=useSelector((item)=>{
        return item.myCart.cartarr
        })
        

        let totalprice=0;
        // settotal(totalprice)
        


      



    return <>
    <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
    <Box>
    <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.opencart}
        onClose={toggleDrawer(false)}
        onOpen={props.opencart}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
            

            className='cartnav'
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            // visibility: 'visible',
            right: 0,
            left: 0,
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            
          }}
        >
          <Puller />
          <Box>
          <Typography variant="h5" sx={{ p: 2, color: 'white' }}>Total  {total}</Typography>

          </Box>
          <Box sx={{ p: 1, color: 'text.secondary' }}>
          <Button sx={{background:"white",color:"red"}} >BUY</Button>
          <Button onClick={()=>{
            store.dispatch({
              type:"clearcart"
            })
          }} className='cartclear' sx={{background:"darkorange",color:"white" ,marginLeft:"15px" }}>CLEAR</Button>


          </Box>


          
        </StyledBox>
        
        <StyledBox
        className='cartbody'
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          {
            data.map((dish,index)=>{
              totalprice =totalprice + dish.price
              let itemprice=dish.qty*dish.price



                return <>

<Paper variant="outlined" square sx={{width:"98%",height:"100px",marginTop:"15px"}}>
<ul style={{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"space-around"}}>
  
  <li ><img src={dish.url} style={{width:"80px",height:"80px"}}></img></li>
  <li><Typography variant="h5" sx={{color:"red"}}>{dish.name}</Typography></li>
  <li><Fab size="small" sx={{background:"red",color:"white"}} aria-label="add"><RemoveIcon /></Fab> <span style={{fontSize:"25px"}}>  {dish.qty}  </span> <Fab onClick={()=>{
    store.dispatch({
      type:"increaseqty",
      payload:dish,
      index:index
    })
  }} size="small" sx={{background:"red",color:"white"}} aria-label="add"><AddIcon />
      </Fab></li>

  <li><Typography variant="h5" sx={{color:"red"}}>PRICE : {itemprice}</Typography></li>
  <li><Button onClick={()=>{
    store.dispatch({
      type:"remove",
      payload:index
    })
  }} sx={{background:"black",color:"white"}}>REMOVE</Button></li>
</ul>
</Paper>


                </>

            })
          }


          

         
        </StyledBox>
      </SwipeableDrawer>
    </Box>


    </>
}