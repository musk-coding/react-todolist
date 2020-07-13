import React, { Component } from 'react';

import Task from './Task/Task';

class tasks extends Component {

    render () {
        return (
            <div className="mt-5">
                {
                    this.props.tasks.map((task) => {
                        return (
                            <Task title={task.title} key={task.id} id={task.id} clicked={this.props.clicked} />
                        )
                    })
                }
            </div>
        )
    }

}
export default tasks;