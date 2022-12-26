import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase , get, child, ref as rf} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getDownloadURL, getStorage, ref} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCF7uOMVYoo-e6sZMhbnqNQzlvkHtFCxQE",
    authDomain: "muh-tas-46dc5.firebaseapp.com",
    databaseURL: "https://muh-tas-46dc5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "muh-tas-46dc5",
    storageBucket: "muh-tas-46dc5.appspot.com",
    messagingSenderId: "375996400183",
    appId: "1:375996400183:web:0617d976a14e5ad6a8b5b2"
};



/*firestore rules

rules_version = '2';
service firebase.storage {
    match /b/{bucket}/o {
    match /{allPaths=**} {
        allow read, write: if false;
    }
}
}

 */



/* en yeni eski
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}



 */