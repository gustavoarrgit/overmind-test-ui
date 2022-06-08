import { Service } from './../service/teste.service';
import { CrawlerDTO } from './../models/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: CrawlerDTO[] ;
  cols: any[];
  _selectedColumns: any[];
  constructor(private http: HttpClient,
    private service: Service) {}

  ngOnInit() {
   
    this.cols = [
      { field: 'position', header: 'Position' },
      { field: 'title', header: 'Title' },
      { field: 'rating', header: 'Rating' },
      { field: 'director', header: 'Rating' },
      { field: 'casting', header: 'Casting' },
      { field: 'comment', header: 'Comment' },
  ];
    this.service.consultar(10).subscribe(retorno => {
      this.movies = retorno;
      this._selectedColumns = this.cols;
    }, (erro: HttpErrorResponse) => {
    });
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
}

set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
}
}
