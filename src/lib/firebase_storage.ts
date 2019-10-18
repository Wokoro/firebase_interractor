import dotenv from 'dotenv';
import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from '../config/storage';

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert(<ServiceAccount>serviceAccount),
    databaseURL: process.env.DATABASE_URL
  });

const db = admin.database();
const dbRef = db.ref('movies');

export default dbRef;