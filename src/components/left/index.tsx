import React from "react";
import Right2 from "./hedr";

import Box1 from "./box1";
import Why from "./second-section";
import FirstSection from "./first-section";
import ThirdSection from "./third-section";
import Fourth from "./fourtr-section";
function Left() {
	return (
		<div className="   w-[100%] ">
			<Right2 />
			<Box1 />
			<FirstSection />
			<Why />


			<ThirdSection/>
			<Fourth />
		</div>
	);
}

export default Left;
