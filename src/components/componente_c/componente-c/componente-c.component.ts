import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-c',
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }
  atras(){
    this.nav.navigate([''])
      }
}
