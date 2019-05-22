import React from 'react';

const Todo = ({ todo, remove }) => (
    <div class="row">
        <div className="column">{todo.text}</div>
        <div className="column">
            <button onClick={()=> {remove(todo.id)}} className="button button-outline">Done!</button>
        </div>
    </div>
);

export default Todo;