import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

const Navbar = () => {
    return (<>
        <div className="container-fluid nav_bg " >
            <div className="row">
                <div className="col-10 mx-auto"  >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink activeClassName="active_class navbar-brand" to="/"style={
                                {
                                    fontWeight:'bold'
                                }
                            } >LBSNAA</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink style={{textDecoration:'none'}}  activeClassName="active_class links" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{textDecoration:'none'}}  activeClassName="active_class links" to="/service" >Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{textDecoration:'none'}} activeClassName="active_class links" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{textDecoration:'none'}}  activeClassName="active_class links" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </>)
}
export default Navbar;
