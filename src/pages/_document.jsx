import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charset="UTF-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="application" content="simPodo"/>
				<meta name="author" content="Reyhan Ardiya"/>
				<meta name="description" content="Jolt down your TODO in this simPle toDo app!"/>
				<meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, Todo, TodoApp, simple"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Nunito:wght@300;700;900&display=swap" rel="stylesheet"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}