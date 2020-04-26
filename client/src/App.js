import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./Pages/Items";
import SaveBooks from "./Pages/SaveBooks";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Items} />
					<Route exact path="/saved" component={SaveBooks} />
					<Route exact path="/saved/:id" component={SaveBooks} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
