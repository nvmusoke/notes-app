import firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyA5G-LRK_AYN1YgkPBB14BHkmaWTXMHcvQ",
//   authDomain: "notesapp-edb56.firebaseapp.com",
//   databaseURL: "https://notesapp-edb56.firebaseio.com",
//   storageBucket: "notesapp-edb56.appspot.com",
//   messagingSenderId: "738595798927"
// };
const config = {
  apiKey: process.env.REACT_APP_FB_AUTH_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID
};
console.log('key: ',process.env.FIREBASE_AUTH_KEY);
// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This will extract them into an array
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

export { firebase };
export { firebaseListToArray };
