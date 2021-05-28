import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const SimpleDialog = ({ onClose, open }) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog
			className="dialog"
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			open={open}
			fullWidth={true}
		>
			<DialogTitle id="simple-dialog-title">Settings</DialogTitle>
		</Dialog>
	);
};

export default SimpleDialog;
