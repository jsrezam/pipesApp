import { Component } from '@angular/core';
import name from '@angular/common/locales/es-EC';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = "Sebastian";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Sebastian', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': `we don't have any clients waiting.`,
    '=1': 'we have one client waiting.',
    '=2': 'we have 2 people waiting.',
    'other': 'we have # clients waiting.',
  }

  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Sebastian',
    age: 34,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log("tap: ", value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in promise');
      console.log('We have data in promise');
      this.person.name = 'Other name'
    }, 3500);
  })
}
