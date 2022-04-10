import styled, { css } from "styled-components";

const Button = styled.button`
	font-size: 1em;
	margin-top: 16px;
	padding: 10px 32px;
	border: 2px solid palevioletred;
	border-radius: 4px;
	cursor: pointer;
	transition: all 250ms ease-in-out;

	&:hover {
		opacity: 0.8;
	}

	${(props) =>
		props.primary &&
		css`
			background: "palevioletred";
			color: "white";
		`}

	${(props) =>
		props.disabled &&
		css`
			border: 2px solid #f1f1f1;
			background: transparent;
			color: #f1f1f1;
			opacity: 0.6;
			cursor: not-allowed;

			&:hover {
				opacity: 0.6;
			}
		`}
`;

export default Button;
