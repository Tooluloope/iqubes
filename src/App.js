import React, { useRef, useState } from "react";
import "./App.css";
import { Form } from "./components/form";
import { Nav } from "./components/nav";
import { Card } from "./components/card";

function App() {
	const formRef = useRef(document.getElementsByClassName("multi-form"));
	const listRef = useRef(document.getElementsByClassName("active-nav"));

	const ref = useRef({
		active: 0,
	});
	const initialState = {
		formData: {
			name: "",
			email: "",
			address1: "",
			address2: "",
			localGovernment: "",
			stateForm: "",
			nameOnCard: "",
			cardType: "",
			cardDetails: "",
			expiryDate: "",
			cvv: "",
		},
		isSubmitting: false,
		submitted: false,
	};
	const [state, setState] = useState(initialState);

	const removeClasses = (elemSet, className) => {
		elemSet.forEach(elem => {
			elem.classList.remove(className);
		});
	};

	const handleClickTab = node => {
		ref.current.active = node - 1;
		handleClick();
	};

	const handleSubmit = e => {
		e.preventDefault();
		setState({ ...state, isSubmitting: true });
		setTimeout(() => {
			ref.current.active = 0;
			setState({ ...initialState, submitted: true });
		}, 1000);
	};

	const handleClick = () => {
		const nodeArr = Array.from(formRef.current);
		const listArr = Array.from(listRef.current);
		let activeNode = ref.current.active;

		// remove active class
		removeClasses(nodeArr, "active");
		removeClasses(listArr, "show");

		if (activeNode < 2) {
			activeNode += 1;
		}
		// Make Nodes active
		nodeArr[activeNode].classList.add("active");
		listArr[activeNode].classList.add("show");
		listArr[activeNode].scrollIntoView();

		// update active ref
		ref.current.active = activeNode;
	};

	return (
		<div
			className={`${
				state.submitted && "flex justify-center flex-col "
			} min-h-screen w-screen lg:py-32 py-20`}
		>
			<div className="background-slant"></div>
			{state.submitted ? (
				<Card setState={setState} state={state} />
			) : (
				<div className="container  mx-auto px-6 form-max-width ove">
					<p className="text-left text-2xl lg:text-3xl font-bold text-main-color mb-6">
						Complete your Purchase
					</p>

					<Nav handleClickTab={handleClickTab} />

					<Form
						state={state}
						setState={setState}
						handleClick={handleClick}
						handleSubmit={handleSubmit}
					/>
				</div>
			)}
		</div>
	);
}

export default App;
