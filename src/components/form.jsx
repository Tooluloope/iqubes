import React from "react";

export const Form = ({ handleClick, handleSubmit }) => {
	return (
		<div className="relative h-auto">
			<form onSubmit={handleSubmit}>
				<div className="multi-form active" data-animation="scaleIn">
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
							onClick={handleClick}
							type="button"
							className="bg-gradient-color button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-white md:mr-10 font-bold"
						>
							Next
						</button>

						<button
							type="button"
							className="bg-transparent button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-main-color bg-main-border font-bold invert hover:text-white transition-all duration-300"
						>
							Cancel Payment
						</button>
					</div>
				</div>

				<div className="multi-form" data-animation="scaleIn">
					<div className="w-full my-10">
						<label
							htmlFor="name"
							className="block mb-3 text-black md:text-xl font-semibold"
						>
							Name on Card <span className="text-red-600">*</span>
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
							Card Type <span className="text-red-600">*</span>
						</label>

						<div className="inline-block relative bg-transparent w-full select-wrapper">
							<select
								type="text"
								name="state"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							>
								<option value="lagos">Visa</option>
							</select>
						</div>
					</div>

					<div className="md:flex justify-between items-start my-10">
						<div className="w-full md:w-1/2  md:mr-4">
							<label
								htmlFor="localGovernment"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Card Details <span className="text-red-600">*</span>
							</label>

							<input
								type="text"
								name="localGovernment"
								placeholder="Surulere"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
							/>
						</div>
						<div className="flex w-full md:w-1/2">
							<div className="  w-1/2  md:ml-4 md:mt-0 mt-10 md:mr-0 mr-4">
								<label
									htmlFor="localGovernment"
									className="block mb-3 text-black md:text-xl font-bold"
								>
									Expiry Date <span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									name="localGovernment"
									placeholder="Surulere"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
								/>
							</div>
							<div className="  w-1/2  md:ml-4 md:mt-0 mt-10 md:mr-0 mr-4">
								<label
									htmlFor="localGovernment"
									className="block mb-3 text-black md:text-xl font-bold"
								>
									CVV <span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									name="localGovernment"
									placeholder="Surulere"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-black rounded-md focus:outline-none px-3"
								/>
							</div>
						</div>
					</div>
					<div className="md:flex justify-start items-center mt-20">
						<button
							onClick={handleClick}
							type="button"
							className="bg-gradient-color button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-white md:mr-10 font-bold"
						>
							Next
						</button>

						<button
							type="button"
							className="bg-transparent button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-main-color bg-main-border font-bold invert hover:text-white transition-all duration-300"
						>
							Cancel Payment
						</button>
					</div>
				</div>
				<div className="multi-form" data-animation="scaleIn">
					<div className="w-full my-10 rounded shadow-md bg-white card pb-10">
						<div className="card-header rounded-t flex justify-between md:px-20 px-6 items-center text-white">
							<p>Item Name</p>

							<p>₦ Price</p>
						</div>
						<div className="card-body rounded-b pt-12 pb-8 md:px-20 px-6 text-main-color">
							<div className="flex justify-between items-center py-3">
								<p>Data science and usability</p>
								<p>50,000.00</p>
							</div>

							<div className="flex justify-between items-center py-3">
								<p>Shipping</p>
								<p>0.00</p>
							</div>
						</div>
						<hr className="bg-main-border border-t-2 border-b-0 md:mx-12 mx-6 mb-10" />

						<div className="card-footer py-3  bg-main-border border md:mx-12 mx-6 rounded flex justify-between md:px-6 px-3 text-main-color items-center">
							<p>Total</p>
							<p>50,000.00</p>
						</div>
					</div>

					<div className="md:flex justify-start items-center mt-20">
						<button
							type="submit"
							className="bg-gradient-color button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-white md:mr-10 font-bold"
						>
							Pay
						</button>

						<button
							type="button"
							className="bg-transparent button md:w-64 w-full my-3 md:my-0 rounded focus:outline-none text-main-color bg-main-border font-bold invert hover:text-white transition-all duration-300"
						>
							Cancel Payment
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
