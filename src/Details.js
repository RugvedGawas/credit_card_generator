import React, {useState}from 'react'
import './Details.css';
import Card from './Card';

function Details() {

let [values, setValues] = useState({
  holderName:'',
  cardNumber:'',
  expiryMonth:'',
  expiryYear:'',
  cvvNumber:''
})


let [submittedValues, setSubmittedValues] = useState({
  holderName:'',
  cardNumber:'',
  expiryMonth:'',
  expiryYear:'',
  cvvNumber: ''
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
  
  let cvvConsole = e.target.cvvNumber.value


  if(hName.length===0||cNumber.length===0||cvvConsole.length===0){
    setErrorText(true)
    return
  }if(cNumber.length<16)
  {
     setErrorText(true)
     return
  }if(cvvConsole.length<3)
  {
     setErrorText(true)
     return
  }
  // if(expMonth===0){
  //   setErrorText(true)
  //   return
  // }if(expYear===0){
  //   setErrorText(true)
  //   return
  // }
  else{
    let {name, value} = e.target;
    setSubmittedValues({ 
      ...values,
      [name]: value
    });

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
  console.log(hName, cNumber, cvvConsole);

}
 

 

}



  return (
    <>
    <div className='details'>
    <div className='cardContainer'>
    <Card className='creditCard' userName={submittedValues.holderName} userNumber={submittedValues.cardNumber} monthExp={submittedValues.expiryMonth} yearExp={submittedValues.expiryYear} userCVV={submittedValues.cvvNumber}/>
    </div>
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
          <select className='month' name='expiryMonth' value={values.expiryMonth} onChange={changeHandler}   required>
          <option value="" style={{display:'none'}}>MM</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jul</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        
          <select className='year' name='expiryYear' value={values.expiryYear} onChange={changeHandler}  required>
          <option value="" name=""style={{display:'none'}}>YY</option>
          <option value="1">2023</option>
          <option value="2">2024</option>
          <option value="3">2025</option>
          <option value="4">2026</option>
          <option value="5">2027</option>
          <option value="6">2028</option>
          <option value="7">2029</option>
          <option value="8">2030</option>
          <option value="9">2031</option>
          <option value="10">2032</option>
          <option value="11">2033</option>
          <option value="12">2034</option>
          <option value="13">2035</option>
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
            {errorText&&values.cvvNumber.length<3? <span className='errorMessage'>'This field is required with valid details'</span>:""}
        </div>
        </div>
        <div>
          <button>CONFIRM</button>
        </div>
      </form>
    </div>
     
    </div>
   
    
    </>
  )
}

export default Details
