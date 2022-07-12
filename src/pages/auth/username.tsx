import dynamic from "next/dynamic";

const UsernamePage = dynamic(
	() => import("../../components/pages/Auth/UsernamePage"),
	{
		ssr : false
	}
);

export default function Username() {
	return <UsernamePage onSubmit={async u => console.log(u)} />;
}
