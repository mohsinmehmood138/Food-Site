import { combineReducers, createStore } from 'redux'
let mydata = {
  myarr: [
    {
      id:"menucarditem",
      dishname:"Pizza",
      img:'./images/pizzamenu.png',
    },
    {
      id:"menucarditem",
      dishname:"Burger",
      img:"./images/menuburger.png",
    },
    {
      id:"menucarditem",
      dishname:"Fish",
      img:"./images/fishmenu.png",
    },
    {
      id:"menucarditem",
      dishname:"Chicken",
      img:"./images/chickenmenu.png",
    },
    {
      id:"menucarditem",
      dishname:"Rice",
      img:"./images/menurice.png",
    },
    {
      id:"menucarditem",
      dishname:"Shawarma",
      img:"./images/menuchicken (2).png",
    },
    {
      id:"menucarditem",
      dishname:"Chips",
      img:"./images/menuchips1.png",
    },
    {
      id:"menucarditem",
      dishname:"Ice-cream",
      img:"./images/icecream1.png",
    },
    {
      id:"menucarditem",
      dishname:"Drinks",
      img:"./images/menucolddrink.png",
    },
    {
      id:"specialdish",
      img:"./images/lemon.png",
      dishname:"LEMON FISH",
      price:"1500",
      time:"30",
      peole:"4",
      rating:'5'
    },
    {
      id:"specialdish",
      img:"./images/fish.png",
      dishname:"GRILL FISH",
      price:"1200",
      time:"25",
      peole:"2",
      rating:'4'
    },
    {
      id:"specialdish",
      img:"./images/Italiancuisine.png",
      dishname:"ITALIAN CUISINE",
      price:"1000",
      time:"35",
      peole:"3",
      rating:'5'
    }, {
      id:"specialdish",
      img:"./images/specilapasta.png",
      dishname:"SPECIAL PASTA",
      price:"1300",
      time:"30",
      peole:"4",
      rating:'4'
    }, {
      id:"specialdish",
      img:"./images/fruit.png",
      dishname:"MIX FRUIT",
      price:"800",
      time:"15",
      peole:"2",
      rating:'3'
    }, {
      id:"specialdish",
      img:"./images/vegetable.png",
      dishname:"VEG CHICKEN",
      price:"1000",
      time:"25",
      peole:"5",
      rating:"5"
    },
    {
      id:"specialdish",
      img:"./images/chickenrice.png",
      dishname:" CHICKEN RICE",
      price:"800",
      time:"25",
      peole:"5",
      rating:"5"
    },{
      id:"specialdish",
      img:"./images/vegfish.png",
      dishname:"VEG FISH",
      price:"1200",
      time:"25",
      peole:"4",
      rating:"4"
    },
    {
      id:"staff",
      img:"./images/chef3.png",
      name:"JHON SMITH",
      rank:"COMPANY OWNER",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",

    },{
      id:"staff",
      img:"./images/chef4.png",
      name:"WIILY DAVID",
      rank:"COMPANY MANAGER",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },{
      id:"staff",
      img:"./images/chef2.png",
      name:"CRIS JORJ",
      rank:"TEAM LEADER",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },{
      id:"staff",
      img:"./images/chef1.png",
      name:"GRILO ZAM",
      rank:"SENIOR CHEF",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },{
      id:"staff",
      img:"./images/chef5.png",
      name:"BABI BRITH",
      rank:"CHEF",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },{
      id:"staff",
      img:"./images/chef6.png",
      name:"YOUNI JAM",
      rank:"CHEF",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },{
      id:"staff",
      img:"./images/chef7.png",
      name:"BRIL KOR",
      rank:"CHEF",
      desc:"Fast food is popular because it's convenient, it's cheap, and it tastes good.",
    },

  ],
  
}
function MenuData(olddata = mydata, newdata) {

   
    return { myarr: [...olddata.myarr] }
}
 


let myuserdata = {
  userarr: [],
}
 

function adreducer(userolddata=myuserdata, usernewdata) {
  if(usernewdata.type=="signupdata"){
    
    userolddata.userarr.push(usernewdata.payload)
    console.log(userolddata.userarr);

  }


 
    return { userarr:[...userolddata.userarr]}
}
let cartdata={
  cartarr:[]
}

function myCart(cartolddata=cartdata,cartnewdata){
  if(cartnewdata.type=='deal-item'){
    cartolddata.cartarr.push(cartnewdata.payload)
    
  }
  else if(cartnewdata.type=="remove"){
    cartolddata.cartarr.splice(cartnewdata.payload,1)
  }
  else if(cartnewdata.type=="clearcart"){
    cartolddata.cartarr.splice(0,cartolddata.cartarr.length)
  }
  else if(cartnewdata.type=="increaseqty"){
   let increitem= cartolddata.cartarr.forEach((item,index)=>{
      if(index===cartnewdata.index){
        item.qty++;
          // return {...item,qty:item.qty+1}
      }
      // return item
    })
    // return increitem;
    
  }


  
  return {cartarr:[...cartolddata.cartarr]}
}



let combine = combineReducers({ MenuData, adreducer ,myCart})
let store = createStore(combine);
export default store;