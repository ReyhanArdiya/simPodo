import {
	AppOptions,
	cert,
	getApp,
	getApps,
	initializeApp
} from "firebase-admin/app";
import serviceAccount from "../../../../../firebase-service-account.json";

const options: AppOptions = {
	// @ts-expect-error: This is correct tho
	credential  : cert(serviceAccount),
	databaseURL : process.env.databaseURL
};

const setupFirebaseAdminApp = () => {
	const app = !getApps().length ? initializeApp(options) : getApp();

	return app;
};

export default setupFirebaseAdminApp;
