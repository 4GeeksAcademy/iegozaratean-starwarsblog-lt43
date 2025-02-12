import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () =>{

	const { store, actions } = useContext(Context);

	return(
	
		<div className="text-center mt-5">
			<h1>naves dsde api en FLUX en cardnave</h1>
			<div className="row flex-row flex-nowrap" style={{ overflowX: "auto" }}>
				{store.naves.map( (nave, index)=> <Cardnave key={index} uid={nave.url.replace('https://swapi.dev/api/starships/','').replace('/','')}  name={nave.name} manufacturer={nave.manufacturer} model={nave.model} /> )}
			</div>

		</div>
	);
	
} 