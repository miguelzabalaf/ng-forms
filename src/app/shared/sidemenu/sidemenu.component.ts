import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
        outline: none;
      }
    `
  ]
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] =[
    {
      text: 'Basicos',
      route: '/template/basicos'
    },
    {
      text: 'Dinamicos',
      route: '/template/dinamicos'
    },
    {
      text: 'Switches',
      route: '/template/switches'
    },
  ];

  reactiveMenu: MenuItem[] =[
    {
      text: 'Basicos',
      route: '/reactive/basicos'
    },
    {
      text: 'Dinamicos',
      route: '/reactive/dinamicos'
    },
    {
      text: 'Switches',
      route: '/reactive/switches'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
