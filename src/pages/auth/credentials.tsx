import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


// import CredentialsPage from "../../components/pages/Auth/CredentialsPage";

// CMT so here's the tea sis, apprent-fucking-ly some styled-components still causes
// react hydration error, like SemanticInput and uuid. SOOOOO, imma just fucking do this
// for now since I dont have the god d4mn time.
// It does mean i loose SSR for this page but whtver :)
const CredentialsPage = dynamic(() => import("../../components/pages/Auth/CredentialsPage"), {
	ssr : false
});

export default function Credentials() {
	const router = useRouter();

	// FIXME doesn't work, check product backlog for later sprint
	const [ isLogin, setIsLogin ] = useState(true);
	useEffect(() => {
		if (router.isReady) {
			if (router.query.mode !== "login") {
				setIsLogin(false);
			}
		}
	}, [ router.isReady, router.query.mode ]);

	return <CredentialsPage
		login={isLogin}
		onModeClick={login => {
			router.query.mode = !login ? "signup" : "login";
			router.replace({
				pathname : router.pathname,
				query    : router.query
			});
		}}
		onSubmit={async () => {
			if (router.query.mode !== "login") {
				router.push("/auth/username");
			}
		}}
	/>;
}

