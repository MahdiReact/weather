import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./generalInfo.css";


const GeneralInfo = () => {
const temp = useSelector(state => state.weatherReducer.main?.temp);
const city = useSelector(state => state.weatherReducer?.name);
const weather = useSelector(state => state.weatherReducer?.weather);


    
	return (
		<section className="general-info">
			<h1 className="general-temp">{Math.floor(temp -273)}</h1>
			<h2 className="general-loc">{city}</h2>
			<div className="general-icon">
				{weather? <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} /> : null}
			</div>
		</section>
	);
};

export default GeneralInfo;
