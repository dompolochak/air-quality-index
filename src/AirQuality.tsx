import React, {useState, useEffect, useMemo} from 'react'
import {IAQIData} from './types/types'
import './styles/AirQuality.css';
import { getAQILevel } from './helpers/get-aqi-level';

interface IProps{
    aqiData: IAQIData
}
function AirQuality(props: IProps) {
    const {aqiData} = props;

    const [className, message] = useMemo(() => getAQILevel(aqiData.aqi), [aqiData])

  return (
    <>
        {aqiData && <div className='AirQuality'>
            <div className='AQIValue'>
                <span className={className}>{aqiData.aqi}</span>   
                <span>{message}</span> 
            </div>
            <div className='LocationInfo'>
                <span>{aqiData.city}</span>
                <span>{aqiData.lng}</span>
                <span>{aqiData.lat}</span>  
            </div>  
        </div>}

    </>
  )
}

export default AirQuality;
