
import { AppointmentComponent } from './layout/pages/appointment/appointment.component';
import { ContactUsComponent } from './layout/pages/contact-us/contact-us.component';
import { ReSearchComponent } from './layout/pages/re-search/re-search.component';
 import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { CareersComponent } from './layout/pages/careers/careers.component';
import { CommitmentComponent } from './layout/pages/commitment/commitment.component';
import { SignupComponent } from './layout/pages/signup/signup.component';
import { MedicinsComponent } from './layout/pages/medicins/medicins.component';
import { ForgotPasswordComponent } from './layout/additions/forgot-password/forgot-password.component';
import { ResetPassComponent } from './layout/additions/reset-pass/reset-pass.component';

export const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'home' , component: HomeComponent   },
  {path: 'login' , component: LoginComponent },
  {path: 'signup' , component: SignupComponent },
  {path: 'Appointment' , component: AppointmentComponent },
  {path: 'Medicines' , component: MedicinsComponent   },
  {path: 'Research' , component: ReSearchComponent },
  {path: 'Careers' , component: CareersComponent  },
  {path: 'Commitment' , component: CommitmentComponent  },
  {path: 'Contact_Us' , component: ContactUsComponent },
  {path: 'ForgotPassword' , component: ForgotPasswordComponent  },
  {path: 'resetPass' , component:ResetPassComponent},
   

];