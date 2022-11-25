import { Box, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import store from "./store";
import img1 from './images/solodeal.png';
import img2 from './images/duo1.png';
import img3 from './images/squaddeal.jpg';
import img4 from './images/familydeal.jpg';
import './Deal.css';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};






export function Deal(props) {

  const [open, setOpen] = React.useState(false);
  const [dealindex, setdealindex] = React.useState();




  const handleClose = () => {
    setOpen(false);
  };



  const images = [
    {
      url: img1,
      title: 'SOLO',
      width: '24%',

    },
    {
      url: img2,
      title: 'DUO',
      width: '24%',

    },
    {
      url: img3,
      title: 'SQUAD',
      width: '24%',

    },
    {
      url: img4,
      title: 'FAMILY',
      width: '24%',

    },
  ];

  const deal = [
    {
      name: "SOLO DEAL",
      url: img1,
      typ1: '1 X ZINGAR BURGER',
      typ2: "1 X CHIPS PACK",
      typ3: "1 X REGULAR COLD DRINK",
      price: 300
      ,
      qty: 4
    },
    {
      name: "DUO DEAL",
      url: img2,
      typ1: '2 X ZINGAR BURGER & CHIPS PACK',
      typ2: "4 X HOT WINGS",
      typ3: "2 X REGULAR COLD DRINK",
      price: 600
      ,
      qty: 1
    },
    {
      name: "SQUAD DEAL",
      url: img3,
      typ1: '2 X LARGE PIZZA',
      typ2: "1 X CHIPS PACK",
      typ3: " 1 X 2.15LTR COLD DRINK",
      price: 1300,
      qty: 1
    },
    {
      name: "FAMILY DEAL",
      url: img4,
      typ1: '4 X LARGE PIZZA',
      typ2: "4 X ZINGAR BURGER",
      typ3: "3 X 2.15LTR COLD DRINK",
      price: 2000,
      qty: 1
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));


  return <>

    <Box className="deal">
      <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">
        Discount Deal
      </Typography>

      <Typography variant="h6" sx={{ fontVariantCaps: "small-caps", color: "white", textAlign: "center", margin: "20px 20px" }}>
        Fast food is popular because it's convenient, it's cheap, and it tastes good.
        The idea behind fast food is great - people want convenience..
        Society is fast - fast food, fast cars, fast everything...
        By eating many fruits and vegetables in place of fast food and junk food, people could avoid obesity.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-between", marginTop: "10px" }}>
        {images.map((image, index) => (
          <ImageButton
            focusRipple
            onClick={() => {
              setOpen(true);
              setdealindex(index)

            }}
            key={image.title}
            className='dealitem'
            style={{
              width: image.width,
              height: "300px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <img src={image.url} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}></img>
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                {/* <ImageMarked className="MuiImageMarked-root" /> */}
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>



      <Box>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{ minWidth: "350px !important", color: "darkorange" }}
        >
          {
            deal.map((item, index) => {
              if (index == dealindex) {
                return <>
                  <BootstrapDialogTitle variant="h5" id="customized-dialog-title" onClose={handleClose} key={index}>
                    {item.name}
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Box sx={{ display: "flex" }} className='dealdialog'>
                      <Box>
                        <Typography gutterBottom sx={{ minWidth: "350px !important" }}>
                          {item.typ1}<br />
                          {item.typ2}<br />
                          {item.typ3}<br />
                        </Typography>
                      </Box>
                      <Box>
                        <img src={item.url} style={{ width: '200px', height: "200px" }}></img>
                      </Box>

                    </Box>
                  </DialogContent>
                  <DialogActions sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" sx={{ fontVariantCaps: "small-caps" }}>PRICE :{item.price}</Typography>
                    <Button autoFocus sx={{ background: "red", color: "white" }} onClick={() => {
                      store.dispatch({
                        type: "deal-item",
                        payload: item,
                        index: index
                      })
                    }}>
                      <AddShoppingCartIcon sx={{ marginRight: "5px", color: "white" }} />
                      ADD TO CART
                    </Button>
                  </DialogActions>
                </>
              }

            })
          }





        </BootstrapDialog>
      </Box>




    </Box>
  </>

}