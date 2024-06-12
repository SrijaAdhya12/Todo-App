import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';
import Footer from './Footer';

const Toodo = () => {
	const [todos, setTodos] = useState([]);
	const completedTodos = todos.filter((todo) => todo.done).length
	const totalTodos = todos.length
	return (
		<div>
			<Form todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
			<h1>
				<Footer completedTodos={completedTodos} totalTodos={totalTodos} />
			</h1>
		</div>
	);
};

export default Toodo


// const numbers = [10, 2, 3, 4]
// numbers.sort((a, b) => a - b); //assending order
// numbers.sort((a, b) => b - a); //decending order
