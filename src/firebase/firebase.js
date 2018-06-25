import Rebase from 're-base';
import firebase from 'firebase';

const config = {
        apiKey: "AIzaSyA9BeF1GqiIqEibkuFwWM7YqOvbY2BzQ_c",
        authDomain: "kathrynlovestravis.firebaseapp.com",
        databaseURL: "https://kathrynlovestravis.firebaseio.com",
        projectId: "kathrynlovestravis",
        storageBucket: "kathrynlovestravis.appspot.com",
        messagingSenderId: "41951034827"
      };
 

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export { base }