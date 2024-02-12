import {useMemo, memo} from 'react'
import {IAQIData} from './types/types'
import './styles/AirQuality.css';
import { getAQILevel } from './helpers/get-aqi-level';

interface IProps{
    aqiData: IAQIData
}
const AirQuality = memo(function AirQuality({aqiData}: IProps) {

    const [className, message] = useMemo(() => getAQILevel(aqiData.aqi), [aqiData])

  return (
    <>
        {aqiData && <div className='AirQuality'>
            <div className='AQIValue'>
                <h2>Air Quality Index</h2>
                <span className={className}>{aqiData.aqi}</span>   
                <span>{message}</span> 
            </div>
            <div className='LocationInfo'>
                <span><strong>Station: </strong>{aqiData.city}</span>
                <span><strong>Longitude: </strong>{aqiData.lng}</span>
                <span><strong>Latitude: </strong> {aqiData.lat}</span>  
            </div>  
        </div>}

    </>
  )
});

export default AirQuality;
