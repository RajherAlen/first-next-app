import React, { useState } from "react";
import MainLayout from "../../common/layout/MainLayout.jsx";
// import Link from "next/link";
import Button from "../../components/Button";
import Input from "../../components/Input";

const signUp = () => {
	// const [formValid, setFormValid] = useState(false);

	return (
		<MainLayout page={"Sign up"} center>
			<div>
				<h1>Sign up</h1>
				<Input label={"Username"}></Input>
				<Input label={"Password"}></Input>
				<Button className="c-btn__signup" disabled={true}>
					Sign up
				</Button>
			</div>
		</MainLayout>
	);
};

export default signUp;
