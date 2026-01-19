import "server-only";
import admin from "firebase-admin";

const initFirebase = () => {
    if (!admin.apps.length) {
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

        if (!projectId || !clientEmail || !privateKey) {
            // Only log error in production or if needed, to avoid noise during build
            if (process.env.NODE_ENV === 'production') {
                console.error("Missing Firebase Admin credentials.");
            }
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

// MOCK DB Implementation for Build & Deploy Stability
const createMockDb = () => {
    console.warn("⚠️ Using MOCK FIREBASE DB - Env vars missing. Writes will be logged only.");

    // Mock Document Reference
    const mockDoc = (path: string) => ({
        id: "mock_id_" + Math.random().toString(36).substring(7),
        get: async () => ({
            exists: true,
            data: () => ({ id: "mock_id", status: "mocked" }),
            id: "mock_id"
        }),
        set: async (data: any) => console.log(`[MOCK DB] Set doc ${path}:`, data),
        update: async (data: any) => console.log(`[MOCK DB] Update doc ${path}:`, data),
    });

    // Mock Collection Reference
    const mockCollection = (path: string) => ({
        doc: (id?: string) => mockDoc(id || "new_id"),
        add: async (data: any) => {
            console.log(`[MOCK DB] Added to collection ${path}:`, data);
            return { id: "mock_id_" + Date.now() };
        },
        get: async () => ({ empty: true, docs: [] }),
    });

    return {
        collection: mockCollection,
        doc: mockDoc,
    } as any;
};

export const getDb = () => {
    const app = initFirebase();
    if (!app) {
        if (process.env.NODE_ENV === 'production') {
            console.error("CRITICAL: Firebase Admin credentials missing in production. Returning MOCK DB to prevent crash.");
        }
        return createMockDb();
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
