import styled, { css } from "styled-components";

const Input = (props) => {
	return (
		<InputWrapper>
			<input
				type="input"
				className="form__field"
				placeholder={props.label}
				name={props.label}
				id={props.label}
				required
			/>
			<label htmlFor={props.label} className="form__label">
				{props.label}
			</label>
		</InputWrapper>
	);
};

export default Input;

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	margin: 24px 0;
	padding: 15px 0 0;
	width: 350px;

	& label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 12px;
		color: #f1f1f1;
		opacity: 0.6;
	}

	& input {
		font-family: inherit;
		width: 100%;
		border: 0;
		border-bottom: 2px solid #f1f1f1;
		outline: 0;
		font-size: 16px;
		color: #f1f1f1;
		opacity: 0.6;
		padding: 7px 0;
		background: transparent;
		transition: border-color 0.2s;

		&::placeholder {
			color: transparent;
		}

		&:placeholder-shown ~ .form__label {
			font-size: 16px;
			cursor: text;
			top: 40%;
			transfrom: translateY(-50%);
		}

		&:focus {
			~ .form__label {
				position: absolute;
				top: 0;
				display: block;
				transition: 0.2s;
				font-size: 12px;
				color: #3498db;
				opacity: 1;
			}

			border-color: #3498db;
			opacity: 1;
		}

		// Reset input
		&:required,
		&:invalid {
			box-shadow: none;
		}
	}
`;
