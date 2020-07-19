import React from "react";
import { IMaskInput } from "react-imask";
import spinner from "../assets/spinner.svg";

export const Form = ({ handleClick, handleSubmit, state, setState }) => {
	const handleChange = e => {
		const { formData } = state;
		formData[e.target.name] = e.target.value;
		setState({ ...state, formData });
	};
	const handleMaskChange = (value, mask) => {
		const { formData } = state;
		formData[mask.el.input.name] = value;
		setState({ ...state, formData });
	};
	const {
		formData: {
			name,
			email,
			address1,
			address2,
			localGovernment,
			stateForm,
			nameOnCard,
			cardType,
			cardDetails,
			expiryDate,
			cvv,
		},
		isSubmitting,
	} = state;
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
							onChange={handleChange}
							value={name}
							type="text"
							name="name"
							placeholder="Enter your name"
							className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
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
							required
							value={email}
							onChange={handleChange}
							type="email"
							name="email"
							placeholder="Email Address"
							className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
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
							value={address1}
							onChange={handleChange}
							type="text"
							name="address1"
							placeholder="Address 1"
							className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
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
							value={address2}
							onChange={handleChange}
							type="text"
							name="address2"
							placeholder="Address 2"
							className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
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
								value={localGovernment}
								onChange={handleChange}
								type="text"
								name="localGovernment"
								placeholder="Local Government"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
							/>
						</div>

						<div className="w-full md:w-1/3  md:ml-4 md:mt-0 mt-10">
							<label
								htmlFor="stateForm"
								className="block mb-3 text-black md:text-xl font-bold"
							>
								State
							</label>
							<div className="inline-block relative bg-transparent w-full select-wrapper">
								<select
									value={stateForm}
									onChange={handleChange}
									type="text"
									name="stateForm"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
								>
									<option value="lagos">Lagos</option>
									<option value="ibadan">Ibadan</option>
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
							htmlFor="nameOnCard"
							className="block mb-3 text-black md:text-xl font-semibold"
						>
							Name on Card <span className="text-red-600">*</span>
						</label>
						<input
							value={nameOnCard}
							onChange={handleChange}
							type="text"
							name="nameOnCard"
							placeholder="Card Name"
							className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
						/>
					</div>

					<div className="w-full my-10">
						<label
							htmlFor="cardType"
							className="block mb-3 text-black md:text-xl font-semibold"
						>
							Card Type <span className="text-red-600">*</span>
						</label>

						<div className="inline-block relative bg-transparent w-full select-wrapper">
							<select
								value={cardType}
								onChange={handleChange}
								type="text"
								name="cardType"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
							>
								<option value="visa">Visa</option>
								<option value="masterCard">Master Card</option>
							</select>
						</div>
					</div>

					<div className="md:flex justify-between items-start my-10">
						<div className="w-full md:w-1/2  md:mr-4">
							<label
								htmlFor="cardDetails"
								className="block mb-3 text-black md:text-xl font-semibold"
							>
								Card Details <span className="text-red-600">*</span>
							</label>

							<IMaskInput
								mask="0000   0000   0000   0000"
								radix="."
								value={cardDetails}
								unmask={true}
								onAccept={
									// depending on prop above first argument is
									// `value` if `unmask=false`,
									// `unmaskedValue` if `unmask=true`,
									// `typedValue` if `unmask='typed'`

									(value, mask) => handleMaskChange(value, mask)
								}
								name="cardDetails"
								placeholder="XXXX   XXXX   XXXX   XXXX"
								className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3"
							/>
						</div>
						<div className="flex w-full md:w-1/2">
							<div className="  w-1/2  md:ml-4 md:mt-0 mt-10 md:mr-0 mr-4">
								<label
									htmlFor="expiryDate"
									className="block mb-3 text-black md:text-xl font-bold"
								>
									Expiry Date <span className="text-red-600">*</span>
								</label>
								<IMaskInput
									mask="00  /  00"
									radix="."
									value={expiryDate}
									unmask={true}
									onAccept={
										// depending on prop above first argument is
										// `value` if `unmask=false`,
										// `unmaskedValue` if `unmask=true`,
										// `typedValue` if `unmask='typed'`
										(value, mask) => handleMaskChange(value, mask)
									}
									name="expiryDate"
									placeholder="20  /  20"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3 text-center"
								/>
							</div>
							<div className="  w-1/2  md:ml-4 md:mt-0 mt-10 md:mr-0 mr-4">
								<label
									htmlFor="cvv"
									className="block mb-3 text-black md:text-xl font-bold"
								>
									CVV <span className="text-red-600">*</span>
								</label>
								<IMaskInput
									mask="000"
									radix="."
									value={cvv}
									unmask={true}
									onAccept={
										// depending on prop above first argument is
										// `value` if `unmask=false`,
										// `unmaskedValue` if `unmask=true`,
										// `typedValue` if `unmask='typed'`
										(value, mask) => handleMaskChange(value, mask)
									}
									name="cvv"
									placeholder="123"
									className="w-full border bg-main-border py-4 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none px-3 text-center"
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
							Pay {isSubmitting && <i className="fas fa-spinner"></i>}
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
