import { BrowserModule , Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import {LayoutModule} from './layout/layout.module';


const appRoutes: Routes =  [
      {
        path : '',
        redirectTo:'login',
        pathMatch:'full',
      },
      {
        path : '*',
        component: PagenotfoundComponent
      },
      {
        path : 'login',
        component: LoginComponent
      },
      {
        path : 'register',
        component: RegisterComponent
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
];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AuthGuard,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
