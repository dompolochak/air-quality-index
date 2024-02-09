
import AirQuality from './AirQuality'
import React, {useState, useEffect} from 'react'
import {IAQIData} from './types/types'
import { fetchAQIByCoord } from './helpers/fetch-aqi-by-coord';
import { fetchAQIByCity } from './helpers/fetch-aqi-by-city';
import Search from './Search';
import './styles/PageWrapper.css';

function PageWrapper() {
    const [aqiData, setAqiData] = useState<IAQIData>();
    const [error, setError] = useState<boolean>(false);

    const onSubmit = async (searchTerm: string) => {
        const data = await fetchAQIByCity(searchTerm);

        if(data === undefined){
            setError(true);
        }
        else{
            setError(false);
            setAqiData(data); 
        }

        //setAqiData(data);
    }


    useEffect(()=> {
        async function getAQI() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(async position => {
                    const data = await fetchAQIByCoord(position.coords.latitude, position.coords.longitude);
                    setAqiData(data); 
                });
            }

        //    const response = await fetch(`https://api.waqi.info/feed/geo:${location.lat};${location.lng}/?token=edacc5e0a4971e082faf5c057fc0ffac947b2f75`); 
        //    const data = await response.json();
        //    setAqiData({
        //     aqi: data.data.aqi,
        //     city: data.data.city.name,
        //     lng: lng ?? data.data.city.geo[0],
        //     lat: lat ?? data.data.city.geo[1]
        }   
        getAQI();  
    },[]);
    return (
        <div className='PageWrapper'>
            <Search onSubmit={onSubmit}/>
            {aqiData && !error ?  <AirQuality aqiData={aqiData}/> : <span>Error!</span>}
        </div>
        
    )
}

export default PageWrapper;
