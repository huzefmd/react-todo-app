import React from 'react'
import tick from '../assets/tick.jpg'
import delete_icon from '../assets/delete_icon.png'
import notDone from '../assets/notDone.png'

function TodoItems({text,id,isComplete,delete_todo,toggle}) {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}}  className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete? tick :notDone} alt="tick" />
            <p className={`text-slate-700 ml-4 text-[17px ] ${isComplete ? "line-through":""}`}>{text}</p>
        </div>
        <img onClick={()=>{delete_todo(id)}} src={delete_icon} alt="delete icon" className='w-7 cursor-pointer' />
      
    </div>
  )
}

export default TodoItems
