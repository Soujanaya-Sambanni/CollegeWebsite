import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { UpdateComponent } from './update/update.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { SupdateComponent } from './supdate/supdate.component';
import { FeesComponent } from './fees/fees.component';
import { FupdateComponent } from './fupdate/fupdate.component';

import { AdmissionComponent } from './admission/admission.component';
import { AupdateComponent } from './aupdate/aupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StaffInfoComponent,
    UpdateComponent,
    StaffInfoComponent,
    SupdateComponent,
    StudentinfoComponent,
    FeesComponent,
    FupdateComponent ,
    AdmissionComponent,
    AupdateComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
