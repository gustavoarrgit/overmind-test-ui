import { Component, OnInit } from '@angular/core';
import { Service } from '../service/teste.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor(
    private service: Service,
  ) { }

  ngOnInit(): void {
  }



}
