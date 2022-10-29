import { useState } from "react";
import { Modal } from "./components/Modal";
import { Backdrop } from "./components/Backdrop";

export const Todo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const deleteHandler = () => {
		setModalIsOpen(true);
	};
	const closeModalHandler = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{modalIsOpen && (
				<>
					<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
					<Backdrop onClick={closeModalHandler} />
				</>
			)}
		</div>
	);
};
