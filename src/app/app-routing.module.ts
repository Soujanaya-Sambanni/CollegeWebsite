import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { UpdateComponent } from './update/update.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { SupdateComponent } from './supdate/supdate.component';
import { FeesComponent } from './fees/fees.component';
import { FupdateComponent } from './fupdate/fupdate.component';
import { AdmissionComponent } from './admission/admission.component';
import { AupdateComponent } from './aupdate/aupdate.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'staffInfo',component:StaffInfoComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'studentinfo',component:StudentinfoComponent},
  {path:'supdate/:id',component:SupdateComponent},
  {path:'fees',component:FeesComponent},
  {path:'fupdate/:id',component:FupdateComponent},
  {path:'admission' ,component:AdmissionComponent},
  {path:'aupdate/:id',component:AupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
