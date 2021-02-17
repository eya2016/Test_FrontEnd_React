import React from 'react'
import uuid from 'react-native-uuid'



class AddTask extends React.Component{


    handleSubmit = (e) => { 
        e.preventDefault();
        let id_task = uuid.v1();
        let name = this.newTaskName.value;
        let description = this.newTaskDescription.value ;
        this.props.onAddTask({name,description,id_task});
        this.props.history.push('/')
    }

    render(){
        return (
            <section>
                <h1 className="m-3">Créer une nouvelle tâche</h1>
                <div className="card mx-3">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="row">
                            <span className="col-md-4">
                                <label htmlFor="taskName" className="form-label">Nom de la tâche</label>
                                <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTaskName = input} />
                            </span>
                            <span className="col-md-4">
                                <label htmlFor="edescription" className="form-label">Description de la tâche en une ligne</label>
                                <input type="text" className="form-control" name="taskDescription" id="taskDescription" required ref={input => this.newTaskDescription = input} />
                            </span> 
                            <span className="col-md-3">
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3 bt-ajout" 
                                type="submit">
                                    Ajouter la Tâche
                                </button>
                            </div>
                            </span>
                            <span className="col-md-1"></span>
                        </div>
                    </form> 
                </div>
                <br/><br/><br/><br/><br/><br/>
            </section>
            
        )
    }
}

export default AddTask
