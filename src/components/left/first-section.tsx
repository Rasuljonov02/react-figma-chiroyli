import compt from "../../img/comp.png";
import audio from "../../img/Group 34.png";

function FirstSection() {
	return (
		<>
			<div className="first-section mt-24 px-[130px] flex items-end justify-between">
				<div className="left flex flex-col gap-[30px]">
					<div className="title">
						<p className="text-[#FF5C00]">How it works</p>
						<h2 className="text-[40px] font-[400] tracking-[2px]  font-[Oswald]">
							Start find a job you love <br />
							with us easily
						</h2>
					</div>
					<div className="w-[435px] h-[58px] rounded-[8px] bg-[#F5F7FF] flex items-center justify-between p-[20px] font-[Open Sans]">
						<div className="flex gap-[10px] items-center">
							<p className="w-[30px] h-[30px] rounded-[6px] bg-[#F3E0FF] grid place-items-center">
								1
							</p>
							<p className="text-[16px] font-[600]  tracking-[0.32px] ">Complete Profile</p>
						</div>
						<div className="">
							<p>
								<svg
									width="17"
									height="10"
									viewBox="0 0 17 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.243416 1.66634L7.76094 9.68995C8.15766 10.1033 8.85646 10.1033 9.23422 9.68995L16.6951 1.72271C17.0728 1.30931 17.1295 0.651574 16.6951 0.257037C16.2795 -0.118743 15.6562 -0.0623876 15.2785 0.351017L8.7809 7.28478C8.62978 7.43512 8.40317 7.43512 8.25203 7.28478L1.73559 0.332226C1.39566 -0.0435539 0.791174 -0.118784 0.375631 0.200627C-0.0587635 0.538792 -0.134386 1.27163 0.243481 1.6663L0.243416 1.66634Z"
										fill="#4238AF"
									/>
								</svg>
							</p>
						</div>
					</div>
					<div className="w-[435px] h-[134px] rounded-[8px] bg-[#F5F7FF] p-[20px] font-[Open Sans]">
						<div className="flex items-center justify-between">
							<div className=" flex items-center gap-[10px]">
								<p className="w-[30px] h-[30px] rounded-[6px] bg-[#E7E9FE] grid place-items-center">
									2
								</p>
								<p className="text-[16px] font-[600]">Search Vacancies</p>
							</div>
							<div>
								{" "}
								<p>
									<svg
										width="17"
										height="10"
										viewBox="0 0 17 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.7566 8.33366L9.23906 0.310045C8.84234 -0.10335 8.14354 -0.10335 7.76578 0.310045L0.304918 8.27729C-0.0728138 8.69069 -0.129479 9.34843 0.304918 9.74296C0.720459 10.1187 1.34381 10.0624 1.72154 9.64898L8.2191 2.71522C8.37022 2.56488 8.59683 2.56488 8.74797 2.71522L15.2644 9.66777C15.6043 10.0436 16.2088 10.1188 16.6244 9.79937C17.0588 9.46121 17.1344 8.72837 16.7565 8.3337L16.7566 8.33366Z"
											fill="#4238AF"
										/>
									</svg>
								</p>
							</div>
						</div>
						<p className="text-[12px] text-[#A8A8A8] w-[372px] ml-[40px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation.
						</p>
					</div>
					<div className="w-[435px] h-[58px] rounded-[8px] bg-[#F5F7FF] flex items-center justify-between p-[20px] font-[Open Sans]">
						<div className="flex gap-[10px] items-center">
							<p className="w-[30px] h-[30px] rounded-[6px] bg-[#FFDECC] grid place-items-center">
								1
							</p>
							<p className="text-[16px] font-[600]  tracking-[0.32px] ">Apply Job</p>
						</div>
						<div className="">
							<p>
								<svg
									width="17"
									height="10"
									viewBox="0 0 17 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.243416 1.66634L7.76094 9.68995C8.15766 10.1033 8.85646 10.1033 9.23422 9.68995L16.6951 1.72271C17.0728 1.30931 17.1295 0.651574 16.6951 0.257037C16.2795 -0.118743 15.6562 -0.0623876 15.2785 0.351017L8.7809 7.28478C8.62978 7.43512 8.40317 7.43512 8.25203 7.28478L1.73559 0.332226C1.39566 -0.0435539 0.791174 -0.118784 0.375631 0.200627C-0.0587635 0.538792 -0.134386 1.27163 0.243481 1.6663L0.243416 1.66634Z"
										fill="#4238AF"
									/>
								</svg>
							</p>
						</div>
					</div>
				</div>
				<div className="right relative">
					<img className="absolute left-[260px] top-[180px]" src={audio} alt="" />
					<img src={compt} alt="" />
				</div>
			</div>
		</>
	);
}

export default FirstSection;
