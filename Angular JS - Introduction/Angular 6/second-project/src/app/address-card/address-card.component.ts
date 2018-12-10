import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.mode';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  //user: any;
  @Input('user') user: User;
  isCollapsed: boolean = true;


  constructor() {
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }
  /**
   * Called when the app is fully initialized.
   * 
   * So coding user inside the constructor doesn't fetch value
   * for name.
   */
  ngOnInit() {
    /*
    this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone
    };
    */
  }

}
