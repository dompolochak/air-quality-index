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
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const onSubmit = async (searchTerm: string) => {
        try{
            if(error){
                setError('');
            }
            setIsLoading(true);
            const data = await fetchAQIByCity(searchTerm);
            setAqiData(data);
        }
        catch{
            setError('Unable to load AQI for this location');
        }
        finally{
            setIsLoading(false);
        }   
    }


    useEffect(()=> {
        (function getAQI() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(async position => {
                    //Success callback
                    try{
                        const data = await fetchAQIByCoord(position.coords.latitude, position.coords.longitude);
                        setAqiData(data); 
                    }
                    catch{
                        //if fetch fails
                        setError('Unable to load AQI for this location');
                    }
                    finally{
                        setIsLoading(false);   
                    }
                }, 
                //Error callback (for getCurrentPosition)
                ()=> {
                    setError('Location settings turned off: Try searching for a city');
                    setIsLoading(false);
                });
            }
            else{
                setError('Geolocation is not supported by this browser');
                setIsLoading(false); 
            }        
        })();   
    },[]);


    return (
        <div className='PageWrapper'>
            <Search onSubmit={onSubmit}/>
            <div className='AirQualityContainer'>
                {isLoading ? <LoadingPlaceHolder/> : error || !aqiData ? <ErrorMessage error={error}/> : <AirQuality aqiData={aqiData}/>} 
            </div>
            
        </div>
        
    )
});

export default PageWrapper;
