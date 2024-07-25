import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./upkeep.png"
								alt="upkeep"
								className="work-image"
							/>
							<div className="work-title">Upkeep</div>
							<div className="work-subtitle">
								Software QA Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./sqa.png"
								alt="sqa"
								className="work-image"
							/>
							<div className="work-title">SQA Squared</div>
							<div className="work-subtitle">
								Software QA Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
