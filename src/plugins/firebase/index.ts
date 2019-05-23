import * as firebase from 'firebase/app';
export default class FirebaseApp {
  public static install() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIRE_KEY || '',
      authDomain: 'gci-lab.firebaseapp.com',
      databaseURL: 'https://gci-lab.firebaseio.com',
      projectId: 'gci-lab',
      storageBucket: 'gci-lab.appspot.com',
      messagingSenderId: '345320856665',
      appId: '1:345320856665:web:3004881330947564',
    };

    firebase.initializeApp(firebaseConfig);
  }
}
