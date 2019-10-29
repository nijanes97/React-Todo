import React from 'react'

const TodoForm = props => {
    return(
        <form>
            <input
                onChange={props.changeTodo}
                type='text'
                name='todo'
                value={props.value}
                placeholder='...add a task'
            />
            <button onClick={props.addTodo}>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;