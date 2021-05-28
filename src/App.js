import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import ListCo from "./components/ListCo";

function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);

	return (
		<div className="App">
			<Form
				input={input}
				setInput={setInput}
				todos={todos}
				setTodos={setTodos}
				editTodo={editTodo}
				setEditTodo={setEditTodo}
			/>
			<ListCo
				todos={todos}
				editTodo={editTodo}
				setTodos={setTodos}
				setEditTodo={setEditTodo}
			/>
		</div>
	);
}

export default App;
