import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // this allows for classname to be set
  return <div className={classes}>{props.children}</div>;
}
export default Card;
