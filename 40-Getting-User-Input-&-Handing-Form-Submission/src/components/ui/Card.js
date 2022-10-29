import classes from "./Card.moduel.css";

export const Card = (props) => {
	return <div className={classes.card}>{props.children}</div>;
};
