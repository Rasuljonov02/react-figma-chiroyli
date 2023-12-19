import React from "react";
import Right2 from "./hedr";

import Box1 from "./box1";
import FirstSection from "./first-section";

function Left() {
	return (
		<div className=" dark:text-white   w-[100%] ">
			<div
				className=" bg-[#F5F7FF] p-[0] w-[100%]
		"
			>
				<Right2 />
				<Box1 />
			</div>
			<FirstSection />
		</div>
	);
}

export default Left;
