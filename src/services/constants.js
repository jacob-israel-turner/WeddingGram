// import Firebase from 'firebase'
import Firestack from 'react-native-firestack'

const firebaseConfig = {
  apiKey: "AIzaSyCl6iTJgQZN6UjcRDXN071i-5oTHxRfNAI",
  // authDomain: "weddinggram-61568.firebaseapp.com",
  databaseURL: "https://weddinggram-61568.firebaseio.com",
  storageBucket: "weddinggram-61568.appspot.com",
}
// export const firebase = Firebase.initializeApp(firebaseConfig)

export const fireStack = new Firestack(firebaseConfig)
console.log(fireStack)
console.log(Object.keys(fireStack))

// fireStack.configure(firebaseConfig)
//   .catch(e => console.warn(e))

// export const database = firebase.database()

// export const rootRef = database.ref()

// export const storage = firebase.storage()

// export const storeRef = storage.ref()
