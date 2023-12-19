import i1 from "../../img/1.png";
import i11 from "../../img/11.png";

import a21 from "../../img/21.png";
import a22 from "../../img/22.png";
import a23 from "../../img/23.png";
import a24 from "../../img/24.png";
import a25 from "../../img/25.png";
import a26 from "../../img/26.png";

function Box1() {
	return (
		<div className="w-[100%]">
			<div className=" flex items-center mt-[60px] justify-between px-11">
				<div className=" flex flex-col gap-2">
					<h1 className="  w-[480px]">
						Find out talend
						<p id="frelanser" className="w-[100px] flex">
							freelance
						</p>{" "}
						with better review faster.
					</h1>
					<p id="lo">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
						quis nostrud exercitation ullamco laboris nisi ut aliquip.
					</p>
					<span className=" flex items-center">
						<button id="btn1" className="w-[190px]">
							Discover Now
						</button>

						<span className="flex gap-2 items-center">
							<img className="w-[30px]" src={i11} alt="" />
							<p id="demo">Watch Demo</p>
						</span>
					</span>
				</div>
				<div>
					<img className="w-[550px]" src={i1} alt="" />
				</div>
			</div>
			<div className=" w-[100%] flex justify-around gap-2  items-center mt-[80px]">
				<img src={a21} alt="" />

				<img src={a22} alt="" />
				<img src={a23} alt="" />
				<img src={a24} alt="" />

				<img src={a25} alt="" />

				<img src={a26} alt="" />
			</div>
		</div>
	);
}

export default Box1;
