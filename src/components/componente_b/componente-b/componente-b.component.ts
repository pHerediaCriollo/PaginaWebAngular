import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Navegacion(){
    this.router.navigate([''])
  }
  Navegacion2(){
    this.router.navigate(['web3'])
  }
  Navegacion3(){
    this.router.navigate(['web4'])
  }
  
}
