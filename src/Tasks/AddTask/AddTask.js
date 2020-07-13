import React, { Component } from 'react';

class AddTask extends Component {

    state = {
        newTaskTitle: ''
    }

    setNewTaskTitle = (event) => {
        this.setState({ newTaskTitle: event.target.value });
    }

    render() {
        return (
            <div className="mt-5 form-group">
                <label htmlFor="newTask" className="float-left">New Task title</label>
                <input type="text" id="newTask" onChange={this.setNewTaskTitle} className="form-control" maxLength="50"></input>
                <button className="btn btn-primary btn-block float-left mt-1 " onClick={() => {this.props.clicked(this.state.newTaskTitle)}}>Add</button>
            </div>
        )
    }
}

export default AddTask;