import { Component } from '@angular/core';
import { User } from './address-card/user.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'second-project';
  user: User;
  inputText: string="Initial Value";
  constructor(){
    this.user = new User();
    this.user.name='Bibhuti Bhusan Panda';
    this.user.designation='Associate Application Developer';
    this.user.address='130-A Saradhabali 1st Lane, Near Bijay Tower-2, Berhampur-10, Odisha';
    this.user.phone=[
      '8895954926',
      '8119061109'
    ]
  }
}
