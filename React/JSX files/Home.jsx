import React from "react";
import Image from "./lbsnaa.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Home = () => {

    return (<>
        <section className="d-flex align-item-center" id="header">

            <div className="container-fluid nav_bg " >
                <div className="row">
                    <div className="col-10 mx-auto"  >
                        <div className="row">

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                                <h1 >LBSNAA <strong className="color-red">Mussorrie</strong> </h1>

                                <h2>This is my dream</h2>
                                <div className="mt-3">
                                    <NavLink to="/service" className="btn  btn-outline-primary ">
                                        Get Started
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
    </>)
}
export default Home;
