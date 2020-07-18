import React from "react";
import "./App.css";

function App() {
	return (
		<div className=" min-h-screen w-screen">
			<div className="background-slant"></div>
			<div className="container lg:pt-32 pt-20 mx-auto px-6 form-max-width ove">
				<p className="text-left text-2xl lg:text-3xl font-bold text-main-color">
					Complete your Purchase
				</p>

				<nav className="  overflow-x-scroll">
					<ul className="tabs-ul h-20 flex justify-between border-b-2 border-black mb-3 flex-no-wrap text-gray-600 font-bold">
						<li className="lg:mr-16 md:mr-8 mr-4 px-4 inline-block h-full relative whitespace-no-wrap">
							<p
								to="/"
								className="capitalize active-nav h-full flex items-center  transition-all duration-200 show"
							>
								<span>Personal Info</span>
							</p>
						</li>
						<li className="lg:mr-16 md:mr-8 mr-4 px-4 inline-block h-full relative whitespace-no-wrap">
							<p
								to="/s"
								className="capitalize  active-nav h-full flex items-center  transition-all duration-200 "
							>
								<span>Billing Info</span>
							</p>
						</li>
						<li className="lg:mr-16 md:mr-8 mr-4 px-4 inline-block h-full relative whitespace-no-wrap">
							<p
								to="/s"
								className="capitalize  active-nav h-full flex items-center  transition-all duration-200 "
							>
								<span>confirm Payment</span>
							</p>
						</li>
					</ul>
				</nav>

				<div className="flex justify-between ">
					<div className="w-full">
						<div className="w-full my-10">
							<label
								htmlFor="name"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Opara Linus Ahmed"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							/>
						</div>

						<div className="w-full my-10">
							<label
								htmlFor="email"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Email Address <span className="text-red-600">*</span>
							</label>
							<p className="text-sm text-main-color mb-3">
								The purchase receipt would be sent to this address
							</p>
							<input
								type="text"
								name="email"
								placeholder="OparaLinusAhmed@devmail.com"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							/>
						</div>

						<div className="w-full my-10">
							<label
								htmlFor="address1"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Address 1
							</label>

							<input
								type="text"
								name="address1"
								placeholder="The address of the user goes here"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							/>
						</div>

						<div className="w-full my-10">
							<label
								htmlFor="address2"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Address 2
							</label>

							<input
								type="text"
								name="address2"
								placeholder="and here"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							/>
						</div>

						<div className="md:flex justify-between items-start my-10">
							<div className="w-full md:w-2/3  md:mr-4">
								<label
									htmlFor="localGovernment"
									className="block mb-3 text-black md:text-xl font-semibold"
								>
									Local Government
								</label>

								<input
									type="text"
									name="localGovernment"
									placeholder="Surulere"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
								/>
							</div>

							<div className="w-full md:w-1/3  md:ml-4 md:mt-0 mt-10">
								<label
									htmlFor="localGovernment"
									className="block mb-3 text-black md:text-xl font-bold"
								>
									State
								</label>
								<div className="inline-block relative bg-transparent w-full select-wrapper">
									<select
										type="text"
										name="state"
										className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
									>
										<option value="lagos">Lagos</option>
									</select>
								</div>
							</div>
						</div>
						<div className="md:flex justify-start items-center mt-20">
							<button
								type="submit"
								className="bg-gradient-color button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-white md:mr-10 font-bold"
							>
								Next
							</button>

							<button
								type="submit"
								className="bg-transparent button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-main-color bg-main-border font-bold invert hover:text-white transition-all duration-300"
							>
								Cancel Payment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
