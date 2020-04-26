import axios from "axios";

export default {
	// Gets all items
	getGoogleSearchBooks: function () {
		return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
	},
	// Gets the item with the given id
	getBook: function (id) {
		return axios.get("/api/books/" + id);
	},
	updateBook: function (id, bookData) {
		return axios.put("/api/books/" + id, bookData);
	},
	// Deletes the item with the given id
	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves an item to the database
	saveBook: function (bookData) {
		return axios.post("/api/books", bookData);
	},
};
