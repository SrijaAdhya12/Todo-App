import React from 'react'
import styles from './todoitem.module.css'

const Todoitem = ({ item , todos , setTodos }) => {
   function handleDelete(item) {
      console.log("delete button clicked for item", item)
      setTodos(todos.filter((todo) => todo !== item));
   }
   function handleClick(name) {
      setTodos(
				todos.map((todo) =>
					todo.name == name ? { ...todo, done: !todo.done } : todo
				)
			);

   }
   const className = item.done ? styles.completed : ""
  return (
		<div className={styles.item}>
        <div className={styles.itemName}>
           <span className={className} onClick={() => handleClick(item.name)}>
				{item.name}
           </span>
				<span>
					<button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
				</span>
			</div>
			<hr style={{ border: "1px solid #f4f4f4" }}></hr>
		</div>
	);
}

export default Todoitem

// let todos = [
// 	{ name: "lunch", done: false },
// 	{ name: "break", done: false },
// 	{ name: "dance", done: false },
// ];

// let name = "dinner"
// const newtodos = todos.map((todo) => todo.name == name ? {...todo, done: !todo.done} : todo)