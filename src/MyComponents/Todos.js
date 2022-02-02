import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
    margin: "10px auto",
  }
  const empty = <h4> No todos to Display</h4>  //implemented JSX 
  return(
    <div className='container' style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
        {props.todos.length===0 ? empty : props.todos.map((todo) => {
           return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
        })}
    </div>
  );
};
