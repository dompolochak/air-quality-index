import {memo} from 'react'
import './styles/ErrorMessage.css';

const ErrorMessage = memo(function ErrorMessage() {
  return (
    <div className='ErrorMessage'>
      <span>Unable to load AQI data for this location</span>
    </div>
  )
});

export default ErrorMessage;
