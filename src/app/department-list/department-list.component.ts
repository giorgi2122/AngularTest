import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
    <ul class="items">
     <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
       <span class="badge">{{department.id}}</span>{{department.name}}
     </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
departments=[
  {"id":1, "name":"name1"},
  {"id":2, "name":"name2"},
  {"id":3, "name":"name3"},
  {"id":4, "name":"name4"},
  {"id":5, "name":"name5"}
];
onSelect(department){

this.router.navigate(['/departments',department.id]);
}
  constructor(private router:Router,private route:ActivatedRoute) { }
public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
  });}
  isSelected(department){
    return department.id=== this.selectedId;
  }
}
