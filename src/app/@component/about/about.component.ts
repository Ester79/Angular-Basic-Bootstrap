import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  template: `<h1>About Component </h1>`
})
export class AboutComponent implements OnInit {

  constructor() {}



  ngOnInit(): void {
  }

}
