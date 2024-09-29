import { useRef, useState } from "react"

export const AddTask = ({taskList,setTaskList,task,setTask,isUpdate,setIsUpdate}) =>{
    const taskRef = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const date = new Date();
        if(task.id){
            setIsUpdate(true)
         const updatedTaskList = taskList.map((todo)=>(
               todo.id === task.id ? {
                task:taskRef.current.value,
                date:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                id:task.id
            } : todo
            ))
           setTaskList(updatedTaskList) 
           setTask({})
           setIsUpdate(false)
           taskRef.current.value =""
        }else{
        const newTask = {
          task: taskRef.current.value,
          id: date.getTime(),
          date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        };
        taskRef.current.value =""
        setTaskList([...taskList, newTask]);

    }
    }

    return(
        <section className="addTask">        
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={isUpdate?"update task...":"add task..."} value={task.task}  ref={taskRef} autoComplete="off"  onChange={()=> setTask({...task,task:taskRef.current.value})}/>
                <button type="submit">{isUpdate?"Update":"Add"}</button>
            </form>
        </section>

    )
}