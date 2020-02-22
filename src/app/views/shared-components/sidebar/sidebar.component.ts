import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
  id: String,
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {id: '_sendmessage', path: '/send-message', title: 'Enviar Mensagem', icon: 'question_answer', class: ''},
  {id: '_dashboard', path: '/', title: 'Dashboard', icon: 'dashboard', class: ''},
  {id: '_tasks', path: '/tasks', title: 'Missões', icon: 'assignment_turned_in', class: ''}
];
declare const $: any;

@Component({
  selector: 'caltech-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
    
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
