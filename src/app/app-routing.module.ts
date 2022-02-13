import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },
  {path:'', redirectTo:"/profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
