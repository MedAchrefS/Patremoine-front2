import { DirectionsComponent } from './components/directions/directions.component';
import { GradesComponent } from './components/grades/grades.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentDetailComponent } from './components/payment-details/payment-detail/payment-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { RegionsComponent } from './components/regions/regions.component';
import { TypePatrimoinesComponent } from './components/type-patrimoines/type-patrimoines.component';
import { ResidencesComponent } from './components/residences/residences.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'user',component:UserComponent,
    children:[
      {path:'registration',component:RegistrationComponent},
      {path:'login',component:LoginComponent}
    ] },
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {path:'payment',component:PaymentDetailsComponent,canActivate:[AuthGuard]},
    {path:'region',component:RegionsComponent,canActivate:[AuthGuard]},
    {path:'typepatremoine',component:TypePatrimoinesComponent,canActivate:[AuthGuard]},
    {path:'grade',component:GradesComponent,canActivate:[AuthGuard]},
    {path:'direction',component:DirectionsComponent,canActivate:[AuthGuard]},
    {path:'residence',component:ResidencesComponent,canActivate:[AuthGuard]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
