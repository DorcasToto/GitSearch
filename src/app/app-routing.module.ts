import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProfileComponent} from '../app/profile/profile.component'
import{AboutComponent} from '../app/about/about.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
