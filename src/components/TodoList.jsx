import React from 'react'
import Todoitem from './Todoitem'
import styles from './todolists.module.css'

const TodoList = ({todos , setTodos}) => {
    
	const sortedTodo = todos.slice().sort((a,b)=> (Number(a.done) - Number(b.done)))

	return (
		<div className={styles.list}>
			{sortedTodo.map((item) => (
				<Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />
			))}
		</div>
	);
};

export default TodoList