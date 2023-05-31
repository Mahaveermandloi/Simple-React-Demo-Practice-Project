// import React from "react";
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';


// function App(){
//      return (<>
//     <Heading/>
//     <Para/>
//     <List/>
//     </>);
// }

// export default App;


// ----=========================================================================================

// import React from 'react';

// function App() {
//     let curr = new Date();
//         let currHrs = curr.getHours();

//         let greeting = '';
//         let cssStyle = {
//             textAlign: 'center',
//             fontFamily: 'monospace'
//         };


//         if (currHrs > 1 && currHrs < 12) {
//             greeting = "Good Morning";
//             cssStyle.color = "green";
//         }
//         else if (currHrs > 12 && currHrs < 19) {
//             greeting = "Good Afternoon";
//             cssStyle.color = "Yellow";
//         }
//         else {
//             greeting = "Good Night";
//             cssStyle.color = "black";
//         }


//         const div = {
//             height: '60px',
//             width: '600px',
//             marginLeft: '190px',
//             backgroundColor: 'peru',


//         }

//         const heading = {
//             position: 'relative',
//             marginTop: '20px',
//             fontFamily: 'monospace'

//         }

//     return (
//     <>
//     <div classNameName="div" style={div}>
//              <h1  style={heading}>Hello sir ,<span style={cssStyle}>{greeting}</span> </h1>
//         </div>  
//     </>
//     );
// }
// export default App;

//===========================================================================================



// const var1 = 'Indian Administrative Service';
// const var2 = 'Indian Police Service';
// const var3 = 'Indian Forest Service';

// function RoleIAS()
// {
//     let role1 = 'Administration & Revenue Collection'
// return role1;

// }

// function RoleIPS()
// {
//     let role2 = 'Law and Order'
// return role2;

// }

// function RoleIFS()
// {
//     let role2 = 'Forest Management and Security'
// return role2;

// }


// export default var1;
// export { var1 , var2 ,var3 , RoleIAS  , RoleIPS ,RoleIFS};
// export { var1 , var2 ,var3 , RoleIAS  , RoleIPS ,RoleIFS};



// ==========================================================================================

// import React, { useState } from 'react';
// import Heading from './Heading';

// function sum (a,b){
//     let sum = a+b;
//     return sum;
// }
// function sub (a,b){
//     let sub = a-b;
//     return sub;
// }
// function multi (a,b){
//     let multi = a*b;
//     return  multi;
// }
// function div (a,b){
//     let div = a/b;
//     div = div.toFixed(4)
//     return  div;
// }

// export {sum ,sub, multi ,div }  ;

//=========================================================================
// import Heading from "./Heading";
// import Card from "./Cards";
// import data from "./Data";


// const App = () => {
//     <Heading />
//     {
//         data.map((val) => {
//             // console.log(index);

//             return (<Card

//                 key={val.key}
//                 name={val.name}
//                 link={val.link}
//                 imgsrc={val.imgsrc}
//                 brand={val.brand}
//             />
//             );
//         })
//     }
// }

// export default App;
//=========================================================================

// # 28  Machine Game in React JS 
//========================================

//#30 Click ME Button App in React 

// import React from 'react';
// import "./index.css";
// const App = () => {
//     const [count, setCount] = useState(0);
//     let IncNum = () => {
//         setCount(count + 1);
//     }
//     return (
//         <>
//             <span>{count}</span>
//             <button classNameName='clickme' onClick={IncNum}>CLICK ME</button>
//         </>
//     );
// }
// export default App;

//===================================================================================

// import React from 'react';
// import "./index.css";
// import { useState } from "react";
// const App = () => {


//     let currTime = new Date().toLocaleTimeString();
//     const [newTime, timeFunc] = useState(currTime);


//     const UpdateTime = () => {
//          let currTime2 = new Date().toLocaleTimeString();
//         timeFunc(currTime2);

//     }

