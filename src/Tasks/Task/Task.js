import React from 'react';

const task = (props) => {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">{props.title}
            <button type="button" className="close" onClick={() => props.clicked(props.id)} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        </div>
    )
}

export default task;