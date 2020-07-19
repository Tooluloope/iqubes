import React from "react";

export const Nav = ({ handleClickTab }) => {
	return (
		<nav className="  overflow-x-scroll nav-ref">
			<ul className="tabs-ul h-20 flex justify-between border-b-2 border-black mb-3 flex-no-wrap text-gray-600 font-bold">
				<li
					onClick={() => handleClickTab(0)}
					className="lg:mr-16 md:mr-8 mr-4 px-4 inline-block h-full relative whitespace-no-wrap cursor-pointer"
				>
					<p
						to="/"
						className="capitalize active-nav h-full flex items-center  transition-all duration-200 show"
					>
						<span>Personal Info</span>
					</p>
				</li>
				<li
					onClick={() => handleClickTab(1)}
					className="lg:mr-16 md:mr-8 mr-4 px-4 inline-block h-full relative whitespace-no-wrap cursor-pointer"
				>
					<p
						to="/s"
						className="capitalize  active-nav h-full flex items-center  transition-all duration-200 "
					>
						<span>Billing Info</span>
					</p>
				</li>
				<li
					onClick={() => handleClickTab(2)}
					className="  px-4 inline-block h-full relative whitespace-no-wrap cursor-pointer"
				>
					<p
						to="/s"
						className="capitalize  active-nav h-full flex items-center  transition-all duration-200 "
					>
						<span>confirm Payment</span>
					</p>
				</li>
			</ul>
		</nav>
	);
};
