import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  template: `<h1>Portfolio Component </h1>`
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
