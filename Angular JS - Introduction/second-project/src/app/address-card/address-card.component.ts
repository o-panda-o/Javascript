import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string;

  constructor() {
  }

  /**
   * Called when the app is fully initialized.
   * 
   * So coding user inside the constructor doesn't fetch value
   * for name.
   */
  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'Application Devleoper 1',
      address: '130-A Saradhabali 1st Lane, Near Bijay Tower-2, Berhampur-10',
      phone:[
        '+918895954926',
        '+918119061109',
        '+918763777451'
      ]
    };
  }

}
