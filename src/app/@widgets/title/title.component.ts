import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() dark = false; //selector 'dark' equal to false
  @Input() main = false; //titulo principal <h1>
  color!: string;
  divider!: string;

  constructor() { }

  ngOnInit(): void {
    if(this.dark){ //if dark = true
      this.color = 'text-secondary';
      this.divider = '';
    }else {
      this.color = 'text-white';
      this.divider = 'divider-light';
    }
  }
}
