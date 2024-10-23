import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { Todo } from './model';


const App:React.FC=()=> {

const [todo,setTodo]=useState<string>("");
const [todos,setTodos]=useState<Todo[]>([]);

const handleAdd=(e:React.FormEvent)=>{
e.preventDefault();
if(todo)
{
  setTodos([...todos,{id:Date.now(),todo,isDone:false}])
  setTodo("");
}

};

console.log(todo);

  return (
    <div className='App'>
      <h1>Todo with typescript</h1>
  <span>Todo</span>

  <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
 {todos.map((t)=>(
  <li>{t.todo}</li>
 ))}

  </div>
  );

}
export default App;














// let name:string;
// name="mayanksahu";

// let age:number|string;
// age=12;
// age="ds";
// function printname(name:string)
// {
//   console.log(name);
  
// }
// printname("mayank");
// let printlion:(name:string)=>void;
// // at last their is return type like void string number etc

// let hobbies:string[];

// // tuple 
// let role:[number,string];

// type Person={
//   name:string;
//   age?:number;
//   // ? mark means this is a optional to declare
// };
// let person:Person={
//   name:"Mayank",
//   age:22,
// }

// interface Persono{
//   name:string;
//   age?:number;
//   // ? mark means this is a optional to declare
// };