export const Todo = (props) => {
	return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<span>A Span</span>
				<button className="btn">Delete</button>
			</div>
		</div>
	);
};
