import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: `<h1>Footer Component </h1>`

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
