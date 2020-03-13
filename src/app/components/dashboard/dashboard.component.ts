import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 

  constructor(private router: Router) { this.navLinks = [
    {
        label: 'First',
        link: './Student',
        index: 0
    }, {
        label: 'Second',
        link: './second',
        index: 1
    }, {
        label: 'Third',
        link: './third',
        index: 2
    }, 
];}

ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

 

}
