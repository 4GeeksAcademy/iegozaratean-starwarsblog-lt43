const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [],
			message: 'texto inicial',
			naves_fav: [] // ['ele3']
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			cambiarTexto: (name) => {
				console.log('cambaior texto dsed FLUX '+name)
				setStore({ message: 'texto Modifciado' });
				const store = getStore();
				if( store.naves_fav.includes(name)){
					console.log('Ya esta el elemento quitalo')
					setStore({ 
						naves_fav: store.naves_fav.filter( (elemento)=> elemento != name )
					});
				}else{
					console.log('No  esta el elemento agregalo')
					setStore({ naves_fav: [...store.naves_fav,name] });
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('se cargo la pagina')
				fetch('https://swapi.dev/api/starships')
				.then( (response)=> response.json() )
				.then( (data)=> setStore({ naves: data.results }) )

				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
