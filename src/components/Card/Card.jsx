import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import bgSelector from "../../helper/bgSelector";
import "./card.css";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

const Card = () => {
	const [bg,setBg] = useState('')

	const weather = useSelector(state => state.weatherReducer);
	useEffect(() => {
		if(weather.coord){
			let howsWeather = weather.weather[0].main;
			setBg(bgSelector(howsWeather));
		}
	} , [weather]);
	
	return (
		<section className="card-container">
			<img
				src={bg}
				className="img-card-bg"
			/>
			<GeneralInfo/>
            <div className="weather-info-container">
                <WeatherInfo/>
            </div>
		</section>
	);
};

export default Card;
