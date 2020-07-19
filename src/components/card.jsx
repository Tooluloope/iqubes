import React from "react";

export const Card = ({ state, setState }) => (
	<div className="card-max w-full px-5">
		<div className="w-full shadow rounded px-10 py-10 bg-white flex flex-col justify-center">
			<div className=" content">
				<svg
					className="mx-auto"
					width="104"
					height="104"
					viewBox="0 0 104 104"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d)">
						<circle cx="52" cy="46" r="42" fill="white" />
					</g>
					<g filter="url(#filter1_d)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M74.5041 33.7984L47.3601 60.7552C45.9681 62.1376 43.7641 62.1376 42.3721 60.7552L29.4961 47.968C28.1041 46.5856 28.1041 44.3968 29.4961 43.0144C30.8881 41.632 33.0921 41.632 34.4841 43.0144L44.8661 53.3248L69.5161 28.8448C70.9081 27.4624 73.1121 27.4624 74.5041 28.8448C75.8961 30.2272 75.8961 32.416 74.5041 33.7984Z"
							fill="#6FCF97"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d"
							x="0"
							y="0"
							width="104"
							height="104"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="6" />
							<feGaussianBlur stdDeviation="5" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.129412 0 0 0 0 0.117647 0 0 0 0 0.262745 0 0 0 0.08 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_d"
							x="13"
							y="12"
							width="78"
							height="92"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="6" />
							<feGaussianBlur stdDeviation="5" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.129412 0 0 0 0 0.117647 0 0 0 0 0.262745 0 0 0 0.08 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>

				<p className="text-left text-2xl lg:text-3xl font-bold text-main-color mb-6 inline-block">
					Purchase Completed
				</p>
				<p className="text-main-color pb-10">
					Please check your email for details concerning this transaction
				</p>
				<p
					onClick={() => setState({ ...state, submitted: false })}
					className="cursor-pointer underline p-gradient"
				>
					Return Home
				</p>
			</div>
		</div>
	</div>
);
