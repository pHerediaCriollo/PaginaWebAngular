import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChaoComponent } from './components/components_chao/component-chao/component-chao.component';
import { ComponenteAComponent } from './components/componente_a/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente_b/componente-b/componente-b.component';



@NgModule({
  declarations: [ComponentChaoComponent, ComponenteAComponent, ComponenteBComponent],
  imports: [
    CommonModule
  ]
})
export class Module { }
