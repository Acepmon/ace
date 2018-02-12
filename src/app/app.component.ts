import { Component } from '@angular/core';
//export const template = require('./app.component.desktop.html');
//export const style = require('./app.component.mobile.css');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor () { }
}
