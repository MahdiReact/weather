import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Card from "./components/Card/Card";
import { WeatherClass } from "./service/weather";
import { setWeather } from "./store/weatherSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		let prev = localStorage.getItem("weather");
		console.log();
		
		let w;
		if(prev){
			 w = new WeatherClass(prev);
		}else{
			w = new WeatherClass("tehran")
		}
		w.getWeather()
			.then((res) => {
				dispatch(setWeather(res));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container">
			<Card />
		</div>
	);
}

export default App;
