import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { embeddedViewEnd } from '@angular/core/src/render3';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {
    path:'departments/:id', 
    component: DepartmentDetailsComponent,
    children: [
      {path:'overview', component: DepartmentOverviewComponent},
      {path:'contact', component: DepartmentContactComponent}
    ]
  },
  {path:'employees', component: EmployeeListComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  DepartmentDetailsComponent,
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
];
  export const employees=[
    {"id":1, "name":"emp1", "department": "name1"},
    {"id":2, "name":"emp2", "department": "name1"},
    {"id":3, "name":"emp3", "department": "name2"},
    {"id":4, "name":"emp4", "department": "name2"},
    {"id":5, "name":"emp5", "department": "name3"},
    {"id":6, "name":"emp6", "department": "name3"},
    {"id":7, "name":"emp7", "department": "name4"},
    {"id":8, "name":"emp8", "department": "name4"},
    {"id":9, "name":"emp9", "department": "name5"},
    {"id":10, "name":"emp10", "department": "name5"}
  ];
  export const departments=[
    {"id":1, "name":"name1"},
    {"id":2, "name":"name2"},
    {"id":3, "name":"name3"},
    {"id":4, "name":"name4"},
    {"id":5, "name":"name5"}
  ];