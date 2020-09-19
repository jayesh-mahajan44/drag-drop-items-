import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent },
   
  {path:'list',component:ListComponent},
  { path: "",redirectTo:'login',pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
