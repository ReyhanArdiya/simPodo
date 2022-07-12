import type { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const setupFirebaseClientAuth = (firebaseApp: FirebaseApp) => getAuth(firebaseApp);

export default setupFirebaseClientAuth;
