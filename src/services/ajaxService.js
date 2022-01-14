const ajaxService = (city) =>{
    const url = "https://api.meteo.lt/v1/places/";
    const cast = "forecasts"
    const term = "long-term"
    return fetch(`${url}${city}${cast}${term}`)
        .then(response => response.json())
}
export default ajaxService;