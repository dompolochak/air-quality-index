import {memo} from 'react'
import './styles/ErrorMessage.css';

interface IProps{
  error: string
}

const ErrorMessage = memo(function ErrorMessage({error}:IProps) {
  return (
    <div className='ErrorMessage'>
      <span>{error}</span>
    </div>
  )
});

export default ErrorMessage;
