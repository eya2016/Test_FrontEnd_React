import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask'
import Login from './Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import initialData from '../initialData'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            fetching: true,
            logged: false,
            user:{}
        }
        this.state.user = localStorage.getItem("user");
    }

    componentDidMount = () => {
        let delay = Math.floor(Math.random() * 1000)
        setTimeout(() => {
          this.setState({
            fetching: false,
            logged: this.props.logged,
            tasks : initialData
          });
       
        }, delay)
      }

    // mettre à jour l'etat de chaque task (completed or Not completed)
    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ?  taskToUpdate : task
            })
        ))
    }
   
    // mettre à jour l'etat des liste des tasks lors d'un nouvel Ajout
    onAddTask = ({name,description,id_task}) => {
        let newTask = {
            id: id_task,
            name: name,
            description: description,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }
 
    // mettre à jour l'etat des liste des tasks apres suppression
    onDeleteTask = (id_task) => {

        const newTasks = this.state.tasks.filter((task,i) =>  task.id!= id_task ); 
        this.setState({ tasks: newTasks });
    }
    

    render() {
        return(
            <section id="todo">
                <BrowserRouter>
                    <NavBar logged={this.state.logged} /> 

                    <Switch>
                        <Route exact path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route exact path="/" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} onDeleteTask={this.onDeleteTask} />} />  
                        <Route exact path="/login" render={(props) =><Login {...props} logged={this.state.logged} onLogged = {this.state.onLogged} />}  /> 
                    </Switch>
                    
                </BrowserRouter>
            </section>
        )
    }
}

export default App