import setupFirebaseAdminApp from "./firebase/admin/setup-firebase-admin-app";
import setupFirebaseAdminAuth from "./firebase/admin/setup-firebase-admin-auth";

const verifyToken = async (token: string) => {
	const adminAuth = setupFirebaseAdminAuth(setupFirebaseAdminApp());

	return await adminAuth.verifyIdToken(token);
};

export default verifyToken;
