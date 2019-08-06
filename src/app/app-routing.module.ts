import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PacienteComponent } from './paciente/paciente.component';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NovaConsultaComponent } from './consulta/nova-consulta/nova-consulta.component';
import { PacienteDetalhadoComponent } from './paciente/paciente-detalhado/paciente-detalhado.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { LembretesComponent } from './lembretes/lembretes.component';
import { NovoLembreteComponent } from './lembretes/novo-lembrete/novo-lembrete.component';
import { MensagemComponent } from './mensagem/mensagem.component';

export const routes : Routes = [
  {path: 'login', component: TelaLoginComponent},
  {path: 'home', component: TelaInicialComponent, children: [
        {path: 'paciente', component: PacienteComponent,  },
        {path: 'dashboard', component: DashboardComponent},
        {path: 'novo-paciente', component: NovoPacienteComponent },
        {path: 'consulta', component: ConsultaComponent},
        {path: 'nova-consulta', component: NovaConsultaComponent},
        {path: 'paciente-detalhado/:id', component: PacienteDetalhadoComponent},
        {path: 'iniciar-avaliacao/:id', component: AvaliacaoComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'lembretes', component: LembretesComponent},
        {path: 'novo-lembrete', component: NovoLembreteComponent},
        {path: 'mensagens/:id', component: MensagemComponent}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

    


