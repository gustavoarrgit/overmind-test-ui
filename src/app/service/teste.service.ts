import { CrawlerDTO } from './../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(protected http: HttpClient) {

  }

  consultar(quantidade: number): Observable<CrawlerDTO[]> {

    return this.http.get<CrawlerDTO[]>(`http://localhost:8080/crawler/${quantidade}`);
  }



}
