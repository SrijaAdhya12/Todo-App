import React from 'react'
import { useState } from 'react';
import styles from './form.module.css'

const Form = ({todos,setTodos}) => {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name:"", done:false});
     
    function handleSubmit(e) {
			e.preventDefault();
			setTodos([...todos, todo]);
			setTodo({ name:"", done:false});
		}
  return (
		<form className={styles.todoform} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<input
					className={styles.moderninput}
					onChange={(e) => setTodo({name:e.target.value})}
					value={todo.name}
					type="text"
					placeholder="Enter todo item"
				/>
				<button className={styles.mordernButton} type="submit">
					Add
				</button>
			</div>
		</form>
	);
}

export default Form