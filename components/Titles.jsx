import styled, { css } from "styled-components";

const Title = styled.h1`
	font-size: 1.5em;

	${(props) =>
		props.primary &&
		css`
			color: #ef5777;
		`};

    ${(props) =>
		props.secondary &&
		css`
			color: #16a085;
		`};F
`;

export { Title };
