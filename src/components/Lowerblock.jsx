import React, { useEffect } from 'react'
import { useState } from 'react'
import Upperblock from './Upperblock'

export default function Lowerblock() {
  const [rangeValue, setRangeValue] = useState(0)
  const [upperCase,setUppercase] = useState(false)
  const [lowerCase,setLowercase] = useState(false)
  const [symbo,setSymbo] = useState(false)
  const [numo,setNumo] = useState(false)
  const [elevel,setElevel] = useState('black')
  const [mlevel,setMlevel] = useState('black')
  const [hlevel,setHlevel] = useState('black')
  const [level,setlevel] = useState('EASY')
  const handleRangeChange =(e)=>{
    setRangeValue(e.target.value)
  }
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerSet = "abcdefghijklmnopqrstuvwxyz"
  const symbols = "!@#$%^&*()_"
  const numbers = "1234567890"

  const funcUpper=()=>{
    setUppercase(!upperCase)
  }
  const funcLower=()=>{
    setLowercase(!lowerCase)
  }
  const funcSym=(event)=>{
    setSymbo(!symbo)
  }
  const funcNum=(event)=>{
    setNumo(!numo)
  }

  const generatedata=(dataSet)=>{
   return dataSet[Math.floor(Math.random()*dataSet.length)]
  }

  const generatePass=(password="")=>{
     if(upperCase){
      password+=generatedata(upperSet)
     }
     if(lowerCase){
      password+=generatedata(lowerSet)
     }
     if(numo){
      password+=generatedata(numbers)
     }
     if(symbo){
      password+=generatedata(symbols)
     }
     if(password.length<=rangeValue){
      return generatePass(password)
     }
     localStorage.setItem('rangeValue',rangeValue)
     const finalPass = password.slice(0,rangeValue)
    localStorage.setItem("output",finalPass)
  }
 const buttonChanged=()=>{
  generatePass();
  setLowercase(false)
  setUppercase(false)
  setNumo(false)
  setSymbo(false) 
 }
 

 
return (
    <>
    <Upperblock/>
    <div className='main-lower'>
      <div className="firstHalf">
      <span className='char'>
     Character Length
    </span>
    <span id = "num-output" className="num-output">
     {`${rangeValue}`}
    </span>
      </div>
      <div className='container'>
      <input type='range'
      min=""
      max="20"
      value={rangeValue} 
      step="1"
      onChange={handleRangeChange}
    />
        </div>
        <div className='secondHalf'>
     <div className='check-boxes'>
      <input type='checkbox' id="Upper" checked={upperCase} onChange={funcUpper} className='check'/>Include Uppercase Letter<br/>
      <input type='checkbox' id="Lower" checked={lowerCase} onChange={funcLower} className='check'/>Include Lowercase Letter<br/>
      <input type='checkbox' id="Sym" checked={symbo} onChange={funcSym} className='check'/>Include Symbols<br/>
      <input type='checkbox' id="Num" checked={numo} onChange={funcNum} className='check'/>Include Numbers<br/>
        </div>
        </div>
        <div className='outer-inner-block'>
        <div className='inner-block'>
          <span className='strength'>STRENGTH</span>
          <span className='out-level'>{`${rangeValue<=8?"Easy":"Moderate" && rangeValue>=15?"Hard":"Moderate"}`}
          </span>
          </div>
        </div>
        <div className='btn'>
        <button onClick={buttonChanged}className='generate'>Generate</button>
        </div>
        </div>
     </>
  )
}
