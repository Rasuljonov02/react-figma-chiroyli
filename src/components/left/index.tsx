import React from "react";
import Right2 from "./hedr";

import Box1 from "./box1";
import Why from "./second-section";
import FirstSection from "./first-section";
import ThirdSection from "./third-section";
function Left() {
	return (
		<div className="   w-[100%] ">
			<Right2 />
			<Box1 />
			<FirstSection />
			<Why />
			<ThirdSection/>
		</div>
	);
}

export default Left;
