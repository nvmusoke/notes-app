import firebase from 'firebase';

const config = {
  apiKey: process.env.FB_AUTH_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
};

// Firebase instance
const firebaseApp = firebase.initializeApp(config);

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

export { firebaseApp as firebase };
export { firebaseListToArray };
