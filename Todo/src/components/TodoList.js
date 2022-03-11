import React, { useContext } from 'react'
import { MainContext } from '../context'

const TodoList = () => {
  const {todos, removeTodo} = useContext(MainContext)
  return (
    <div className='list-container'>
      <ul >{
          todos.map((todo) =>  <li className='list'>{todo.title}
          <i
          onClick={() => removeTodo(todo.id)}
          className="far fa-trash-alt"
          ></i>
           </li>)
        }
        
      </ul>
    </div>
  )
}

export default TodoList