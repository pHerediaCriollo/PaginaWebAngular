import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-d',
  templateUrl: './componente-d.component.html',
  styleUrls: ['./componente-d.component.css']
})
export class ComponenteDComponent implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }
  Navegacion(){
    this.nav.navigate([''])
  }
  Navegacion2(){
    this.nav.navigate(['web2'])
  }
  Navegacion3(){
    this.nav.navigate(['web3'])
  }
}
