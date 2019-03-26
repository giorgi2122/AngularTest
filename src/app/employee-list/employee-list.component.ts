import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-employee-list',
  template: `
  <h3>
  Employee List
  </h3>
  <ul class="items">
   <li *ngFor="let employee of employees">
     <span class="badge">{{employee.id}}</span>{{employee.name}}
   </li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees=[
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

      ngOnInit() {
        
      }
}
