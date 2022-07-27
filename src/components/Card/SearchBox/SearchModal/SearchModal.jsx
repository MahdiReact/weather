import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { WeatherClass } from "../../../../service/weather";
import { toggleModal } from "../../../../store/searchModal";
import { setWeather } from "../../../../store/weatherSlice";
import "./searchModal.css";

const SearchModal = () => {
	const [city, setCity] = useState("");
	const dispatch = useDispatch();

	const handleChangeLocation = (event) => {
		event.preventDefault();
		const weather = new WeatherClass(city);
		weather.getWeather()
			.then((res) => {
				dispatch(setWeather(res));
				localStorage.setItem(
					"weather",
					res.name
				);
			})
			.catch((err) => console.log(err));
		dispatch(toggleModal());
	};

	return createPortal(
		<section className="modal-container">
			<div className="modal">
			<button className="fa fa-times close" onClick={() => dispatch(toggleModal())}></button>
				<form onSubmit={handleChangeLocation}>
					<h4>
						شهر مورد نظر خود را
						وارد کنید
					</h4>
					<br />
					<input
						placeholder="city...?"
						value={city}
						onChange={(e) =>
							setCity(
								e
									.target
									.value
							)
						}
					/>
					<button type="submit">
						<i className="fa fa-search" />
					</button>
				</form>
			</div>
		</section>,
		document.getElementById("modal-root")
	);
};

export default SearchModal;
