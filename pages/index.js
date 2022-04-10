import MainLayout from "../common/layout/MainLayout.jsx";
import Link from "next/link";

const Home = () => {
	return (
		<MainLayout page={"Dashboard"}>
			<Link href="/login/signUp">Sign up</Link>
		</MainLayout>
	);
};

export default Home;
