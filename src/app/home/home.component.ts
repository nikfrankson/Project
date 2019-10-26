import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  condX = false;
  condY = false;

  r2CondX = false;
  r2CondY = true;

  r3CondX = true;
  r3CondY = false;

  r4CondX = true;
  r4CondY = true;

  constructor() { }

  ngOnInit() {
  }

}
