import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { List, ListItem } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "./Footer.css"
export function Footer() {
    return <>
        <Box className='footer'>
            <Box className='footerbox'>



                <Box className='footerlogobox'>
                    <img src='images\logo.png' className="footerlogo" ></img>
                </Box>
                <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>
                    FOODY
                </Typography>
                <Box className='footeradress'>
                    <LocationOnIcon sx={{ marginRight: "5px" }} />  Notting Hill Gate London
                </Box>
                <Box className='footeradress'>
                    <MailIcon sx={{ marginRight: "5px" }} /> foodysite33@gamil.com
                </Box>
                <Box className='footericonbox1'>
                    <InstagramIcon className='footericonbox1' />
                    <LinkedInIcon className='footericonbox1' />
                    <FacebookIcon className='footericonbox1' />
                    <TwitterIcon className='footericonbox1' />
                    <YouTubeIcon className='footericonbox1' />
                </Box>
            </Box>

            <Box className='footerbox'>
                <Typography variant="h6" sx={{ textAlign: "center", color: 'white', fontWeight: 900, marginTop: '30px' }}>Attributes</Typography>
                <Box sx={{ width: "100px", margin: "20px auto", fontWeight: 900 }}>
                    <List sx={{ display: "flex", flexDirection: "column", color: "white" }}>
                        <ListItem className="footerattribut">HOME</ListItem>
                        <ListItem className="footerattribut">MENU</ListItem>
                        <ListItem className="footerattribut">SPECIAL</ListItem>
                        <ListItem className="footerattribut">DEALS</ListItem>
                        <ListItem className="footerattribut">OWNER</ListItem>
                        <ListItem className="footerattribut">ACCOUNT</ListItem>
                    </List>
                </Box>
            </Box>


            <Box className='footerbox'>
                <Typography variant="h6" sx={{ textAlign: "center", color: 'white', fontWeight: 900, marginTop: '30px' }}>TERMS</Typography>
                <Box sx={{ width: "100px", margin: "20px auto", fontWeight: 900 }}>
                    <List sx={{ display: "flex", flexDirection: "column", color: "white" }}>
                        <ListItem className="footerattribut">F.A.Q</ListItem>
                        <ListItem className="footerattribut">POLICY</ListItem>
                        <ListItem className="footerattribut">COOKIES</ListItem>
                        <ListItem className="drawerlistitem">CONDITIONS</ListItem>
                        <ListItem className="footerattribut">COMPANY</ListItem>
                        <ListItem className="footerattribut">JOBS</ListItem>

                    </List>
                </Box>
            </Box>



            <Box className='footerbox'>
                <Typography variant="h6" sx={{ textAlign: "center", color: 'white', fontWeight: 900, marginTop: '30px' }}>CONTACT US</Typography>
                <form style={{ marginTop: "25px", textAlign: "center" }}>
                    <OutlinedInput sx={{ width: '250px', height: "40px", border: "1px solid white", color: "white" }} placeholder="ENTER  E-Mail" startAdornment={
                        <InputAdornment position="start">
                            < MailIcon sx={{ color: "white",marginRight:"20px" }} />
                        </InputAdornment>
                    } >
                        <MailIcon />
                    </OutlinedInput>
                    <br/>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="ENTER YOUR MESSAGE"
                        style={{
                            width: 250,
                            minWidth: '150px', maxWidth: "320px"
                            , height: "100px", minHeight: "20px",maxHeight:"100px"
                            , marginTop: "20px", background: "transparent", 
                            border:"1px solid white",color:"white"
                        }}
                    />
                    <br/>
                    <Button  sx={{width:"200px",background:"white",color:"red",marginTop:"10px"}}>Submit</Button>
                </form>

            </Box>

        </Box>
        <Box className='copyright'>
            <Typography sx={{ marginTop: "10px", color: "white" }}>Copyright c 2022 Gamica Developer</Typography>
        </Box>
    </>
}











