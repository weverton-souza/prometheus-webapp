import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
  id: String,
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {id: '_tutorhome', path: '/tutor/home', title: 'Home', icon: 'home', class: ''},
  {id: '_tutortasks', path: '/tutor/tasks', title: 'Tasks', icon: 'import_contacts', class: ''},
];

declare const $: any;

@Component({
  selector: 'caltech-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  activeSideBar(menuItemId: String) {
    $(`#${menuItemId}`).addClass('active');
    ROUTES
    .filter(route => route.id !== menuItemId)
    .map(route => {
      $(`#${route.id}`).removeClass('active')
    })
  }
}
