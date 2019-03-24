import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template:`
  <nav class="navbar navbar-expand-sm bg-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/welcome']">Dee Product Management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/products']">ProductList</a>
      </li>
      
    </ul>
  
  </nav>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  
  `
})
export class AppComponent{
pageTitle:string= 'Dee Product Management'

}