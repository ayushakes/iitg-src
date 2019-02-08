import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { ResearchComponent } from './research/research.component';
import { AcademicsComponent } from './academics/academics.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';

import { WorkComponent } from './work/work.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './people/student/student.component';
import { BatchComponent } from './people/student/batch/batch.component';
import { AlumniComponent } from './people/alumni/alumni.component';
import { StaffComponent } from './people/staff/staff.component';
import { FacultyComponent } from './people/faculty/faculty.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent },
  {path:"admin",component:AdminComponent },
  {path:"people" ,component:PeopleComponent,
  children:[
    {path:"student", component:StudentComponent},
    {path:"faculty", component:FacultyComponent},
    {path:"staff", component:StaffComponent},
    {path:"alumni", component:AlumniComponent},
]},
  {path:"research" ,component:ResearchComponent},
  {path:"academics" ,component:AcademicsComponent},
  {path:"login" ,component:LoginComponent},
  {path:"admin" ,component:AdminComponent},
  {path:"news" ,component:NewsComponent},
  {path:"about" ,component:AboutComponent},
  {path:"work" ,component:WorkComponent},
  {path:"batch/:name" ,component:BatchComponent},
  {path:"adminEdit/:id" ,component:AdminEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
