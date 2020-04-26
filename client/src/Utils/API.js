import axios from "axios";

export default {
	// Gets all books from google search
	getGoogleSearchBooks: function (query) {
		return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
	},
	//get all books from db
	getBooks: function() {
		return axios.get("api/books");
	},
	// Gets the books with the given id
	getBook: function (id) {
		return axios.get("/api/books/" + id);
	},
	// Deletes the books with the given id
	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves an books to the database
	saveBook: function (savedBooks) {
		return axios.post("/api/books", savedBooks);
	},
};
