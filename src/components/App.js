import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask'
// import LoginForm from "./Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import initialData from '../initialData'
import uniqueid from 'uniqueid'
import Fetching from './Fetching'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const  LoginForm = () => {
  
    // Using a class based component here because we're accessing DOM refs
   
    // handleSignIn = (e) => {
    //   e.preventDefault();
    //   let username = this.refs.username.value
    //   let password = this.refs.password.value
    //   this.props.onSignIn(username, password)
    // }

    return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
    )  
}

class App extends React.Component{

    state = {
        tasks: [],
        fetching: true,
        user:null
    }
    componentDidMount = () => {
        let delay = Math.floor(Math.random() * 1000)
        setTimeout(() => {
          this.setState({
            fetching: false,
            tasks : initialData
          })
        }, delay)
      }

    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ?  taskToUpdate : task
            })
        ))
    }

    onAddTask = ({name,description,id_task}) => {
        console.log(" onAddTask ==> Name", name, "description ===>", description , '  id ==>',id_task);
        let newTask = {
            id: id_task,
            name: name,
            description: description,
            completed: false
        }

        console.log(" the new state is ==> ",newTask)
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
        console.log(" ==> liste des task ==> ", this.state.tasks);
    }

  
    onDeleteTask = (id_task) => {

        const newTasks = this.state.tasks.filter((task,i) =>  task.id!= id_task ); 
         this.setState({ tasks: newTasks });
        console.log(" ==> liste des task ==> ", newTasks);
    }

    onsignIn(username, password) {
        this.setState({
        user: {
            username,
            password,
        }
        })
    }

    signOut() {
        // clear out user from state
        this.setState({user: null})
    }

    render(){
        return(
            <section id="todo">
                {/* {this.state.fetching? <Fetching /> : null} */}
                <BrowserRouter>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                    
                    <Switch>
                        <Route exact path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route exact path="/" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} onDeleteTask={this.onDeleteTask} />} />
                        {/* <Route exact path="/Login" render = {(props) => <Login  {...props} SignIn={this.onSignIn} /> }/> */}
                    </Switch>
                    
                </BrowserRouter>
            </section>
        )
    }
}

export default App