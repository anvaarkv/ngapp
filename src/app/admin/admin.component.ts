import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //private url: any = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  private url: any = 'http://127.0.0.1/l5/public/api/articles';
  private articles: string; meta: string; links: string;
  constructor(private router: Router , private http: HttpClient) { }

  ngOnInit() {
    //debugger
    this.http.get<any>(this.url)
    .subscribe(response => {
      //console.log(response);
      this.articles = response.data;
      this.meta = response.meta;
      this.links = response.links;
    });
  }

  navigation(url){
    this.http.get<any>(url)
    .subscribe(response => {
      //console.log(response);
      this.articles = response.data;
      this.meta = response.meta;
      this.links = response.links;
    });
  }
  fetchArticles(){
    this.http.get<any>(this.url)
    .subscribe(response => {
      //console.log(response);
      this.articles = response.data;
      this.meta = response.meta;
      this.links = response.links;
    });
  }

  logout(){
    alert('Logout');
    
    localStorage.removeItem('loggedIn');
    this.router.navigate(['login']);
  }

}
