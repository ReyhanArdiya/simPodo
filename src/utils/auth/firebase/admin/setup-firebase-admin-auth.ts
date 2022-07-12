import type { App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const setupFirebaseAdminAuth = (firebaseApp: App) => getAuth(firebaseApp);

export default setupFirebaseAdminAuth;
