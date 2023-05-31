import React from "react";
import Card from "./Card";
import SData from "./SData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Service = () => {

    return (<>
        <div className="my-5">
            <h1 className="text-align-center" >Our Services</h1>
        </div>
        <div className="container-fluid mb-5 " >
            <div className="row">
                <div className="col-10 mx-auto  "  >
                    <div className="row gy-4 " >
                        {SData.map((val, ind) => {
                            return (
                                <Card imgsrc={val.imgsrc} title={val.title} />
                            );
                            //    return (<Card key={ind} imgsrc={val.imgsrc} title={val.title} />);

                        })}
                    </div>
                </div>
            </div>
        </div>

    </>);
}
export default Service;
