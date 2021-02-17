import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({tasks, match, onToggleCompleted,onDeleteTask}) => {
    let filteredTasks

    switch (match.params.filter){
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
        break;
        default: 
            filteredTasks = tasks
    }

    if(filteredTasks.length === 0){
        return (
            <section>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tâche à afficher</li>
                </ul>
            </section>
        )
    } else {
        return (
            <section>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => <ToDo task={task} tasks={tasks} key={task.id} onToggleCompleted={onToggleCompleted} onDeleteTask={onDeleteTask} />)
                    }
                </ul>
            </section>
        )
    }  
}

export default ToDoList