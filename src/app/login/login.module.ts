import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthenticationService} from './authentication.service';
import {HttpModule} from '@angular/http';

@NgModule({
  exports: [AuthenticationComponent],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [AuthenticationService],
  declarations: [AuthenticationComponent]
})
export class LoginModule { }
