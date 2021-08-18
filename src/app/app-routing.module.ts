import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';


const routes: Routes = [
  {
    path:'student/:id',
    component:StudentComponent,
  },
  {path: '', redirectTo: '/student/0', pathMatch: 'full'},
  {
    path:'studentlist',
    component:StudentlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
