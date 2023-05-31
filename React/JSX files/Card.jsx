import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import img1 from "./Images/png-transparent-apple-watch-series-3-apple-watch-series-1-smartwatch-apple-gadget-electronics-apple-watch-thumbnail.png"
import SData from "./SData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



const Card = (props) => {
    return (<>

        <div className="card" style={{ width: "20rem" }}>
            <img src={props.imgsrc} className="card-img-top" alt="ok " />
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <NavLink to="/" className="btn btn-outline-success">Get started</NavLink>

            </div>

        </div>
    </>)
}

export default Card;
