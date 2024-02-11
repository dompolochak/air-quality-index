import AirQuality from './AirQuality'
import {useState, useEffect, memo} from 'react'
import {IAQIData} from './types/types'
import { fetchAQIByCoord } from './helpers/fetch-aqi-by-coord';
import { fetchAQIByCity } from './helpers/fetch-aqi-by-city';
import Search from './Search';
import './styles/PageWrapper.css';
import LoadingPlaceHolder from './LoadingPlaceHolder';
import ErrorMessage from './ErrorMessage';



const PageWrapper = memo(function PageWrapper() {
    const [aqiData, setAqiData] = useState<IAQIData>();
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onSubmit = async (searchTerm: string) => {
        try{
            if(error){
                setError(false);
            }
            setIsLoading(true);
            const data = await fetchAQIByCity(searchTerm);
            setAqiData(data);
        }
        catch{
            setError(true);
        }
        finally{
            setIsLoading(false);
        }   
    }


    useEffect(()=> {
        async function getAQI() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(async position => {
                    try{
                        const data = await fetchAQIByCoord(position.coords.latitude, position.coords.longitude);
                        setAqiData(data); 
                    }
                    catch{
                        setError(true);
                    }
                    finally{
                        setIsLoading(false);    
                    }  
                });
            }
        }   
        getAQI();  
    },[]);

    return (
        <div className='PageWrapper'>
            <Search onSubmit={onSubmit}/>
            <div className='AirQualityContainer'>
                {isLoading ? <LoadingPlaceHolder/> : error || !aqiData ? <ErrorMessage/> : <AirQuality aqiData={aqiData}/>}
            </div>
            
        </div>
        
    )
});

export default PageWrapper;
