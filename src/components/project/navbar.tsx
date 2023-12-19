import logo from "../../img/logo.png";

function Navbar() {
	return (
		<div className=" flex pt-[30px] px-[120px] bg-[#F5F7FF]">
			<span className="flex justify-around w-[100%]  items-center gap-1">
				<span className=" flex  items-center gap-2">
					<img src={logo} alt="logo" />
					<p id="ziro" className="">
						ZIRO
					</p>
				</span>
				<a href="#">Home</a>
				<a href="#">Pricing</a>
				<a href="#">Blog</a>
				<a href="#">Become a member</a>
				<a href="#">About Us</a>
				<a href="#">Home</a>
				<p id="search" className="flex justify-around  items-center gap-2 w-[220px]">
					Search here...
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M5.94518 0.000189675C4.04141 0.00100344 2.25313 0.913405 1.13482 2.45435C0.0163926 3.99546 -0.29712 5.9788 0.291544 7.78957C0.880374 9.60054 2.29995 11.0202 4.11063 11.6086C5.92119 12.1968 7.90385 11.8825 9.44413 10.7632L12.4064 13.7265C12.6422 13.9623 12.986 14.0545 13.3081 13.9682C13.6303 13.8818 13.8818 13.6302 13.9682 13.3079C14.0544 12.9856 13.9624 12.6418 13.7266 12.4059L10.7643 9.44267C11.6295 8.25308 12.023 6.78489 11.8689 5.3219C11.7147 3.85891 11.0238 2.50513 9.92963 1.52208C8.83561 0.539036 7.41587 -0.00323536 5.9454 1.45234e-05L5.94518 0.000189675ZM5.94518 10.0332C4.86257 10.0332 3.82436 9.603 3.05884 8.83724C2.29333 8.07147 1.86331 7.03293 1.86331 5.94997C1.86331 4.86701 2.29333 3.82846 3.05884 3.0627C3.82436 2.29694 4.86257 1.86679 5.94518 1.86679C7.02779 1.86679 8.066 2.29694 8.83152 3.0627C9.59704 3.82846 10.027 4.86701 10.027 5.94997C10.0257 7.03243 9.59541 8.07035 8.83006 8.83578C8.06488 9.60138 7.02733 10.0319 5.94518 10.0332Z"
							fill="#FF5C00"
						/>
					</svg>
				</p>
				<span className=" flex items-center gap-1">
					<a href="#" className=" text-teal-700">
						Login
					</a>
					<a href="#"> / Sing Up</a>
				</span>
			</span>
		</div>
	);
}

export default Navbar;
