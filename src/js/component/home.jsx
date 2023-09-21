import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	console.log(color)

	return (
		<div className="container">
		  <div className="line"></div>
		  <div className="color-container">
			<div
			  onClick={() => setColor("red")}
			  className={`light red ${color === "red" ? "bright" : ""}`}
			></div>
			<div
			  onClick={() => setColor("yellow")}
			  className={`light yellow ${color === "yellow" ? "bright" : ""}`}
			></div>
			<div
			  onClick={() => setColor("green")}
			  className={`light green ${color === "green" ? "bright" : ""}`}
			></div>
		  </div>
		</div>
	  );
	};

export default Home;