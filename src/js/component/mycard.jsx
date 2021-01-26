import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

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
					<Card.Title>{this.state.value}</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

MyCard.propTypes = {
	value: PropTypes.any,
	mytime: PropTypes.number
};
