import { Component, OnInit } from '@angular/core';
import firebase, { googleProvider } from "../firebase.js";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signIn (){
    firebase.auth().signInWithRedirect(googleProvider);
}
}
