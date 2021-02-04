import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "../../styles/index.scss";

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
		this.startTimer();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.myreset != this.props.myreset) {
			this.resetTimer();
		}
	}
	startTimer() {
		this.interval = setInterval(() => this.tick(), this.state.timer);
	}
	resetTimer() {
		clearInterval(this.state.timer);
		this.startTimer();
	}

	render() {
		return (
			<Card className="col-1" bg="dark" text="light">
				<Card.Body className="d-flex align-self-center cardBody">
					<Card.Title className="card">{this.state.value}</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

MyCard.propTypes = {
	value: PropTypes.any,
	mytime: PropTypes.number,
	myreset: PropTypes.bool
};
