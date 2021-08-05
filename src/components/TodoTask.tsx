import { cpuUsage } from 'process';
import React from 'react';
import {Itask} from "../Interface"
interface Props{
    task:Itask,
    completeTask(taskNameToDolist:string):void;

}
const TodoTask = ({task,completeTask}:Props) => {

    return (
        <div className="task">
           <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
           </div>
           <button onClick={()=>completeTask(task.taskName)}>Remove</button>
        </div>
    );
};

export default TodoTask;