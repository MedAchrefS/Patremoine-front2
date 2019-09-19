import { DelegationService } from './shared/delegation.service';
import { ArrandissementService } from './shared/arrandissement.service';
import { DirectionService } from './shared/direction.service';
import { PaymentDetailService } from './shared/payment-detail.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import{ReactiveFormsModule,FormsModule }from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentDetailComponent } from './components/payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './components/payment-details/payment-detail-list/payment-detail-list.component';
import { RegionsComponent } from './components/regions/regions.component';
import { RegionComponent } from './components/Regions/region/region.component';
import { RegionListComponent } from './components/Regions/region-list/region-list.component';
import { RegionService } from './shared/region.service';
import { TypePatrimoinesComponent } from './components/type-patrimoines/type-patrimoines.component';
import { TypePatrimoineComponent } from './components/type-patrimoines/type-patrimoine/type-patrimoine.component';
import { TypePatrimoineListComponent } from './components/type-patrimoines/type-patrimoine-list/type-patrimoine-list.component';
import { TypePatrimoineService } from './shared/type-patrimoine.service';
import { GradesComponent } from './components/grades/grades.component';
import { GradeComponent } from './components/Grades/grade/grade.component';
import { GradeListComponent } from './components/Grades/grade-list/grade-list.component';
import { GradeService } from './shared/grade.service';
import { DirectionsComponent } from './components/directions/directions.component';
import { DirectionComponent } from './components/Directions/direction/direction.component';
import { DirectionListComponent } from './components/Directions/direction-list/direction-list.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { ResidenceComponent } from './components/Residences/residence/residence.component';
import { ResidenceListComponent } from './components/Residences/residence-list/residence-list.component';
import { ResidenceService } from './shared/residence.service';
import { PatremoinesComponent } from './components/patremoines/patremoines.component';
import { PatremoineComponent } from './components/Patremoines/patremoine/patremoine.component';
import { PatremoineListComponent } from './components/Patremoines/patremoine-list/patremoine-list.component';
import { PatremoineService } from './shared/patremoine.service';
import { ArrandissementsComponent } from './components/arrandissements/arrandissements.component';
import { ArrandissementComponent } from './components/Arrandissements/arrandissement/arrandissement.component';
import { ArrandissementListComponent } from './components/Arrandissements/arrandissement-list/arrandissement-list.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { DelegationComponent } from './components/Delegations/delegation/delegation.component';
import { DelegationListComponent } from './components/Delegations/delegation-list/delegation-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    RegionsComponent,
    RegionComponent,
    RegionListComponent,
    TypePatrimoinesComponent,
    TypePatrimoineComponent,
    TypePatrimoineListComponent,
    GradesComponent,
    GradeComponent,
    GradeListComponent,
    DirectionsComponent,
    DirectionComponent,
    DirectionListComponent,
    ResidencesComponent,
    ResidenceComponent,
    ResidenceListComponent,
    PatremoinesComponent,
    PatremoineComponent,
    PatremoineListComponent,
    ArrandissementsComponent,
    ArrandissementComponent,
    ArrandissementListComponent,
    DelegationsComponent,
    DelegationComponent,
    DelegationListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [
    UserService,
    PaymentDetailService,
    RegionService,
    TypePatrimoineService,
    GradeService,
    DirectionService,
    ResidenceService,
    PatremoineService,
    ArrandissementService,
    DelegationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
