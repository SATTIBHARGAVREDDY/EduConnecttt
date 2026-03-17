import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Update paths if your folders differ
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentEditComponent } from './components/studentedit/studentedit.component';
import { TeacherEditComponent } from './components/teacheredit/teacheredit.component';
import { CourseCreateComponent } from './components/coursecreate/coursecreate.component';
import { TeacherCreateComponent } from './components/teachercreate/teachercreate.component';
import { StudentCreateComponent } from './components/studentcreate/studentcreate.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';

const routes: Routes = [
  // DEFAULT route for /#/educonnect
  { path: '', component: DashboardComponent },

  // Common feature routes
  { path: 'student/edit', component: StudentEditComponent },
  { path: 'teacher/edit', component: TeacherEditComponent },
  { path: 'course/create', component: CourseCreateComponent },
  { path: 'teacher/create', component: TeacherCreateComponent },
  { path: 'student/create', component: StudentCreateComponent },
  { path: 'enrollment', component: EnrollmentComponent },

  // Optional catch-all inside feature
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EduconnectRoutingModule {}