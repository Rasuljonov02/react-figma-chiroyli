import React from "react";
import Rightt from "./rig";
import Dashboard from "./dashbord";
import Pages from "./pages";

function Right1() {
	return (
		<div className="dark:text-white  w-[20%] p-3">
			<div>
			<Rightt />
				<Dashboard />
				<Pages />
			</div>
		</div>
	);
}

export default Right1;
