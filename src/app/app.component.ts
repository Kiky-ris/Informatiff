import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'informatiff';

  constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyCQTzVCMa83b4_GHqqfakJeISOyt3vYODc",
    authDomain: "my-first-app-ffb08.firebaseapp.com",
    databaseURL: "https://my-first-app-ffb08-default-rtdb.firebaseio.com",
    projectId: "my-first-app-ffb08",
    storageBucket: "my-first-app-ffb08.appspot.com",
    messagingSenderId: "791558001383",
    appId: "1:791558001383:web:bf294f2d3aa93c72638842",
    measurementId: "G-E79QCFXR1Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

}
