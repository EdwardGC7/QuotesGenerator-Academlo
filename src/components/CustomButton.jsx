import React from 'react'

const CustomButton = ({setPosition, setColor, color}) => {
  const nextValue=()=>{
    setPosition(Math.floor(Math.random()*100));
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  return (
    <div onClick={nextValue} className='customButton' style={{backgroundColor: color}}>
      <span>&gt;</span>
    </div>
  )
}

export default CustomButton