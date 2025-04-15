import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0acqBb1S12rN5ccLGzJgE2qGxoPvcKaM",
  authDomain: "subsentry-441db.firebaseapp.com",
  projectId: "subsentry-441db",
  storageBucket: "subsentry-441db.firebasestorage.app",
  messagingSenderId: "1011347405679",
  appId: "1:1011347405679:web:25b61f42eea9997ae0869a",
  measurementId: "G-J19FDKXM75"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
