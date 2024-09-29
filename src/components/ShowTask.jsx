export const ShowTask = ({taskList,setTaskList,task,setTask,setIsUpdate}) =>{

    const handleEdit = (id) => {
        const selectedTask = taskList.find(task=> task.id === id)
        setTask(selectedTask)
        setIsUpdate(true)
    }

    const handleDelete = (id) =>{
        setTaskList(prevTasks => prevTasks.filter(tasks => tasks.id !== id))
    }

    return(
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll"onClick={()=> setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map((task)=>(
                <li key={task.id}>
                    <p>
                        <div className="name">{task.task}</div>
                        <span className="time">{task.date}</span>
                    </p>
                    <i onClick={()=> handleEdit(task.id)} className="bi bi-pencil-square"></i>
                    <i onClick={()=> handleDelete(task.id)} className="bi bi-trash"></i>
                </li>))}
            </ul>
        </section>
    )
}