import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear(); //muestra el año actualizado en el footer
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
