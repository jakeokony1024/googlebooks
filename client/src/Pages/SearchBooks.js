import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../Utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

class Items extends Component {
	state = {
		search: "",
		books: [],
		error: "",
		message: "",
	};

	handleInputChange = event => {
		this.setState({ search: event.target.value })
	}

	handleFormSubmit = event => {
		event.preventDefault();
		API.getGoogleSearchBooks(this.state.search)
			.then( res => {
				if (res.data.items === "error") {
					throw new Error (res.data.items);
				}
				else {
					let results = res.data.items
					results = results.map(result => {

						result = {
							key: result.id,
							id: result.id,
							title: result.volumeInfo.title,
							author: result.volumeInfo.author,
							description: result.volumeInfo.description,
							image: result.volumeInfo.image,
							link: result.volumeInfo.link
						}
						return result;
					})
					this.setState({
						books: results, 
						error: ""
					})
				}
			})
			.catch(err => this.setState({ error: err.items}));
	}

	handleSavedButton = event => {
		event.preventDefault();
	}
}

export default Items;
