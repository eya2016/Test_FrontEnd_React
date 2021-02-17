import React ,{ useState } from 'react'

class ToDo extends React.Component{

    state = {
        completed: this.props.task.completed,
        tasks : this.props.tasks
    }

    toggleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    onDeleteTask (id_task) {
        
        let tasks = this.state.tasks;
        const newTasks = this.state.tasks.filter((task,i) =>  task.id!= id_task ); 
        this.setState({ tasks: newTasks })
        this.props.onDeleteTask(this.props.task.id)
    }

    render(){
        return (
            <li className="list-group-item d-flex align-tiems-center">
                <strong className='task-name' >{this.props.task.name}</strong> :<span className='task-desc'>  {this.props.task.description} </span> 
                <span className='task-delete' onClick={() => this.onDeleteTask(this.props.task.id)} >supprimer</span>
                <button className={"btn btn-sm ml-auto " + (this.state.completed? 'btn-success': 'btn-danger')} onClick={() => this.toggleCompleted()}>
                {(
                    this.state.completed? 
                <span>completed</span> : <span>Not completed</span>
                )}
                </button>
            </li>
        )
    }
}

export default ToDo