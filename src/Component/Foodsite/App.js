import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { Account } from "./Account";
import { Search } from "./Search";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { Provider} from "react-redux";
import { Special } from "./SpecialDish";
import { Deal } from "./Deal";
import {Chef }from "./Chef";
import { SignUp } from "./Signup";
import store from "./store";
import { Cart } from "./Cart";
import { Profile } from "./Profile";

export function App(){

let[badges,setbadges]=useState(100);
const [opencart, setOpencart] = useState(false);
const [opensignup, setopensignup] =useState(false);
const [openprofile, setopenprofile] =useState(false);
const [loginha, setloginha] =useState(false);












    return <>
    <Provider store={store}>
    <Navbar 
    loginha={loginha} setloginha={setloginha} badges={badges}  
    setOpencart={setOpencart} setopensignup={setopensignup}
    setopenprofile={setopenprofile}/>
    
    <Home/>
    <Menu />
    <Special/>
    <Deal />
    <Chef/>
    <Footer/>
    <SignUp opensignup={opensignup} setopensignup={setopensignup}/>
    
    <BrowserRouter>
    <Routes>
        <Route path="" element={<Cart opencart={opencart} setOpencart={setOpencart}/>}></Route>
    
        {/* <Route path="/profile" element={<Profile />}></Route> */}

    </Routes>
    </BrowserRouter>
    </Provider>
    </>
}