import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full" },
  //starts up user list automatically when app starts
  { path: "users/list", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
