import React from 'react';
import TodoForm from './../todoForm/TodoForm';
import TodoList from '../todoList/TodoList';
import {useSelector, useDispatch} from 'react-redux';
import { clearComplete } from '../../actions/todoActions';

const TodoPages = () => {

    const todosList = useSelector((state) => state.todosList);
    const completes = todosList.filter(todo => todo.complete);

    const dispatch = useDispatch()

    const handlerCompletes = () => {
        dispatch(clearComplete())
    }

    return (
            <div className="todos">
                <div className="todos-header">
                    <h3 className="todos-title">TODO LIST</h3>
                    <div>
                        <p id="par">You have <span className="todos-count"></span> Items to do!! </p>
                        {completes.length > 0 ? (
                            <button type='button' className='todos-clear' onClick={handlerCompletes}>Remove completed items</button>    
                            ) : ""}
                    </div>
                </div>
                <TodoForm />
                <TodoList todos={todosList}/>
            </div>
    )
}

export default TodoPages
