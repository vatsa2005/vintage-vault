import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";

import { getFirestore } from "firebase/firestore";

// const serviceKey = require("@/service_key.json");

// let app: App;

// // app = getApps().length === 0 ? initializeApp({credential: cert(serviceKey)}) : getApp();

// if (getApps().length === 0) {
//   app = initializeApp({
//     credential: cert(serviceKey),
//   });
// } else {
//   app = getApp();
// }

// const adminDb = getFirestore(app);

// export { app as adminApp, adminDb };

var admin = require("firebase-admin");

var serviceAccount = require("@/service_key.json");

if (getApps().length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  admin = getApp();
}

const adminDb = getFirestore(admin);

export { admin as adminApp, adminDb };
