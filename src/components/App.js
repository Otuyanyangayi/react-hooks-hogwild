

import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogTile hogs={hogs}/>
		</div>
	);
}

export default App;
