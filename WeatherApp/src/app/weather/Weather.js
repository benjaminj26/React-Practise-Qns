import React, { useState } from 'react';
import { temperatureFunction } from '../utils/temperatureFunction';
import '../../App.css'; // Import CSS file

const WeatherComponent = () => {
    const [temperature, setTemperature] = useState(25); // Default temperature in Celsius
    const [format, setFormat] = useState('Celsius');

    const handleFormatChange = (e) => {
        // UPDATE temprature format
        setFormat(e.target.value);

        // temperatureFunction(temperature, format);
    };

    const handleTemperatureChange = (e) => {
        // update temperature
        setTemperature(e.target.value);
        // temperatureFunction(temperature, format);
    };

    //   call TempratureFunction

    return (
        <div className="weather-container">
            <h2>Weather</h2>
            {/* display converted temprature  */}
            {/* provode temprature field and format drop down and call the respocted function on the change of drop down */}
            <input placeholder='Enter new temperature' onChange={handleTemperatureChange}></input>
            <select onChange={handleFormatChange}>
                <option value='Celsius'>Celsius</option>
                <option value='Fahrenheit'>Fahrenheit</option>
                <option value='Kelvin'>Kelvin</option>
            </select>

            <div>
                Temperature: {temperatureFunction(temperature, format)}
            </div>
            {/* <div>
                Temperature: {temperatureFunction(temperature, format)}
            </div> */}
        </div>
    );
};

export default WeatherComponent;
