import React from 'react';

const SearchForm = props => {
    return (
        <form>
            <div className = "form-group">
                <label className = "bookSearchLabel"><h3> Search for a Book</h3></label>
                <br></br>
                <input 
                value = {props.search}
                type = "text"
                name = "searchBook"
                placeholder = "Enter Book's Name"
                onChange = {props.handleInputChange}
                />
            </div>
            <button type = "submit" className = "submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchForm;