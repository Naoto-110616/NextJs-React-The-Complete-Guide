import { useState } from "react";
import { Modal } from "./components/Modal";
import { Backdrop } from "./components/Backdrop";

export const Todo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const deleteHandler = () => {
		setModalIsOpen(true);
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
					<Modal />
					<Backdrop />
				</>
			)}
		</div>
	);
};
