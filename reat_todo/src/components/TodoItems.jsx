import React from 'react'
import tick from '../assets/tick.jpg'
import delete_icon from '../assets/delete_icon.png'

function TodoItems({text}) {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={tick} alt="tick" />
            <p className='text-slate-700 ml-4 text-[17px ]'>{text}</p>
        </div>
        <img src={delete_icon} alt="delete icon" className='w-7 cursor-pointer' />
      
    </div>
  )
}

export default TodoItems
