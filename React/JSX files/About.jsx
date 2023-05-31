import React from "react";
import "./index.css";

import Image from "./lbsnaa.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const About = () => {

    return (<>
        <section className="d-flex align-item-center" id="header">

            <div className="container-fluid nav_bg " >
                <div className="row">
                    <div className="col-10 mx-auto"  >
                        <div className="row">

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                                <h1 >Training of<strong className="color-blue"> IAS </strong> officers</h1>

                                <h2>We train Civil Servants</h2>
                                <div className="mt-3">
                                    <NavLink to="/contact" className="btn  btn-outline-primary ">
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>


                            <div className="col-lg-6 order-1 order-lg-2 header-img image  ">
                                <img src={Image} alt="" className="img-fluid" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>);

}
<h1>hello</h1>
export default About;
