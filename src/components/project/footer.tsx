import logo from "../../img/logo.png";
function Footer() {
	return (
		<>
			<div className="w-[100%] h-[430px] rounded-t-[30px] bg-[#DBE2FF] mt-[100px]  px-[130px]">
				<div className="footer flex items-center justify-between pt-[120px]">
					<div className="info flex flex-col gap-[15px]">
						<h3 className="text-[24px]  font-[400] font-[Oswald]">Olearn</h3>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">About</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">What we offer</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Leadership</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Careers</p>
					</div>
					<div className="info flex flex-col gap-[15px]">
						<h3 className="text-[24px]  font-[400] font-[Oswald]">Courses</h3>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">
							Classroom Courses
						</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Virtual Courses</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">
							E-Learning Courses
						</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">
							Off Line Courses
						</p>
					</div>
					<div className="info flex flex-col gap-[15px]">
						<h3 className="text-[24px]  font-[400] font-[Oswald]">Community</h3>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Learner </p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Partners</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Developers</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Teaching Centre</p>
					</div>
					<div className="info flex flex-col gap-[15px]">
						<h3 className="text-[24px]  font-[400] font-[Oswald]">Quick Links</h3>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Home</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">
							Professional Edu
						</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Courses</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Admissions</p>
					</div>
					<div className="info flex flex-col gap-[15px]">
						<h3 className="text-[24px]  font-[400] font-[Oswald]">More</h3>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Press</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Inventors</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Helps</p>
						<p className="text-[16px] font-[400] font-[Open Sans] text-[#717171">Terms</p>
					</div>
				</div>

				<div className="info border-t-[2px] border-[#625BAE] mt-[70px] flex items-center justify-between">
					<div className="flex items-center gap-[50px]">
						<p className="flex items-center">
							<img src={logo} alt="" />
							<p className="text-[16px] font-[400] font-[Odibee Sans] text-[#272626]">ZIRO</p>
						</p>
						<p className="text-[12px] font-[600] text-[#3A2E5C] font-[Open Sans]">Terms of Use</p>
						<p className="text-[12px] font-[600] text-[#3A2E5C] font-[Open Sans]">Protfolio</p>
						<p className="text-[12px] font-[600] text-[#3A2E5C] font-[Open Sans]">Privacy policy</p>
						<p className="text-[12px] font-[600] text-[#3A2E5C] font-[Open Sans]">Contact us</p>
						<p className="text-[12px] font-[600] text-[#3A2E5C] font-[Open Sans]">FAQ</p>
					</div>
					<div className="icons">
						<svg
							width="142"
							height="30"
							viewBox="0 0 142 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<ellipse cx="14.4969" cy="14.5102" rx="14.4969" ry="14.5102" fill="white" />
							<ellipse cx="52.1107" cy="14.5102" rx="14.4969" ry="14.5102" fill="white" />
							<ellipse
								cx="89.7244"
								cy="14.5102"
								rx="14.4969"
								ry="14.5102"
								fill="#4238AF"
								fill-opacity="0.81"
							/>
							<ellipse cx="127.338" cy="14.5102" rx="14.4969" ry="14.5102" fill="white" />
							<path
								d="M49.9877 9.41211C48.3498 9.41211 47.0172 10.7468 47.0172 12.3866V16.6348C47.0172 18.2744 48.3506 19.6084 49.9889 19.6084H54.2332C55.8713 19.6084 57.2042 18.2738 57.2042 16.634V12.3854C57.2042 10.746 55.8707 9.41211 54.2324 9.41211H49.9877ZM55.1668 11.0435C55.3917 11.0435 55.5743 11.2262 55.5743 11.4514C55.5743 11.6765 55.3917 11.8592 55.1668 11.8592C54.9419 11.8592 54.7593 11.6765 54.7593 11.4514C54.7593 11.2262 54.9419 11.0435 55.1668 11.0435ZM52.1107 11.8592C53.5715 11.8592 54.7593 13.0481 54.7593 14.5103C54.7593 15.9724 53.5713 17.1613 52.1107 17.1613C50.6499 17.1613 49.462 15.9722 49.462 14.5103C49.462 13.0483 50.6499 11.8592 52.1107 11.8592ZM52.1107 12.6749C51.0979 12.6749 50.277 13.4966 50.277 14.5103C50.277 15.524 51.0979 16.3456 52.1107 16.3456C53.1235 16.3456 53.9443 15.524 53.9443 14.5103C53.9443 13.4966 53.1235 12.6749 52.1107 12.6749Z"
								fill="#979797"
							/>
							<path
								d="M14.497 8.62793C11.2515 8.62793 8.61987 11.2755 8.61987 14.5408C8.61987 17.5052 10.7906 19.9531 13.6184 20.3807V16.1077H12.1642V14.5535H13.6184V13.5192C13.6184 11.807 14.4475 11.0556 15.8621 11.0556C16.5393 11.0556 16.8981 11.1063 17.0674 11.1291V12.4856H16.1026C15.5022 12.4856 15.2925 13.0587 15.2925 13.7041V14.5535H17.0522L16.8137 16.1077H15.2925V20.3929C18.161 20.0018 20.3742 17.5343 20.3742 14.5408C20.3742 11.2755 17.7428 8.62793 14.497 8.62793Z"
								fill="#979797"
							/>
							<path
								d="M97.9522 10.8032C97.4338 11.0411 96.8763 11.1996 96.2882 11.2746C96.8862 10.907 97.3461 10.3208 97.562 9.62823C97.0026 9.96788 96.3828 10.2172 95.7234 10.3487C95.1968 9.77069 94.4457 9.41211 93.6135 9.41211C92.015 9.41211 90.7195 10.7421 90.7195 12.3818C90.7195 12.6137 90.7457 12.8398 90.7951 13.0593C88.3903 12.9342 86.2575 11.7505 84.8306 9.95407C84.5799 10.393 84.4389 10.907 84.4389 11.4495C84.4389 12.4805 84.9487 13.3879 85.726 13.9227C85.2515 13.9076 84.805 13.771 84.414 13.5519C84.414 13.5608 84.414 13.5741 84.414 13.5866C84.414 15.0273 85.4118 16.2269 86.7345 16.5C86.4927 16.5686 86.2373 16.6067 85.974 16.6067C85.787 16.6067 85.605 16.5847 85.4286 16.5519C85.7969 17.7292 86.8654 18.5898 88.1312 18.6152C87.1408 19.4103 85.8935 19.8865 84.537 19.8865C84.3026 19.8865 84.0736 19.8727 83.8471 19.8443C85.1283 20.6845 86.65 21.1771 88.2834 21.1771C93.6059 21.1771 96.5175 16.6512 96.5175 12.725C96.5175 12.5963 96.5135 12.4682 96.5076 12.3416C97.0759 11.9262 97.5655 11.4019 97.9522 10.8032Z"
								fill="white"
							/>
							<path
								d="M135.15 11.1646C135.013 10.4639 134.357 9.95354 133.596 9.79422C132.457 9.57143 130.349 9.41211 128.069 9.41211C125.79 9.41211 123.648 9.57143 122.508 9.79422C121.749 9.95354 121.091 10.4315 120.954 11.1646C120.815 11.9612 120.677 13.0764 120.677 14.5103C120.677 15.9441 120.815 17.0594 120.987 17.856C121.126 18.5567 121.782 19.067 122.542 19.2263C123.751 19.4491 125.824 19.6084 128.104 19.6084C130.384 19.6084 132.457 19.4491 133.666 19.2263C134.426 19.067 135.081 18.5891 135.22 17.856C135.358 17.0594 135.531 15.9118 135.566 14.5103C135.496 13.0764 135.323 11.9612 135.15 11.1646ZM126.204 16.7407V12.2798L130.418 14.5103L126.204 16.7407Z"
								fill="#979797"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
