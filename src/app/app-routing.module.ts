import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { TeamComponent } from './components/team/team.component'


const routes: Routes = [{
  path: 'team',
  component: TeamComponent
},
{
  path: 'home',
  component: HomeComponent
},
{ path: '',   redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
