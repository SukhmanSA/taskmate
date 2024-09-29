//https://github.com/ShubhamSarda/taskmate-react// 

import "./App.css"
import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { ShowTask } from "./components/ShowTask"
import { useEffect, useState } from "react"

export default function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task,setTask] = useState({})
  const [theme,setTheme] = useState("")
  const [isUpdate,setIsUpdate] = useState(false)

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <div className={`App ${theme}`}>
    <div className="container">

      <Header theme={theme} setTheme={setTheme}/>

      <AddTask 
      taskList={taskList} 
      setTaskList={setTaskList}
      task={task} 
      setTask={setTask}
      isUpdate={isUpdate}
      setIsUpdate={setIsUpdate}/>

      <ShowTask 
      taskList={taskList} 
      setTaskList={setTaskList}
      task={task} 
      setTask={setTask}
      isUpdate={isUpdate}
      setIsUpdate={setIsUpdate}/>

    </div>
    </div>
  );
}