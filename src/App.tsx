import React,{FC,ChangeEvent,useState} from 'react';
import logo from './logo.svg';
import './App.css'
import {Itask} from './Interface'
import TodoTask from './components/TodoTask';

const App:FC = ()=> {
  const [task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0)
  const [todo,setTodo]=useState<Itask[]>([])
  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==="task"){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
       
  }
  const addTask=():void=>{
    const newTask={taskName:task,deadline:deadline};
      setTodo([...todo,newTask])
      setTask("")
      setDeadline(0)
  }
  const completeTask = (taskNameToDolist:string):void => {
    setTodo(todo.filter((task)=>{
       return task.taskName !=taskNameToDolist
    }))
  };
  return (
    <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Task..." onChange={handleChange} name="task" value={task}/>
            <input value={deadline} type="number" placeholder="Deadline (in Days)..." onChange={handleChange} name="deadline" />
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todolist">
            {
              todo.map((task:Itask, key:number)=>{
                return <TodoTask key={key} task={task} completeTask={completeTask}/>
              })
            }
        </div>
    </div>
  );
}

export default App;
