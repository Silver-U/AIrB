import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  addComment(rate: Comment)
  {
    const comment: Comment = rate
    this.httpClient.post<{ message: string }>("http://localhost:3000/comments", comment)
      .subscribe(res => {
        console.log(res.message)
      })
  }
}
