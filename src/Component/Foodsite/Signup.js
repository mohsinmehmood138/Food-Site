import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import DialogActions from '@mui/material/DialogActions';
import OutlinedInput from '@mui/material/OutlinedInput';
import {  Controller,useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IconButton from '@mui/material/IconButton';
import { Divider } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useSelector } from 'react-redux';
import store from "./store";

import './Signup.css'


function PaperComponent(props) {

  

  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export  function SignUp(props) {

  const { handleSubmit, reset, control } = useForm();

  let input=[
    {
      name:"name",
      type:'text',
      icon:AccountCircle,
      placeholder:"NAME"
  },
  {
    name:"password",
    type:'password',
    icon:VpnKeyIcon,
    placeholder:"PASS"


},
{
  name:"mail",
  type:'email',
  icon:MailIcon,
  placeholder:"MAIL"

},
{
  name:"number",
  type:'text',
  icon:LocalPhoneIcon,
  placeholder:"PHONE"

},
{
  name:"location",
  type:'text',
  icon:PlaceIcon,
  placeholder:"PLACE"

},
]



const handleClose = () => {
  props.setopensignup(false);
};

let mydata=useSelector((data)=>{
  return data.adreducer.userarr
})
const tost=()=> toast.success("Thanks For signup");
const tost1=()=> toast.error("Already Register")



 

  const onSubmit = (data) => {

   let useralreadyexist= mydata.find((users,index)=>{
      if(users.name==data.name){
        return true
      }
      
    })
    if(useralreadyexist){
      tost1();
    }
    else{
      
      tost();
      store.dispatch({
        type:"signupdata",
        payload:data
      })
    }

  };
 ;
    

     

    
  

  return (
    <Box>
     
      <Dialog
        open={props.opensignup}
       
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle variant='h4' style={{ cursor: 'move',textAlign:"center",color:"red" }} id="draggable-dialog-title">
          SIGN UP
          
        </DialogTitle>

        <Divider/>
          <form style={{marginTop:"20px"}} onSubmit={handleSubmit(onSubmit)}>
            
          <Box className="signupform" sx={{width:"400px",height:"350px",margin:"5px 10px",textAlign: 'center'}}>
          <Box>

            {
              input.map((inp,index)=>{

                return  <Controller 
                name={inp.name}
                control={control}
                render ={({field})=>(
                  <OutlinedInput
                  key={index}
                  {...field}
                  type={inp.type}
                  sx={{marginTop:"15px", width: '280px', height: "40px" }}
                  placeholder={inp.placeholder} startAdornment={
                    <InputAdornment position="start">
                      <inp.icon/>
                    </InputAdornment>
                  }
                  >
                    <InputAdornment position="start">
                        
                      </InputAdornment>
                    </OutlinedInput>
                )}            
              />
             

              })
            }
          <br/>
          <Controller
          name='img'
          control={control}
          type="file"
          render={({img})=>(
            
            
            <IconButton
            className='uploadimage'
            {...img}
            aria-label="upload picture"
            component="label"
             >
        <input hidden  type="file" />
        <PhotoCamera />
            </IconButton>

          )}
          />

          
           

                  


          
          </Box>

        </Box>
       
        
        <DialogActions sx={{justifyContent:"center"}}>
          <Button sx={{background:"darkorange",color:"white"}} autoFocus onClick={handleClose}>
            BACK
          </Button>
          
          <Button type='submit' sx={{background:"red",color:"white"}} >SIGN UP</Button>
        </DialogActions>
          </form>
          <ToastContainer  position="top-center" style={{zIndex:'10 !important'}} />

      </Dialog>
      
    </Box>
  );
}