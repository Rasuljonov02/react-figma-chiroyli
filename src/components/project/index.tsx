import React from "react";

import Box1 from "./box1";
import Why from "./second-section";
import FirstSection from "./first-section";
import Fourth from "./fourth-section";
import ThirdSection from "./third-section";
import Navbar from "./navbar";
import Header from "./box1";
import UserCount from "./users-count";
import Footer from "./footer";

function Project() {
	return (
		<div className="   w-[100%] ">
			<Navbar />
			<Header />
			<FirstSection />
			<Why />
			<ThirdSection />
			<Fourth />
			<UserCount />
			<Footer />
		</div>
	);
}

export default Project;
