import React from "react";
import "../App.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";

const ListCo = ({ todos, setTodos, setEditTodo }) => {
	const handleDelete = ({ id }) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleComplete = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleEdit = ({ id }) => {
		const findTodo = todos.find((todo) => todo.id === id);
		setEditTodo(findTodo);
	};

	return (
		<List className="list" dense={true}>
			{todos.map((todo) => (
				<Paper
					style={{
						margin: "5px 0",
					}}
				>
					<ListItem key={todo.id} role={undefined} dense button>
						<ListItemIcon>
							<Checkbox
								edge="start"
								tabIndex={-1}
								disableRipple
								inputProps={{ "aria-labelledby": todo.id }}
								onClick={() => handleComplete(todo)}
								iconStyle={{ fill: "red" }}
							/>
						</ListItemIcon>
						{/* <ListItemText id={todo.id} primary={todo.title} /> */}
						<InputBase
							className="input-field"
							value={todo.title}
							readOnly
							onChange={(event) => {
								event.preventDefault();
							}}
						/>
						<ListItemSecondaryAction>
							<IconButton
								style={{ marginRight: 10 }}
								edge="end"
								aria-label="comments"
								onClick={() => handleEdit(todo)}
							>
								<EditIcon />
							</IconButton>
							<IconButton
								edge="end"
								aria-label="comments"
								onClick={() => handleDelete(todo)}
							>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Paper>
			))}
		</List>
	);
};

export default ListCo;

{
	/* <div className="list">
	{todos.map((todos) => {
		<li></li>;
	})}
</div>; */
}
