import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {completeTodo, deleteTodo, editMode, editTodo} from '../../actions/todoActions'

const Todo = ({todo}) => {

    const [inputValue, setInputValue] = useState(todo.label);
    const dispatch = useDispatch(); // PASO 3: DEFINIR DISPATCH CON USEDISPATCH()
    const myInput = useRef(null)

    const handlerCheck = () => {
        dispatch(completeTodo(todo.id)); // PASO 4: DEFINIR FUNCION A EJECUTAR
    }

    const handlerDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    const handlerEditMode = () => {
        dispatch(editMode(todo.id));
    }

    const handlerEditTodo = (e) => {
        myInput.current.focus()
        if (e.key === 'Enter') {
            dispatch(editTodo(todo.id, inputValue));
            dispatch(editMode(todo.id));
        }
    }

    const handlerEditBlur = (e) => {
        if (e.key === 'Enter') {
            dispatch(editTodo(todo.id, inputValue));
            dispatch(editMode(todo.id));
        }
    }

    useEffect(() => {
      if (todo.editMode) {
          myInput.current.focus()
      }
    }, [todo.editMode])

    return (
        <div>
            <li 
            className={todo.complete ? 
            "todos-complete" 
            : ""}>  {/* PASO 5: LLAMAR DICHA FUNCION */}
            <input 
            type="checkbox" 
            checked={todo.complete ? 
            "checked" 
            : ""} 
            onChange={handlerCheck}/> 
            {todo.editMode ? 
            <input type="text" 
            onKeyPress={handlerEditTodo} 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handlerEditBlur}
            ref={myInput}/> 
            : <span onDoubleClick={handlerEditMode}>{todo.label}</span>}

            <button type="button" onClick={handlerDelete}></button>
            </li>
        </div>
    );
};

export default Todo;
