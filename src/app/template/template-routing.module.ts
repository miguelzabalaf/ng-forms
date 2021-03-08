import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'basicos',
        component: BasicosComponent,
        data: {
          title: 'Basicos',
          description: 'Ejemplos de Templates Básicos'
        }
      },
      {
        path: 'dinamicos',
        component: DinamicosComponent,
        data: {
          title: 'Dinamicos',
          description: 'Ejemplos de Templates Dinámicos'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches',
          description: 'Ejemplos de Templates tipo Switches'
         }
        },
      {
        path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
