import { useSelector } from "react-redux";
import SearchBox from "../SearchBox/SearchBox";
import "./weatherInfo.css";

const WeatherInfo = () => {
	const city = useSelector((state) => state.weatherReducer?.name);
	const weather = useSelector((state) => state.weatherReducer?.weather);
	const coord = useSelector((state) => state.weatherReducer?.coord);
	const weatherParams = useSelector(
		(state) => state.weatherReducer?.main
	);
	const windSpeed = useSelector(
		(state) => state.weatherReducer.wind?.speed
	);

	return (
		<section className="weather-info" dir="rtl">
			<SearchBox />
			<div className="main-info-wrapper">
			<div className="location-info-list-container">
				<h3 className="loc-info-title">مشخصات محلی</h3>

				<ul className="loc-info">
					<li>
						<h4>شهر : {""}</h4>
						<h4>{city}</h4>
					</li>
					<li>
						<h4>
							طول
							جغرافیایی
							: {""}
						</h4>
						<h4>
							{
								coord?.lon
							}
						</h4>
					</li>
					<li>
						<h4>
							عرض
							جغرافیایی
							: {""}
						</h4>
						<h4>
							{
								coord?.lat
							}
						</h4>
					</li>
				</ul>
			</div>
			<div className="weather-info-list-container">
				<h3 className="weather-info-title">
					وضعیت هوایی
				</h3>
				<ul className="weather-info-list">
					<li>
						<h4>وضعیت : </h4>
						<h4>
							{weather
								? weather[0]
										.main
								: ""}
						</h4>
					</li>
					<li>
						<h4>رطوبت</h4>
						<h4>
							{
								weatherParams?.humidity
							}
						</h4>
					</li>
					<li>
						<h4>فشار هوا</h4>
						<h4>
							{
								weatherParams?.pressure
							}
						</h4>
					</li>
					<li>
						<h4>سرعت باد</h4>
						<h4>{windSpeed}</h4>
					</li>
				</ul>
			</div>
			</div>
		</section>
	);
};

export default WeatherInfo;
