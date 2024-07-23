import { Button, TextField } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";
import InfoBox from "./InfoBox";

function SearchBox() {
  const [city, setCity] = useState("");
  const apiKey = "af3a13b1f4fc4120eafed54d6a59a0bf";
  const [geocodingDetails, setGeocodingDetails] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
    sea_level: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  });

  const getWeatherInfo = async () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    ).then((response) =>
      response.json().then((result) => {
        setGeocodingDetails([...result]);
      })
    );
  };
  const getWeatherDetails = async () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocodingDetails[0].lat}&lon=${geocodingDetails[0].lon}&appid=${apiKey}&units=metric`
    )
    .then((response) =>
      response
        .json()
        .then((result) => {
          setWeatherDetails({ ...result });
        })
        .catch((err) => console.log(err))
    )
  };

  const finalInfo = () => {
    setWeatherInfo({
      ...weatherDetails.main
    })
   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherInfo();
    await getWeatherDetails();
    finalInfo();
    console.log(weatherInfo)

  };

  return (
    <div>
      <div className="search-box">
        <h1>Search City for Weather</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
      {weatherInfo && <InfoBox data={weatherInfo} />}
    </div>
  );
}

export default SearchBox;
