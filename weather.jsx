
import React , {useRef,useEffect, useState} from 'react';
import './weathercss.css';
import dateBuilder from './getDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from './images/Clear.png';
import Clear from './images/Clear.jpg';
import Clouds from './images/Cloud.jpg';
import Cyclone from './images/Cyclone.jpeg';
import Drizzling from './images/Drizzling.jpg';
import Haze from './images/Haze.jpeg';
import Lightning from './images/Lightning.jpeg';
import  Rain from './images/Rain.jpeg';
import  Storm  from './images/Storm.jpg';
import Snow from './images/Snow.jpeg';
import earth from './images/earth.png';


import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';
import forcast from './getDate2';

import forcast_2 from './getDate3';
import forcast_3 from './getDate4';
import forcast_4 from './getDate5';

 

  

const base="https://api.openweathermap.org/data/2.5/forecast?&appid=0942b9368d6b67c654daa1016537f63e&units=metric";


const contNmae=document.querySelector(".con");
const input=document.querySelector("input");
const container= document.querySelector(".weather-container");



  
  
const Weather = ()=>{
    const inputRef=useRef()
    const inputRef2=useRef()

   const [weatherData, setWeatherData]= useState(false);
   const allIcon={
    "Clear":Clear,
    "Clouds":Clouds,
    "Cyclone":Cyclone,
    "Drizzling":Drizzling,
    "Haze":Haze,
    "Lightning":Lightning,
    "Rain":Rain,
    "Strom":Storm,
    "Snow":Snow,
    "09n":Rain,
    }
   
    const search= async (cityName)=>{
         try{
            const url=base;
            const Response= await fetch(url+`&q=${cityName}`);
             const data =  await Response.json();
             console.log(data);
             
             const icon=allIcon[data.list[0].weather[0].main] ||Clouds;
             setWeatherData({
                city:data.city.name + ' ,',
                country:data.city.country,

                temperature: Math.round(data.list[0].main.temp)+" °C",
                details: data.list[0].weather[0].main,
                temp1:Math.round(data.list[3].main.temp)+" °C",
                temp2:Math.round(data.list[11].main.temp)+" °C",
                temp3:Math.round(data.list[19].main.temp)+" °C",
                temp4:Math.round(data.list[27].main.temp)+" °C",
                details1: data.list[3].weather[0].main,
                details2: data.list[11].weather[0].main,
                details3: data.list[29].weather[0].main,
                details4: data.list[27].weather[0].main,
                icon:icon,

             })
             

         }catch(error){

         }

        
    }
    

    useEffect(()=>{
        search("gwalior");
    },[])

    
    
   
    


    

    
    



    return(
        <div className="main-container  ">
            
            
            <div className="w-container rounded-start-4 mt-1 container">
                <div className="row rounded-start-2">
                    <div style={{
                        backgroundImage:`url(${weatherData.icon})`,
                        backgroundSize:"cover",
                         backgroundPosition:"center",    
                        
                    }}
                     className="col-1 col-1s weather-container rounded-start-2">
                        <div className="text-123 container">
                            <h3 className="area">{weatherData.city} </h3><span className='con'>{weatherData.country}</span>
                            
                            </div>

                            <div className="text-2 container ">
                            
                            <h1 className='tempr'>{weatherData.temperature}</h1>
                            <p className="dates ">{dateBuilder(new Date())}</p>
                            </div>
                        

                    </div>

                    <div className="col-2s container py-sm-0 px-sm-0 ">
                        <div className="img container">
                        <img src={sun} alt="" className="sun image-fluid col-sm-9 col-lg-12 mt-sm-4 ms-lg-3 ms-xl-5 ms-md-3 ms-sm-3" />
                    
                        </div>
                        <div className="weather">
                            <h2 className='weather-detail'>{weatherData.details}</h2>
                        </div>
                        <div  className="input col-sm-8">
                            <input ref={inputRef} type="text" className='col-sm-8' placeholder='enter city name' /><FontAwesomeIcon onClick={()=>search(inputRef.current.value)}  className='search  col-sm-5 pxy-0 mx-0' icon={faSearch} />
                        </div>
                        <div className="date-forcast container">
                            <p className="forcast"><span className='f-day-1 f-day me-xl-3'>{forcast(new Date())}</span><span className="f-temp-1 me-xl-3">{weatherData.temp1}</span><span className="f-details-1">({weatherData.details1})</span></p>
                            <p className="forcast"><span className='f-day-2 f-day me-xl-4'>{forcast_2(new Date())}</span><span className="f-temp-2 me-xl-3">{weatherData.temp1}</span><span className="f-details-2">({weatherData.details2})</span></p>
                            <p className="forcast"><span className='f-day-3 fday me-xl-3'>{forcast_3(new Date())}</span><span className="f-temp-3 me-xl-3">{weatherData.temp1}</span><span className="f-details-3">({weatherData.details3})</span></p>
                            <p className="forcast"><span className='f-day-4 f-day me-xl-4'>{forcast_4(new Date())}</span><span className="f-temp-4 me-xl-3">{weatherData.temp1}</span><span className="f-details-4">({weatherData.details4})</span></p>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </div>


    )
}

export default Weather ;

