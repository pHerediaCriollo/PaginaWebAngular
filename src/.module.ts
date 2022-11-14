import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChaoComponent } from './components/components_chao/component-chao/component-chao.component';
import { ComponenteAComponent } from './components/componente_a/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente_b/componente-b/componente-b.component';
import { ComponenteCComponent } from './components/componente_c/componente-c/componente-c.component';
import { ComponenteDComponent } from './components/componente_d/componente-d/componente-d.component';



@NgModule({
  declarations: [ComponentChaoComponent, ComponenteAComponent, ComponenteBComponent, ComponenteCComponent, ComponenteDComponent],
  imports: [
    CommonModule
  ]
})
export class Module { }
