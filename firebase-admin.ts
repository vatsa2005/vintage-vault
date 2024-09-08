import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { FirebaseApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const serviceKey = require("@/service_key.json");

let app: App;

// app = getApps().length === 0 ? initializeApp({credential: cert(serviceKey)}) : getApp();

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
