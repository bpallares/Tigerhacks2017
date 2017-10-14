import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyDeOoXMfCIt2-WXJ6mLp3TcCQxcGK-lp38',
  authDomain: 'dictate-244d5.firebaseapp.com',
  databaseURL: 'https://dictate-244d5.firebaseio.com',
  storageBucket: 'dictate-244d5'
}
const fire = firebase.initializeApp(config)
export const db = firebase.database()

export default fire
