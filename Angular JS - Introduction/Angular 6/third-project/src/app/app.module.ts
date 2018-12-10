import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViewModule // Module is imported
  ],
  // When we add any service across providers it typically puts
  // the service in a shared path, not restricted across a particular
  // module. So during making of a service it doesn't add itself in any
  // module, remaining independent to be used by any, as a service should
  // work this way. Still it is adviced to put service in that module which
  // it has close ties with. Also the concept of lazy loading works with
  // angular, so be careful about it.
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
