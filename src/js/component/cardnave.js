import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Cardnave = (props) => {
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={rigoImage}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">info.</p>
                <Link to={'/nave/'+props.uid} className="btn btn-primary">ver nave {props.uid}</Link>
            </div>
        </div>
    );
};
