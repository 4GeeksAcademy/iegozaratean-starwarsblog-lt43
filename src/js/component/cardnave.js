import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const Cardnave = (props) => {
    const { store, actions } = useContext(Context);
    
    
    return (
        <div className="card mx-3" style={{width: "18rem"}}>
            <img src={rigoImage}className="card-img-top" alt="..."/>
            <div className="card-body">
                <button onClick={()=>actions.cambiarTexto(props.name)}>cambiar texto</button>
                <h5 className="card-title">{props.name},{props.model},{props.manufacturer}</h5>
                <Link to={'/nave/'+props.uid} className="btn btn-primary">ver nave {props.uid}</Link>
            </div>
        </div>
    );
};
