import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-section',
  templateUrl: './bg-section.component.html',
  styleUrls: ['./bg-section.component.scss']
})
export class BgSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollDiv(id) {
    let div: any = document.getElementById(id);
    div.scrollIntoView({behavior: 'smooth'});
    localStorage.setItem('selectedNav', 'contact');
  }

}
