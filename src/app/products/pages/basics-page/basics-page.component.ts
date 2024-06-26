import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'sebastian';
  public nameUpper: string = 'SEBASTIAN';
  public fullName: string = 'sEBasTiAn rEzA';
  public customDate: Date = new Date();
}
