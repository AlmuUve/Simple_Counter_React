import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { MyCard } from "./mycard.jsx";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const cardDeckStyle = {
	background: "#343a40",
	border: "3px solid #FF0000",
	marginLeft: "0"
};

const clockStyle = {
	color: "white",
	display: "flex",
	justifyContent: "center",
	fontSize: "2rem",
	marginTop: "1rem"
};

export function Home() {
	let resetTime = false;

	const switchMyReset = () => {
		resetTime = true;
	};

	return (
		<div>
			<div className="row p-5">
				<Button className="offset-3 col-2 p-3 mr-2" variant="warning">
					Stop
				</Button>{" "}
				<Button
					onClick={() => {
						//	console.log("home", resetTime);
						switchMyReset();
					}}
					className="col-2 mr-2"
					variant="danger">
					Reset
				</Button>{" "}
				<Button className="col-2" variant="secondary">
					Resume
				</Button>{" "}
			</div>
			<CardDeck
				className="p-4 m-auto w-75 d-flex justify-content-center"
				style={cardDeckStyle}>
				<Card className="offset-3 col-1 bg-dark">
					{" "}
					<i style={clockStyle} className="far fa-clock" />
				</Card>
				<MyCard mytime={1000000} myreset={resetTime} />
				<MyCard mytime={100000} myreset={resetTime} />
				<MyCard mytime={10000} myreset={resetTime} />
				<MyCard mytime={1000} myreset={resetTime} />
			</CardDeck>
		</div>
	);
}
