import React from 'react'
import './Card.css';

function Card (props) {

  function addSpacesToCardNumber(cardNumber) {
    return cardNumber.replace(/(\d{4})/g,'$1 ');
  }

  const lastTwoDigitsOfYear = props.yearExp.slice(-2);

  return (
   <>
   <div className='creditCard'>
    <div className='frontside'>
    <div className='circles'>
    <div className='big'></div>
     <div className='small'></div>
    </div>
    <div className='userNumber'>
    {props.userNumber?
     <div>{addSpacesToCardNumber(props.userNumber)}</div> :
      '0000 0000 0000 0000'
    }
    </div>
    <div className='dateOfExpiry'>
    <div>
    {props.userName?
    <div>{props.userName}</div>:
    "___.___"
    }
    </div>
    {props.monthExp && lastTwoDigitsOfYear ?  
     <div>{props.monthExp}/{lastTwoDigitsOfYear}</div>:
     '00/00'}
      </div>
    </div>
    <div className='backside'>
    <div className='strip'></div>

    <div className='showCVV'>
    {props.userCVV?
    <div className='cvvShowed'>{props.userCVV}</div>:
    <div className='cvvShowed'>000</div> 
    }
    </div>
    
    <p className='textLine1'>________  _____ __ _</p>
    <p className='textLine2'>__ _____  ________</p>  
    </div>
   
   </div>
   </>
  )
}

export default Card;