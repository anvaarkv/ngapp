import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import {AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component: LoginComponent
      },
      {
        path : 'home',
        component: AppComponent
      },
      {
        path : 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path : 'courses',
        component: CoursesComponent
      }
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
