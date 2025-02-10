import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params)

    const [starship, setStarship] = useState({})

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/starships/'+params.nave_id)
        .then((response)=> response.json() )
        .then((data)=> setStarship(data.result.properties) )
    },[])
    return (
        <div className="jumbotron">
            <h1 className="display-4">Nave: {params.nave_id}</h1>
            <h2>name: {starship.name}</h2>
            <h2>manufacturer: {starship.manufacturer}</h2>
            <h2>model: {starship.model}</h2>

            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Nave.propTypes = {
    match: PropTypes.object
};
