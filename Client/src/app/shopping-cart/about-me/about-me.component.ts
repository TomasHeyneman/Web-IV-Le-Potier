import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  name: string = 'Tom';
  phonenumber: string = '+32x xx xx xx xx';
  email: string = ' tom.s@gmail.com';
  
  constructor() {}

  ngOnInit(): void {}
}
