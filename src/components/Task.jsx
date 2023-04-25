import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../actions/taskActions';

const Task = ({ task }) => {
const dispatch = useDispatch();

const handleToggle = () => {
dispatch(toggleTask(task.id));
};

const handleEdit = (e) => {
e.preventDefault();
const newDescription = e.target.elements.description.value;
dispatch(editTask(task.id, newDescription));
};

return (
<div>
    <div className='check'>
<input type="checkbox" checked={task.isDone} onChange={handleToggle} />
<span>{task.description}</span></div>
<form onSubmit={handleEdit}>
<input type="text" name="description" defaultValue={task.description} />
<button type="submit">Edit</button>
</form>
</div>
);
};

export default Task;