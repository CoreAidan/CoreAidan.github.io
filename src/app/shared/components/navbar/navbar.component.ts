import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  show: boolean = false;
  collapsed: boolean = true;
  collapsing: boolean = false;
  willBeCollapsing: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleCollapse(): void {
    this.willBeCollapsing = true;
    
    setTimeout(() => {
      this.show = false;
      setTimeout(() => {
        this.collapsing = true;
        setTimeout(() => {
          this.collapsed = !this.collapsed;
          this.collapsing = false; 
          this.willBeCollapsing = false;
          this.show = !this.collapsed;
        }, 100);
      }, 30);
    }, 30);
  }
}
