import React, { useEffect, useRef, useState } from "react";
import title from '../assets/title.png'
import TodoItems from "./TodoItems";

function Todo() {
  const [todoList , setTodoList]=useState([])
  const inputRef=useRef()
  function add(){
      const inputText=inputRef.current.value;
      if(inputText===""){
        return null
      }
      const newTodo={
        id:Date.now(),
        text:inputText,
        isComplete:false
      }
      setTodoList((prev)=>[...prev,newTodo]);
      inputRef.current.value=" "

  }
  function delete_todo(id){
    setTodoList((prvTods)=>{
      return prvTods.filter((todo)=>todo.id!==id)
    })
  }
  function toggle(id){
    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id==id){
          return {...todo,isComplete:!todo.isComplete}
        }
        return todo
      })
    })
  }
  useEffect(()=>{
    // console.log(todoList);
    localStorage.setItem("todos", JSON.stringify(todoList))
    
  },[todoList])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl">

{/* -------------------------------title----------------------------------- */}
      
      <div className="flex items-center mt-7 gap-2">
        <img src={title} alt="Todo " className="w-10" />
        <h1 className="text-3xl font-semibold">Todo List</h1>
      </div>

{/* ----------------------------------input-box----------------------------------------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input 
        ref={inputRef}
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        type="text" placeholder="Enter a Task..." />
        <button onClick={add} className="border-none  rounded-full bg-orange-600 w-32 h-14  text-white text-lg font-medium
        cursor-pointer">New Task</button>
      </div>

{/* ----------------------------------Todo-list----------------------------------------- */}
      <div>
        {
          todoList.map((item,index)=>{
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} delete_todo={delete_todo} toggle={toggle}/>
          })
        }

      </div>

    </div>
  );
}

export default Todo;
