import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {AirBnb} from "./models/airbnb";

@Injectable({
  providedIn: 'root'
})
export class AirbnbsService {
  private airbnbs: AirBnb[] = []
  private airbnbsUpdated = new Subject<AirBnb[]>();
  constructor(private httpClient: HttpClient) { }

  getAirBnbs()
  {
    this.httpClient.get<{message: string, airbnbs: AirBnb[]}>("http://localhost:3000/airbnbs")
      .subscribe((postData) =>
      {
        this.airbnbs = postData.airbnbs;
        this.airbnbsUpdated.next([...this.airbnbs])
      })
  }

  getAirbnbsUpdateListiner ()
  {
    return this.airbnbsUpdated.asObservable()
  }
}
