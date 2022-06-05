import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8"/>
				<meta
					content="IE=edge"
					httpEquiv="X-UA-Compatible"
				/>
				<meta
					content="simPodo"
					name="application"
				/>
				<meta
					content="Reyhan Ardiya"
					name="author"
				/>
				<meta
					content="Jolt down your TODO in this simPle toDo app!"
					name="description"
				/>
				<meta
					content="HTML, CSS, JavaScript, React, Next.js, Todo, TodoApp, simple"
					name="keywords"
				/>
				<link
					href="https://fonts.googleapis.com"
					rel="preconnect"
				/>
				<link
					crossOrigin="true"
					href="https://fonts.gstatic.com"
					rel="preconnect"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Nunito:wght@300;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}