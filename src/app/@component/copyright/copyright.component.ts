import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
  template: `<h1>Copyright Component </h1>`
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
