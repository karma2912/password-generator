import React, { useEffect } from 'react'
export default function Upperblock(props) {
  useEffect(()=>{
    localStorage.removeItem('output')
  },[])
  const output = localStorage.getItem('output')
  return (
    <>
    <div className='upper'>
    <div className='output'>
    {`${output===null?"":output}`}
    </div>
    <div className='copy-btn'>
    
    </div>
    </div>
    </>
  )
}
