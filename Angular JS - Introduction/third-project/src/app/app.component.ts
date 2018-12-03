import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // I need `TestService`(Dependency Injection)
  constructor(private svc: TestService,private http: HttpClient){
    // Not a good way to call services
    // let svc=new TestService();
    this.svc.printToConsole("Got the service");
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/o-panda-o');
    obs.subscribe((response) => console.log(response));
    // Observable - powerful than Promises

  }
}
