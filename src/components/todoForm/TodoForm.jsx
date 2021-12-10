import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './../../actions/todoActions';

const TodoForm = () => {

    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));
    };


    return (
        <form action="" className="todos-form" name="todos" onSubmit={handlerSubmit}>
            <input type="text" placeholder="What will you do?" value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="todo"/>
            <small>Write your items!</small>
        </form>
    )
}

export default TodoForm;
