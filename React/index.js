// import React from "react";
// import ReactDOM from "react-dom";

// const img1 = "https://picsum.photos/200/200";
// const img2 = "https://picsum.photos/200/200";
// const img3 = "https://picsum.photos/200/200";
// const link = "http://localhost:3000/index.html"

// ReactDOM.render(
//     <>
//         <h1 contentEditable="true"> My name is Mahaveer </h1>
//         <img src={img1} alt="random size" />
//         <img src={img2} alt="random size" />
//         <a href={link}>
//             <img src={img3} alt="random size" />
//         </a>
//     </>
//     , document.getElementById("root")
// )


// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';



// const img1 = "https://picsum.photos/300/200";
// const img2 = "https://picsum.photos/200/200";
// const img3 = "https://picsum.photos/600/200";
// const link = "http://localhost:3000/index.html"

// ReactDOM.render(
//     <>
//         <h1 className="heading">My name is Mahaveer Mandloi</h1>
//         <div className="container">

//             <img src={img1} alt="random image" />
//             <img src={img2} alt="random image" />
//             <img src={img3} alt="random image" />

//         </div>
//     </>
//     ,
//     document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';

// const upper = {
//     fontSize: '40px',
//     fontFamily: 'monospace',
//     color: 'peru',
// }



// const lower = {
//     // backgroundColor: 'black',
//     position:'relative',
//     top:'40%',
//     left:'40%',
//     height:'40px',
//     width:'300px',

// }


//In react we style the elements by creating the object of the Properties 
//and use that to name the 'style={object name}' the object Properties and class is 
//written in "camelCase" 

// ReactDOM.render(
//     <>
//         <div className='container' style={lower} >
//             <h1 className='heading' style={upper}>Hi, Good Morning</h1>
//         </div>
//     </>
//     , document.getElementById('root'))


//Challenge 1 - Good Morning , Afternoon and Evening 

// import React from "react";
// import ReactDOM from "react-dom";

// let curr = new Date();
// let currHrs = curr.getHours();

// let greeting = '';
// let cssStyle = {
//     textAlign : 'center',
//     fontFamily: 'monospace'
// };


// if (currHrs > 1 && currHrs < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
// }
// else if (currHrs > 12 && currHrs <19)
// {
//     greeting = "Good Afternoon";
//     cssStyle.color = "Yellow";
// }
// else
// {
//     greeting = "Good Night";
//     cssStyle.color = "black";
// }


// const div = {
//     height: '60px',
//     width: '600px',
//     marginLeft: '190px',
//     backgroundColor: 'peru',


// }

// const heading ={
//     position :'relative',
//     marginTop:'20px',
//     fontFamily:'monospace'

// }


// ReactDOM.render(<>
//     <div className="div" style={div}>
//         <h1  style={heading}>Hello sir ,<span style={cssStyle}>{greeting}</span> </h1>
//     </div>
// </>, document.getElementById('root'))



//#18 Component --> THIS IS APP COMPONENT 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// ReactDOM.render(<App/>,document.getElementById('root'));



//#4 THE GREETING EXPERIMENT  (using components)

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById('root'));


// ================================================================================


//IMPORT AND EXPORT IN REACT JS 

// import React from "react";
// import ReactDOM from "react-dom";
// import var1 , {var2,var3 ,RoleIAS , RoleIPS ,RoleIFS} from "./App";
// import * as Service from "./App";


// ReactDOM.render(<>
// <h1>This is List</h1>
// <ol>
//     <li>{Service.var1} --  {Service.RoleIAS()}</li>
//     <li>{Service.var2} --  {Service.RoleIPS()}</li>
//     <li>{Service.var3} --  {Service.RoleIFS()}</li>
// </ol>
// </>, document.getElementById('root'));

// ReactDOM.render(<>
// <h1>This is List</h1>
// <ol>
//     <li>{var1} --  {RoleIAS()}</li>
//     <li>{var2} --  {RoleIPS()}</li>
//     <li>{var3} --  {RoleIFS()}</li>
// </ol>
// </>, document.getElementById('root'));



// =====================================================================================

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { sum, sub, multi, div } from "./App";
// import  {Calculator}  from "./Calculator";



// ReactDOM.render(<Calculator />
//     , document.getElementById('root'));



//==============================================================================================
// #22 CREATING PROPS IN REACT JS 
// import React from "react";
// import ReactDOM from "react-dom";

// img1= {
//     src : "C:\Users\HP\Desktop\React\firstreact\Images\1.png"
// }


// props = {
//     link: "https://www.sonatawatches.in/",
//     imageSrc: "https://picsum.photos/200"

// }

// function Cards(props) {
//     return (
//         <>
//             <div className="cards">
//                 <a href={props.link}>
//                     <img src={props.imageSrc} alt="Image" />
//                 </a>
//                 <h2>{props.watchname }</h2>
//                 <p>{props.brand }</p>
//                 <button>{props.button}</button>
//             </div>
//         </>);


// }

// ReactDOM.render(
//     <>
//         <Cards link="https://www.sonatawatches.in/"
//             imageSrc="https://picsum.photos/200"
//             watchname="S21 Zensor"
//             brand ="Sonata"
//             button="Watch Now" />

//         <Cards link="https://www.sonatawatches.in/"
//             imageSrc="https://picsum.photos/200"
//             watchname="S21 Zensor"
//             brand ="Sonata"
//             button="Watch Now" />

