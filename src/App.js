import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity,setInputCity] = useState("")
  const [data,setData] = useState({});

  const getWetherDetails = (cityName) =>{
    if(!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey

    axios.get(apiURL).then(
    (res) =>{
      console.log("response",res.data);
      setData(res.data)
    }).catch((err) =>{
      console.log("error",err);
    })
    
  }
  const handleChangeInput = (e) =>{
    setInputCity(e.target.value)

  }
  const handleSearch  = () =>{
  getWetherDetails(inputCity)  

}

useEffect(() =>{
getWetherDetails("Delhi");
}, [])
  return (
<div className="col-md-12">

  <div className="wetherBg">
  <h1 className="heading">Weather App</h1>
     <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" onChange={handleChangeInput} />
    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button> 
    </div>
   </div>
   <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded wetherResultBox">
      <img className="weatherIcon"
       src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
       <h5 className="weathorCity">
        {data?.name}
       </h5>
       <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>


    </div>

   </div>

</div>          
  );
}

export default App;
