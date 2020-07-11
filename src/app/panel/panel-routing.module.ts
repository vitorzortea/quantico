import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { VariaveisComponent } from './variaveis/variaveis.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'variaveis'
  },
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: 'variaveis', component: VariaveisComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