//     return (
//         <>
//             <span>{newTime}</span>
//             <button classNameName='clickme' onClick={UpdateTime} >CLICK ME</button>
//         </>
//     );
// }
// export default App;

//=========================================================================================
//#32 Real Time Clock in React JS 

// import React, { useState } from "react";

// const App = () => {


//     let currTime = new Date().toLocaleTimeString();
//     const [newTime, timeFunc] = useState(currTime);


//     const UpdateTime = () => {
//         currTime = new Date().toLocaleTimeString();
//         timeFunc(currTime);
//     }
// //For Calling the UpdateTime function after 1 sec 

//     setInterval(UpdateTime, 1000);
//     return (
//         <>
//             <span>{newTime}</span>
//         </>
//     );
// }

// export default App;


//=========================================================================================
//# 33 Event Handling in React JS 

// import React, { useState } from "react";
// const App = () => {
//     let color = "yellow";
//     let btntext = "click me";
//     const [bg, updateColor] = useState(color);
//     const [text, updateText] = useState(btntext);
//     let changeColor = () => {
//         let newbg = "red";
//         updateColor(newbg);
//         let newtext = "pass 1";
//         updateText(newtext);
//     }
//     let changeColor2 = () => {
//         let newbg = "purple";
//         updateColor(newbg);
//         let newtext = "clicked me ";
//         updateText(newtext);
//     }
//     return (<>
//         <div classNameName="body1" style={{ backgroundColor: bg }}></div>
//         <button onMouseEnter={changeColor}   onMouseLeave={changeColor2} classNameName="clickme" >{text}</button>
//     </>);
// }

// export default App;
//==================================================================================
//# 34 Forms in React JS 

// import React, { useState } from "react";

// const App = () => {

//     const [text, changeText] = useState("");
//     const [name, changeName] = useState("");

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         changeText(event.target.value);

//     }

//     const Show = () => {
//         changeName(text);
//     }

//     return (<>
//         <div classNameName="box">
//             <h1>Hello {name}</h1>
//             <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={text} />
//             <br />
//             <button onClick={Show}> Submit</button>
//         </div>
//     </>);

// }

// export default App;


//================================================================
//#35 Login Form submit in React JS 

// import React, { useState } from "react";

// const App = () => {
//     const [text, setName] = useState("");
//     const [name, showName] = useState("");
//     const [text2, setPass] = useState("");
//     const [password, showPass] = useState("");
//     const nameTxt = (event) => {
//         setName(event.target.value);
//     }
//     const passTxt = (event) => {
//         setPass(event.target.value);
//     }
//     const Show = (event) => {
//         showName(text);
//         showPass(text2);
//         event.preventDefault();
//     }
//     return (
//         <>
//             <form onSubmit={Show}>
//                 <div classNameName="box">
//                     <h1>Hello {name} {password}</h1>
//                     <input type="text" placeholder="Enter Your Name" onChange={nameTxt} value={text} />
//                     <br />
//                     <input type="password" placeholder="Enter Password" onChange={passTxt} value={text2} />
//                     <br />
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </>
//     );
// }
// export default App;

//==============================================================================================
//#36 & #37  Handling Complex Multiple input State in React JS 

// import React, { useState } from "react";
// const App = () => {
//     const [firstname, setName] = useState({ fname: '', password: '', email: '' });
//     const inputEvent = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setName((preValue) => {
//             if (name === "name") {
//                 return {
//                     fname: value,
//                     password: preValue.password
//                 };
//             }
//             else if (name === "password") {
//                 return {
//                     fname: preValue.fname,
//                     password: value
//                 };
//             }
//             else if (name === "email") {
//                 return {
//                     fname: preValue.fname,
//                     password: preValue.password,
//                     email: value
//                 };
//             }
//         })
//     }
//     const onSubmitform = (event) => {
//         event.preventDefault();
//         alert("form Submitted");
//     }
//     return (<>
//         <form onSubmit={onSubmitform}>
//             <div classNameName="box">
//                 <h1>Hello {firstname.fname} {firstname.password} </h1>
//                 <br />
//                 <h1>Hello {firstname.email} </h1>
//                 <input type="text" placeholder="Enter Your Name" onChange={inputEvent}
//                     name="name"
//                 />
//                 <br />
//                 <input type="text" placeholder="Enter Password" onChange={inputEvent}
//                     name="password"
//                 />
//                 <br />
//                 <input type="email" placeholder="Enter email" onChange={inputEvent}
//                     name="email"
//                 />
//                 <br />
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     </>)
// }
// export default App;


