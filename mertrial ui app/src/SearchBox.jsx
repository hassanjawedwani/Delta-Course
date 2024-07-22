if(process.env.NODE_ENV !="production") {
  require('dotenv').config()
}
console.log(process.env.CLOUD_NAME);


import { Button, TextField } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox() {
  const [city, setCity] = useState("");

  // API_URL="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
  // CordinatesFinder="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

  const apiKey = process.env.API_KEY;

  const getWeatherInfo = async() => {
    fetch(`"http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}"`)
    .then(response => response.json().then(result => {
      console.log(result);
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo();
  }

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
    </div>
  );
}

export default SearchBox;
