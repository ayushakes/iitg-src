import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { ResearchComponent } from './research/research.component';
import { AcademicsComponent } from './academics/academics.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BackDirective} from './back.directive';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

import { WorkComponent } from './work/work.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { BootstrapModule } from './bootstrap.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './people/student/student.component';
import { BatchComponent } from './people/student/batch/batch.component';
import { StudentService } from './people/student/student.service';
import { FacultyComponent } from './people/faculty/faculty.component';
import { AlumniComponent } from './people/alumni/alumni.component';
import { StaffComponent } from './people/staff/staff.component';
import { CommonModule } from '@angular/common';
import { CommonService } from './shared/common.service';
import { AdminEditComponent } from './admin-edit/admin-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PeopleComponent,
    ResearchComponent,
    AcademicsComponent,
    BackDirective,
    AdminComponent,
    
    WorkComponent,
    NewsComponent,
    AboutComponent,
    StudentComponent,
    BatchComponent,
    FacultyComponent,
    AlumniComponent,
    StaffComponent,
    AdminEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    BootstrapModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [StudentService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
