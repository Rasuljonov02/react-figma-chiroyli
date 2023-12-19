import React from "react";


import Why from "./second-section";
import FirstSection from "./first-section";
import Fourth from "./fourth-section";
import ThirdSection from "./third-section";
import Navbar from "./navbar";
import Header from "./box1";
import UserCount from "./users-count";
import Footer from "./footer";
import Fifth from "./fifth";
function Project() {
	return (
		<div className="   w-[100%] ">
			<Navbar />
			<Header />
			<FirstSection />
			<Why />
			<ThirdSection />
			<UserCount />
			<Fourth />
			<Fifth/>
			<Footer />
		</div>
	);
}

export default Project;
