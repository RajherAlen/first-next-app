import React from "react";
import styled from "styled-components";

const ToggleSwitch = ({ checked, color = "#95afc0" }) => {
	return (
		<Switch>
			<Input {...{ color }} type="checkbox" defaultChecked={checked} />
			<Slider {...{ checked, color }} />
		</Switch>
	);
};

const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ checked, color }) => (checked ? color : "#b2bec3")};
	border-radius: 15px;
	transition: 0.4s;

	&:before {
		content: "";

		position: absolute;
		left: 2px;
		bottom: 2px;

		width: 20px;
		height: 20px;
		border-radius: 100%;

		background-color: ${({ checked, color }) =>
			checked ? "#535c68" : "#f1c40f"};

		transition: 0.4s;
	}
`;

const Input = styled.input`
	&:checked + ${Slider}:before {
		transform: translateX(23.4px);
	}
`;

const Switch = styled.label`
	display: inline-block;
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);

	width: 48px;
	height: 24px;

	background-color: ${({ checked, color }) => (checked ? color : "#f9ca24")};
	border-radius: 15px;
	transition: 0.4s;

	& ${Input} {
		opacity: 0;
		width: 0;
		height: 0;
	}
`;

export { ToggleSwitch };