//=============================================================================================
//#38 Spread Operator in React JS

// Done in INdEx.js File 
//=============================================================================================

//#39 Completing Login Form (Spreading Operator)
// import React, { useState } from "react";
// const App = () => {
//     const [firstname, setName] = useState({ fname: '', password: '', email: '' });
//     const inputEvent = (event) => {
//         // const name = event.target.name;
//         // const value = event.target.value;
//         const { name, value } = event.target;
//         setName((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             }
// if (name === "name") {
//     return {
//         fname: value,
//         password: preValue.password
//         , email: preValue.email

//     };
// }
// else if (name === "password") {
//     return {
//         fname: preValue.fname,
//         email: preValue.email,
//         password: value
//     };
// }
// else if (name === "email") {
//     return {
//         fname: preValue.fname,
//         password: preValue.password,
//         email: value
//     };
// }
//         })
//     }
//     const onSubmitform = (event) => {
//         event.preventDefault();
//         alert("form Submitted");
//     }
//     return (<>
//         <form onSubmit={onSubmitform}>
//             <div classNameName="box">
//                 <h1>Hello {firstname.fname} {firstname.password} </h1>
//                 <br />
//                 <h1>Hello {firstname.email} </h1>
//                 <input type="text" placeholder="Enter Your Name" onChange={inputEvent}
//                     name="fname" value={firstname.fname}
//                 />
//                 <br />
//                 <input type="text" placeholder="Enter Password" onChange={inputEvent}
//                     name="password" value={firstname.password}
//                 />
//                 <br />
//                 <input type="email" placeholder="Enter email" onChange={inputEvent}
//                     name="email" value={firstname.email}
//                 />
//                 <br />
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     </>)
// }
// export default App;

//===========================================================================================
//#40 TODO list in REACT JS 

// import React, { useState } from "react";

// const App = () => {
//   const [task, setTask] = useState("");
//   const [items, setItems] = useState([]);

//   const inputEvent = (event) => {
//     setTask(event.target.value);
//   };

//   const addToList = () => {
//     setItems((oldItems) => [...oldItems, task]);
//     setTask("");
//   };

//   const removeItem = (index) => {
//     setItems((oldItems) => oldItems.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <div classNameName="main_box">
//         <input
//           type="text"
//           placeholder="Add a Task"
//           onChange={inputEvent}
//           value={task}
//         />
//         <button classNameName="add" onClick={addToList}>
//           Add
//         </button>
//         <br />

//         <div classNameName="todobox">
//           <ol>
//             {items.map((item, index) => (
//               <div classNameName="box2" key={index}>
//                 <li>{item}</li>
//                 <button classNameName="remove" onClick={() => removeItem(index)}>
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

//=============================================================================================
// #41 Challenge 8 in React JS 

// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// // import { Tooltip } from "@mui/material";
// import Tooltip from '@mui/material/Tooltip';

// const App = () => {

//     const num = 0;
//     const [item, number] = useState(num);
//     const increment = () => {
//         number(item + 1);
//     }
//     const decrement = () => {
//         if (item < 1) {
//             alert("Count reached");
//         }
//         else {
//             number(item - 1);
//         }
//     }
//     return (<>
//         <div classNameName="body">
//             <div classNameName="box">
//                 <h1>{item}</h1>
//                 <br />
//                 <div classNameName="btns">

//                     <Button onClick={increment} >
//                         <AddIcon />
//                     </Button>


