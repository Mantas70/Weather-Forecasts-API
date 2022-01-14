const Forecasts = (location) =>{

     fetch(`https://api.meteo.lt/v1/places/${location}/forecasts/long-term`)
        .then(response => response.json())
        .then(data => console.log(data));

   return(
       <>

       </>
   )
}
export default Forecasts;