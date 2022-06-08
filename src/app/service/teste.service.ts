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

    return this.http.get<CrawlerDTO[]>(`https://overmind-test-backend.herokuapp.com/crawler-api/crawler/${quantidade}`);
  }



}
