import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const cardStyle = {
	background: "#343a40",
	fontSize: "1.5rem",
	border: "3px solid #dark"
};

export class MyCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			timer: props.mytime
		};
	}

	tick() {
		this.setState(state => ({
			value: state.value < 9 ? (state.value += 1) : (state.value = 0)
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), this.state.timer);
	}
	render() {
		return (
			<Card className="col-1" bg="dark" text="light">
				<Card.Body>
					<Card.Title style={cardStyle}>
						{this.state.value}
					</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

MyCard.propTypes = {
	value: PropTypes.any,
	mytime: PropTypes.number
};
