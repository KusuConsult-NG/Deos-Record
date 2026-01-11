import "server-only";
import admin from "firebase-admin";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

const initFirebase = () => {
    if (!admin.apps.length) {
        if (!projectId || !clientEmail || !privateKey) {
            console.error("Missing Firebase Admin credentials. Server-side actions will fail.");
            return null;
        }

        try {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId,
                    clientEmail,
                    privateKey,
                }),
            });
            console.log("Firebase Admin Initialized");
        } catch (error) {
            console.error("Firebase Admin Initialization Error:", error);
            return null;
        }
    }
    return admin;
};

export const getDb = () => {
    const app = initFirebase();
    if (!app) {
        throw new Error("Firebase Admin not initialized. Check server logs for missing credentials.");
    }
    return app.firestore();
};

export const getAuth = () => {
    const app = initFirebase();
    if (!app) {
        throw new Error("Firebase Admin not initialized. Check server logs for missing credentials.");
    }
    return app.auth();
};
