import React from 'react';
import {Row, Col} from "../Grid";

const SavedResult = props => {
    return (props.SavedBooks.length === 0) ? (
        <div className = "card">
            <div className = "card-body player">
                <div className = "article">
                    <h3> Saved Books </h3>
                </div>
            </div>
        </div>
    ) : (
        <div className = "card">
            <div className = "card-body player">
                <div className = "article">
                    <h3> Saved Books </h3>
                    {props.SavedBooks}
                </div>
            </div>
        </div>
    )
};

export default SavedResult;