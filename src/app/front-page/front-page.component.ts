import {Component, OnDestroy, OnInit} from '@angular/core';
import {AirbnbsService} from "../airbnbs.service";
import {AirBnb} from "../models/airbnb";
import {Subscription} from "rxjs";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {

  public airbnbs: AirBnb[] = []
  public airbnbsSub: Subscription
  // public showAirbnb = true
  constructor() {
    // this.init()
  }


  // init()
  // {
  //   this.airbnbService.getAirBnbs()
  //   this.airbnbsSub = this.airbnbService.getAirbnbsUpdateListiner()
  //     .subscribe((airbnbs: AirBnb[]) =>
  //     {
  //       this.airbnbs = airbnbs
  //       console.log(this.airbnbs)
  //     })
  // }
  // searchAirBnbs()
  // {
  //   this.init()
  //
  // }
// Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7TJeZ3N9UoBVUVFXG2oVpLLJcJ1PVZOc",
  authDomain: "mongo-13078.firebaseapp.com",
  projectId: "mongo-13078",
  storageBucket: "mongo-13078.appspot.com",
  messagingSenderId: "313684508067",
  appId: "1:313684508067:web:9e911b68eae273c55fae16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  ngOnDestroy(): void {
    this.airbnbsSub.unsubscribe()
  }
}
