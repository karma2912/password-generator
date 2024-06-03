import React from 'react'

export default function Lowerblock() {
  return (
    <>
    <div className='main-lower'>
      <div className="firstHalf">
      <span className='char'>
     Character Length
    </span>
    <span className="num-output">
     
    </span>
      </div>
      <div className='container'>
        <input type='range' className='range'></input>
        </div>
        <div className='secondHalf'>
     <div className='check-boxes'>
      <input type='checkbox' className='check'/>Include Uppercase Letter<br/>
      <input type='checkbox' className='check'/>Include Lowercase Letter<br/>
      <input type='checkbox' className='check'/>Include Symbols<br/>
      <input type='checkbox' className='check'/>Include Numbers<br/>
        </div>
        </div>
        <div className='outer-inner-block'>
        <div className='inner-block'>
          <span className='strength'>STRENGTH</span>
          <span className='out-level'>MEDIUM
          <div className='level'></div>
          <div className='level'></div>
          <div className='level'></div>
          </span>
          </div>
        </div>
        <div className='btn'>
        <button className='generate'>Generate</button>
        </div>
        </div>
     </>
  )
}
