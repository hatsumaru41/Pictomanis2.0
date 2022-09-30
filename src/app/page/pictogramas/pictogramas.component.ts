import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictogramas',
  templateUrl: './pictogramas.component.html',
  styleUrls: ['./pictogramas.component.css']
})
export class PictogramasComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