//                     <Tooltip title="Delete">
//                         <Button onClick={decrement} >
//                             <DeleteIcon />
//                         </Button>
//                     </Tooltip>



//                 </div>
//             </div>
//         </div >
//     </>);
// }
// export default App;

//=======================================================================================
// 

// import React, { useState } from "react";
// import "./ToDoList.css";
// import Icon from '@mui/material/Icon';

// const App = () => {
//     const [task, setTask] = useState();
//     const [show, showTask] = useState();

//     const inputEvent = (event) => {
//         setTask(event.target.value);
//     };


//     return (<>
//         <div classNameName="body_div">
//             <div classNameName="box">
//                 <h1>To Do List</h1>
//                 <input type="text" placeholder="Add task"  />
//                 <button>
//                     <Icon sx={{ fontSize: 50 }} classNameName="addbtn" >add_circle</Icon>
//                 </button>
//                 <br />
//                 <ol>
//                     <li>{task}</li>
//                 </ol>
//             </div>
//         </div>
//     </>
//     );
// }

// export default App;

//========================================================================================
// ADDING BOOTSTRAP IN REACT JS 

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (<>
//         <button classNameName="btn btn-outline-primary btn-lg active">
//         Click ME
//         </button></>);
// }

// export default App;

//=========================================================================================
// Accodion in React JS 

// import React, { useState } from "react";
// import { new_data } from "./new_data";
// import Faq from "./FAQ";

// const App = () => {
//     const [data, setData] = useState(new_data);

//     return (<>
//         <section  >
//             <h1 classNameName="heading">THis is interview</h1>
//             {
//                 data.map((currElem) => {
//                     return <Faq key={currElem.id} {...currElem} />
//                 })
//             }
//         </section>
//     </>)
// }

// export default App;


//================================================================================
//Card page Webpage 

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (
//         <>
//             <h1 className="text-center my-5 text-danger">This is my WebPage</h1>


//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div class="card" style={{width: "30rem"}}>
//                             <img src="https://picsum.photos/500/500" class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card"   style={{width: "30rem"}}>
//                             <img src="https://picsum.photos/500/500" class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card"   style={{width: "30rem"}}>
//                             <img src="https://picsum.photos/500/500" class="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default App;


//==============================================================================================
//UseEffect hooks in React JS 
// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [count, setCount] = useState(0);
//     const [num, setNum] = useState(0);
//     useEffect(() => {
//         alert("hi this is me ");
//     } ,[])
//     const increment = () => {
//         setCount(count + 1);
//         setNum(num+ 1);
//     }
//     return (
//         <>
//             <button onClick={increment}>Click ME {count}</button>
//             <button onClick={increment}>Click ME {num}</button>
//         </>
//     );
// }
// export default App;
//=========================================================================================
// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `You clicked me ${count} times`;

//     } , [count])
//     return (<>
//         <button onClick={() => { setCount(count + 1) }}>Click ME {count}</button>
//     </>)
// }
// export default App;

//=============================================================================================
//Pokemon fetch API in React JS 
// import React from "react";
// import ComA from "./Pokemon";

// const App = () => {
//     return (<>
//         <ComA />
//     </>);

// }
// export default App;
//============================================================================================
// #56 React Routing of Pages 
// import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import { Switch, Route } from "react-router-dom";
// import Menu from "./Menu";
// import "./index_menu.css";



// const App = () => {
//     const Service = () => {
//         return (<>

//             <div className="content">
//                 <h1>
//                     Oops! Page Note Found
//                 </h1>

//             </div>
//         </>)
//     }
//     return (<>
//         <Menu />
//         <Switch>
//             <Route exact path="/" component={About} />
//             <Route exact path="/contact" component={Contact} />
//             <Route component={Service} />

//         </Switch>
//     </>);
// }

// export default App;
//========================================================================================

// import React from "react";
// import Menu from "./Menu";

// const App = () => {
//     return (<> <Menu />
//     </>);
// }
// export default App;
//=============================================================================
// using Render and Componenet and understanding when to use render and when to use Component

// import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import { Switch, Route } from "react-router-dom";
// import Menu from "./Menu";
// import "./index_menu.css";



// const App = () => {
//     const Service = () => {

//         return (<>

//             <div className="content">
//                 <h1>
//                     <span>
//                         Oops! Page Note Found
//                     </span>
//                 </h1>

//             </div>
//         </>)
//     }


//     return (<>
//         <Menu />
//         <Switch>
//           {/* this is done through component  */}
//             {/* <Route exact path="/" component={() => <About name="About" />} /> */}

//             {/* This is done through Rendering  */}
//             <Route exact path="/" render={() => <About name="About" />} />


//           {/* this is done through component  */}
//             <Route exact path="/contact" component={() => <Contact name="Contact" />}  />

//             {/* This is done through Rendering  */}
//             <Route exact path="/contact" render={() => <Contact name="Contact" />} />


//             <Route component={Service} />

//         </Switch>
//     </>);
// }

// export default App;

//==============================================================================================
// import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import { Switch, Route } from "react-router-dom";
// import Menu from "./Menu";
// import User from "./User";
// import "./index_menu.css";
// const App = () => {
//     const Service = () => {
//         return (<>
//             <div className="content">
//                 <h1>
//                     <span>
//                         Oops! Page Note Found
//                     </span>
//                 </h1>
//             </div>
//         </>)
//     }
//     return (<>
//         <Menu />
//         <Switch>
//             <Route exact path="/" render={() => <About name="About" />} />
//             <Route exact path="/contact" component={() => <Contact name="Contact" />} />
//             <Route exact path="/user/:fname/:lname" component={User} />
//             <Route component={Service} />
//         </Switch>
//     </>);
// }

// export default App;

//======================================================================================
// import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import { Switch, Route } from "react-router-dom";
// import Menu from "./Menu";
// import User from "./User";
// import Search from "./Search";
// import "./index_menu.css";
// const App = () => {
//     const Service = () => {
//         return (<>
//             <div className="content">
//                 <h1>
//                     <span>
//                         Oops! Page Note Found
//                     </span>
//                 </h1>
//             </div>
//         </>)
//     }
//     return (<>
//         <Menu />
//         <Switch>
//             <Route exact path="/" render={() => <About name="About" />} />
//             <Route exact path="/contact" component={() => <Contact name="Contact" />} />
//             <Route exact path="/search" component={Search} />   

//             <Route exact path="/user/:fname/:lname" component={User} />

//             <Route component={Service} />
//         </Switch>
//     </>);
// }

// export default App;
// ==========================================================================
// import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import { Switch, Route , Redirect } from "react-router-dom";
// import Menu from "./Menu";
// import User from "./User";
// import Search from "./Search";
// import Error from "./Error";
// import "./index_menu.css";


// const App = () => {


// return (<>
//     <Menu />
//     <Switch>
//         <Route exact path="/" render={() => <About name="About" />} />
//         <Route exact path="/contact" component={() => <Contact name="Contact" />} />
//         <Route exact path="/search" component={Search} />
//         <Route exact path="/user" component={User} />
//         {/* <Route exact path="/user/:fname/:lname" component={User} /> */}
//         {/* <Route component={Error} /> */}
//         <Redirect to="/"/>
//    {/* This above Redirect will redirect the user to the home page of the site */}
//     </Switch>
// </>);
// }

// export default App;

//===========================================================================================
//IMporting BOOTSTRAP in React JS 
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (<><div className="container">
//         <h1 className="text-center">LBSNAA</h1>
//         <br/>
//         <button className="btn btn-primary">Welcome IAS Officer </button>
//    <p className="text-center ">  This is my Car </p>
//    <button className="btn btn-outline-dark">THis is a Button</button>
//     </div>

//     </>)
// }
// export default App;


//=====================================================================================
// **************************The Minor Car Project **************************
import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";


const App = () => {
    return (<>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
    </>)
}
export default App;
