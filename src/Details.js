import React, {useState}from 'react'
import './Details.css';

function Details() {

let [values, setValues] = useState({
  holderName:'',
  cardNumber:'',
  expiryMonth:'',
  expiryYear:'',
  cvvNumber:''
})



let [errorText, setErrorText ] = useState(false);

const changeHandler = (e) =>{
  let {name, value} = e.target;


  setValues({ 
    ...values,
    [name]: value
  })

 
}



function handleSubmit(e) {
  e.preventDefault();
  
  let hName = e.target.holderName.value;
  let cNumber = e.target.cardNumber.value;
  let expMonth = e.target.expiryMonth.value;
  let expYear = e.target.expiryYear.value;
  let cvvConsole = e.target.cvvNumber.value

  if(hName.length===0||cNumber.length===0||cvvConsole.length===0){
    setErrorText(true)
    return
  }if(cNumber.length<16)
  {
     setErrorText(true)
     return
  }
  else{
    setValues({
      holderName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear:'',
      cvvNumber: '',
    });
 
    setErrorText(false)
  }
 
if(hName&&cNumber&&cvvConsole){
  console.log(hName, cNumber, expMonth, expYear,cvvConsole);

}
 

 

}



  return (
    <>
    <div className='main'>
      <form
      onSubmit={handleSubmit}
      >
        <div className='holderName'>
            <label>CARDHOLDER NAME</label><br/>
            <input
           className='holderInput'
           type='text'
           onInput={(e)=>e.target.value = e.target.value.replace(/[^\w\s]/gi, '')}
           name='holderName'
           value={values.holderName}
           onChange={changeHandler}
            />
   {errorText&&values.holderName.length<=0? <span className='errorMessage'>'This field is required with valid details'</span>:""}
        </div>
        <div className='cardNumber'>
            <label>CARD NUMBER</label><br/>
            <input
            className='numberInput'
            type='text'
           pattern='[0-9]*'
            onInput={(e) => (e.target.value = e.target.value.replace(/[^\d]/, ''))}
           name='cardNumber'
           value={values.cardNumber}
           onChange={changeHandler}
           maxLength={16}
            />
        {errorText&&values.cardNumber.length<16? <span className='errorMessage'>'This field is required with valid details'</span>:""}
        </div>
        <div className='otherInfo'>
        <div className='date'>
        <label>EXP. DATE(MM/YY)</label><br/>
          <select className='month' name='expiryMonth' value={values.expiryMonth} onChange={changeHandler} required>
          <option style={{display:'none'}}>MM</option>
            <option name=''>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>october</option>
            <option>November</option>
            <option>December</option>
          </select>
        
          <select className='year' name='expiryYear' value={values.expiryYear} onChange={changeHandler} required>
          <option name="YY"style={{display:'none'}}>YY</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
          <option>2032</option>
          <option>2033</option>
          <option>2034</option>
          <option>2035</option>
          </select>

        </div>
        <div className='cvv'>
        <label>CVV</label><br/>
          <input 
           className='inputCVV'
           name='cvvNumber'
           value={values.cvvNumber}
           onChange={changeHandler}
           type='text'
           pattern='[0-9]*'
            onInput={(e) => (e.target.value = e.target.value.replace(/[^\d]/, ''))}
            maxLength={3}
          />
            {errorText&&values.cvvNumber.length<=0? <span className='errorMessage'>'This field is required with valid details'</span>:""}
        </div>
        </div>
        <div>
          <button>CONFIRM</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Details
