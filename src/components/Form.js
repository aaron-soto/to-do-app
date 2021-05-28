import React, { useEffect } from "react";

import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import SimpleDialog from "./SimpleDialog";

import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
	const [open, setOpen] = React.useState(false);

	const classes = useStyles();

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput("");
		}
	}, [setInput, editTodo]);

	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo("");
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!editTodo) {
			if (input !== "") {
				setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
				setInput("");
			}
		} else {
			updateTodo(input, editTodo.id, editTodo.completed);
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Paper
			component="form"
			onSubmit={onFormSubmit}
			autoComplete="off"
			noValidate
			className={classes.root}
		>
			<InputBase
				className={classes.input}
				id="Input"
				placeholder="Add a task"
				inputProps={{ "aria-label": "Add a task" }}
				value={input}
				onChange={onInputChange}
			/>
			<IconButton
				className={classes.iconButton}
				aria-label="task-settings"
				onClick={() => handleClickOpen()}
			>
				<SettingsIcon />
			</IconButton>
			<Divider className={classes.divider} orientation="vertical" />
			<IconButton
				color="secondary"
				className={classes.iconButton}
				aria-label="add-task"
				type="submit"
			>
				{editTodo ? <DoneIcon /> : <AddIcon />}
			</IconButton>
			<SimpleDialog open={open} onClose={handleClose} />
		</Paper>
	);
};

export default Form;
