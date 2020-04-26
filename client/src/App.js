import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./Pages/SearchBooks";
import SaveBooks from "./Pages/SaveBooks";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={SearchBooks} />
					<Route exact path="/saved" component={SaveBooks} />
					<Route exact path="/saved/:id" component={SaveBooks} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
