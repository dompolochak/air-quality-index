import React from 'react'
import {dotWave} from 'ldrs';
import './styles/LoadingPlaceHolder.css';
dotWave.register();

function LoadingPlaceHolder() {
  return (
    <div className='LoadingPlaceHolder'>
        <span className='Message'>Loading</span>
        <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>
    </div>
  )
}

export default LoadingPlaceHolder;
