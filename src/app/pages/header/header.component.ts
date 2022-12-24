import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedNav: string = localStorage.getItem('selectedNav');

  constructor() { }

  ngOnInit(): void {
    this.setDefaultNav();
  }

  setDefaultNav() {
    let selectedNav = localStorage.getItem('selectedNav');
    if (selectedNav) {
      this.selectedNav = selectedNav;
      this.scollToSection(selectedNav);
    } else {
      this.selectedNav = 'header';
      this.scollToSection('header');
    }
  }
  scollToSection(id: string) {
    this.selectedNav = id;
    localStorage.setItem('selectedNav', id);
    let div: any = document.getElementById(id);
    div.scrollIntoView({behavior: 'smooth'});
  }
}
