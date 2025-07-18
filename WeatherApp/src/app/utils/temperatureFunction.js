// temperatureFunction.js
export const temperatureFunction = (temperature, format) => {
  // check temprature formate write convertion formula to convert.
  // return temprature to use it in weather component
  
  if (format.toLowerCase() === 'kelvin') {
    return `${273.15 + temperature}K`
  } else if (format.toLowerCase() === 'fahrenheit') {
    return `${ parseFloat((temperature * 9 / 5) + 32).toFixed(2) }°F`
  } else {
    return `${temperature}°C`
  }
};
