import setupFirebaseAdminApp from "../auth/firebase/admin/setup-firebase-admin-app";
import setupFirebaseAdminAuth from "../auth/firebase/admin/setup-firebase-admin-auth";

const firebaseAuth = setupFirebaseAdminAuth(setupFirebaseAdminApp());

const firebaseTestUtils = {
	auth : {
		async clearUsers() {
			const users = await firebaseAuth.listUsers();
			await firebaseAuth.deleteUsers(users.users.map(u => u.uid));
		}
	}
};

export default firebaseTestUtils;