//         <Cards link="https://www.sonatawatches.in/"
//             imageSrc="https://picsum.photos/200"
//             watchname="S21 Zensor"
//             brand ="Sonata"
//             button="Watch Now" />

//     </>
//     , document.getElementById('root'));



//==============================================================================================
//#23 Simplfying the netflix project
// Array of Objects 
// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Cards";
// import data from "./Data";
// import Heading from "./Heading";
// import  "./index.css";


// ReactDOM.render(<>

//  <Heading/>

//     <Card
//         name={data[0].name}
//         link={data[0].link}
//         imgsrc={data[0].imgsrc}
//         brand={data[0].brand}
//     />

//     <Card
//         name={data[1].name}
//         link={data[1].link}
//         imgsrc={data[1].imgsrc}
//         brand={data[1].brand}
//     />

//     <Card
//         name={data[1].name}
//         link={data[1].link}
//         imgsrc={data[1].imgsrc}
//         brand={data[1].brand}
//     />

//     <Card
//         name={data[1].name}
//         link={data[1].link}
//         imgsrc={data[1].imgsrc}
//         brand={data[1].brand}
//     />

//     <Card
//         name={data[1].name}
//         link={data[1].link}
//         imgsrc={data[1].imgsrc}
//         brand={data[1].brand}
//     />

// </>
//     , document.getElementById('root'));



//==============================================================================================
//# 24 Array MAP and fat Arrow Function 

// import ReactDOM from "react-dom";
// import Card from "./Cards";
// import data from "./Data";
// import Heading from "./Heading";
// import "./index.css";


// ReactDOM.render(<>

//     <Heading />
//     {data.map((val, index) => {
//         return (<Card
//             name={val.name}
//             link={val.link}
//             imgsrc={val.imgsrc}
//             brand={val.brand}

//         />
//         );
//     })}
// </>
//     , document.getElementById('root'));

//==============================================================================================
//#25 React Developer Tools & Error Handling 


// import "./index.css";
// // import App from "./App";
// import React from "react";
// // import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import Heading from "./Heading";
// import Card from "./Cards";
// import data from "./Data";

// // ReactDOM.render(<App/>,document.getElementById("root"))



// const root = createRoot(document.getElementById("root"));
// root.render(
//     <>
//         <Heading />
//             {data.map((val) => {
//                 // console.log(index);
//                 return (<Card
//                     key={val.key}
//                     name={val.name}
//                     link={val.link}
//                     imgsrc={val.imgsrc}
//                     brand={val.brand}
//                 />
//                 );
//             })}
//     </>
//     );


//=========================================================================
// #26 IF ELSE IN REACT JS 

// import React from "react";
// import ReactDOM from 'react-dom';
// import Heading from "./Heading";
// import Sonata from "./Sonata";
// import Fastrack from "./Fastrack";

// const favWatch = 'Sonata';


// const FavWatch = () => {
//     if (favWatch === 'Fastrack') {
//         return <Sonata />;
//     }
//     else {
//         return <Fastrack />;
//     }
// }

// ReactDOM.render(
//     <>
//         <Heading />
//         <FavWatch />
//     </>
//     , document.getElementById('root')
// );

//=========================================================================

//# 27 TERNARY OPERATOR IN REACT JS 


// import React from "react";
// import ReactDOM from 'react-dom';
// import Heading from "./Heading";
// import Sonata from "./Sonata";
// import Fastrack from "./Fastrack";

// const favWatch = 'Fastrack';


// const FavWatch = () => {
//     if (favWatch === 'Fastrack') {
//         return <Sonata />;
//     }
//     else {
//         return <Fastrack />;
//     }
// }

// ReactDOM.render(
//     <>
//         <Heading />
//         {/* <FavWatch /> */}

//         {favWatch === 'Sonata' ? <Sonata/> : <Fastrack/>} 
//     </> 
//     , document.getElementById('root')
// );

//==============================================================================================
// # 28  Machine Game in React JS 

// import React from "react";
// import { ReactDOM } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import Heading from "./Heading";
// import Slotbox from "./Slotbox";




// let root = createRoot(document.getElementById('root'));

// root.render(<>
//     <Heading />
//     <Slotbox   x='😂' y='😂' z='😂'   /> 
//     <Slotbox   x='🤣' y='😂' z='😂'  /> 
//     <Slotbox   x='😂' y='😂' z='🎂'  /> 
// </>)




//=========================================================================
// # 30 Click ME BUTTON  


//=====
//Spread Operator of Array

// var fullname = ['Mahaveer', 'Mandloi', 'Mandleshwar ', 'Madhya Pradesh'];

// var biodata = [20, ...fullname, "Male"];

// console.log(biodata);

//==========
//Spread Operator of Object

// var fullname = { name: 'Mahaveer', surname: 'Mandloi', city: 'Mandleswar' }

// var biodata = { ...fullname, gender: 'MALE', age: 20 }

// console.log(biodata);
//=============================================================


// import { createRoot } from 'react-dom/client';
// import App from "./App";
// // import "./index.css";
// import "./new_data.css";

// const root = createRoot(document.getElementById('root'));

// root.render(<>
//         <App />
// </>);


//==========================================================================
// **************************The Minor Car Project **************************
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = createRoot(document.getElementById('root'));

root.render(<>
        <BrowserRouter>
                <App />
        </BrowserRouter>
</>);



