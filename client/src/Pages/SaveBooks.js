import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../Utils/API";
import SavedResult from "../components/SavedResult";

class SaveBooks extends Component {
	state = {
		savedBooks: []
	};

	componentDidMount() {
		API.getBook()
			.then(res.setState( {savedBooks: res.data }))
			.catch(err => console.log(err))
	}

	handleDeleteButton = id => {
		API.deleteBook(id) 
			.then(res => this.componentDidMount())
			.catch(err => console.log(err))
	}

	render() {
		return (
			<Container fluid className = "container">
				<Jumbotron/>
				<Container>
					<SavedResult 
					savedBooks = {this.state.savedBooks} 
					handleDeleteButton = {this.handleDeleteButton}/>
				</Container>
			</Container>
		)
	}
}

export default SaveBooks;
