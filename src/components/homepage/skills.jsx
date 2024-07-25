import React from "react";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

import "./styles/skills.css";
import Card from "../common/card";

const Article = () => {

	return (
		<div className="skills-body">
			<Card
				icon={faWrench}
				title="Skills"
				body={
					<div>
						<img
							src="./javascript.png"
							alt="javascript"
							className="skills-image"
						></img>

						<img
							src="./python.jpg"
							alt="python"
							className="skills-image"
						></img>

						<img
							src="./c.png"
							alt="c"
							className="skills-image"
						></img>

						<img
							src="./cypress.jpg"
							alt="cypress"
							className="skills-image"
						></img>
						
						<img
							src="./git.png"
							alt="git"
							className="skills-image"
						></img>

						<img
							src="./postman.png"
							alt="postman"
							className="skills-image"
						></img>

						<img
							src="./circleci.png"
							alt="c"
							className="skills-image"
						></img>
					</div>
				}
			></Card>
		</div>
	);
};

export default Article;
