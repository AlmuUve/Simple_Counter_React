import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { MyCard } from "./mycard.jsx";
import { propTypes } from "react-bootstrap/esm/Image";

export function Home() {
	return (
		<CardDeck className="p-4">
			<Card className="offset-3 col-1 bg-dark " />
			<MyCard mytime={1000000} />
			<MyCard mytime={100000} />
			<MyCard mytime={10000} />
			<MyCard mytime={1000} />
		</CardDeck>
	);
}
