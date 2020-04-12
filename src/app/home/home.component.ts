import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<string> = 
  [
    'assets/img/slide-1.jpg',
    'assets/img/slide-2.jpg'
  ];

  constructor() { }

  ngOnInit(): void { }
}
