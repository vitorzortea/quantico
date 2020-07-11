import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { MenuComponent } from './menu/menu.component';
import { VariaveisComponent } from './variaveis/variaveis.component';

@NgModule({
  declarations: [PanelComponent, MenuComponent, VariaveisComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
