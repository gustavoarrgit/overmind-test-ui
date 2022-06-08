import { Service } from './../service/teste.service';
import { CrawlerDTO } from './../models/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: CrawlerDTO[] ;
  constructor(private http: HttpClient,
    private service: Service) {}

  ngOnInit() {
    this.service.consultar(10).subscribe(retorno => {
      this.movies = retorno;
      console.log(this.movies);
    }, (erro: HttpErrorResponse) => {
    });
  }

}
