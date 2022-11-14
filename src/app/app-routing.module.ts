import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from 'src/components/componente_a/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/components/componente_b/componente-b/componente-b.component';
import { ComponenteCComponent } from 'src/components/componente_c/componente-c/componente-c.component';
import { ComponenteDComponent } from 'src/components/componente_d/componente-d/componente-d.component';


const routes: Routes = [
  {
    path: '', component: ComponenteAComponent
  },
  {
    path: 'web2', component:ComponenteBComponent
  },
  {
    path: 'web3', component:ComponenteCComponent
  },
  {
    path: 'web4', component:ComponenteDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
