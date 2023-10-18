import React,{useState} from "react";
const App = () =>{
  const[lat,setLat]=useState(null)
  const[long,setLong]=useState(null) 
  const[hemisphere,setHemisphere]=useState(null)
  const[month,setMonth]=useState(new Date().getMonth()+1) 

  function getLocation(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)

        if(position.coords.latitude>0){
          setHemisphere("Northern Hemisphere")
        }
        else if(position.coords.longitude<0){
          setHemisphere("Southern Hemisphere")
        }
        else{
          setHemisphere("Equator") 
        }
      }
    ) 
  }
  return(
  <div>
    <h1>Weather App</h1>
    <h2>Latitude :{lat}</h2>
    <h2>Longitude :{long}</h2>
    <h2>Hemisphere :{hemisphere}</h2> 
    <h2>Month :{month}</h2> 
    <button onClick={getLocation}>Get Location</button> 
  </div>
  );
}
export default App; 