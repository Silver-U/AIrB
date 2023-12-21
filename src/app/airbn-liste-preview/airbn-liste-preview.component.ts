import {Component, OnInit} from '@angular/core';
import {AirbnbsService} from "../airbnbs.service";

@Component({
  selector: 'app-airbn-liste-preview',
  standalone: true,
  imports: [],
  templateUrl: './airbn-liste-preview.component.html',
  styleUrl: './airbn-liste-preview.component.css'
})
export class AirbnListePreviewComponent implements OnInit{

  constructor(private airbnbService: AirbnbsService) {
  }

  ngOnInit(): void {
  }

}
