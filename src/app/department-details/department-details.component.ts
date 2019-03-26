import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-details',
  template: `
  <h2>You selected department with id = {{departmentId}} </h2>

  <p>
  <button (click)="showOverview()">Overview</button>
  <button (click)="showContact()">Contact</button>
  </p>
  <h3>
  Employee List
  </h3>
  <ul class="items">
  <div *ngFor="let employee of employees">
   <li *ngIf="employee.department==departmentId">
     <span class="badge" >{{employee.id}}</span>{{employee.name}}
   </li>
   </div>
  </ul>
  <router-outlet></router-outlet>
 <p>
  <a (click)="goPrev()"> prev </a>
  <a (click)="goNext()"> next </a>
</p>
  <div>
<button (click)="goToDepartments()">Back</button>
</div>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId;
public employees=[
  {"id":1, "name":"emp1", "department": "1"},
  {"id":2, "name":"emp2", "department": "1"},
  {"id":3, "name":"emp3", "department": "2"},
  {"id":4, "name":"emp4", "department": "2"},
  {"id":5, "name":"emp5", "department": "3"},
  {"id":6, "name":"emp6", "department": "3"},
  {"id":7, "name":"emp7", "department": "4"},
  {"id":8, "name":"emp8", "department": "4"},
  {"id":9, "name":"emp9", "department": "5"},
  {"id":10, "name":"emp10", "department": "5"}
];

showOverview(){
this.router.navigate(['overview'],{relativeTo: this.route} );
}
showContact(){

  this.router.navigate(['contact'],{relativeTo: this.route} );
}

  constructor(private route:ActivatedRoute, private router:Router) { }

goToDepartments(){

  let selectedId=this.departmentId ? this.departmentId : null;
  this.router.navigate(['/departments',{id:selectedId}]);
}

  ngOnInit() {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
  //this.departmentId=id;
  this.route.paramMap.subscribe((params: ParamMap) =>{
    let id=parseInt(params.get('id'));
    this.departmentId=id;
  });
}
public nextId;
  goPrev(){
    let prevId=this.departmentId;
    if (this.departmentId>1){
   prevId=this.departmentId-1;
  }
    this.router.navigate(['/departments',prevId]);
  }
  goNext(){
    let nextId=this.departmentId;
    if (this.departmentId<5){
   nextId=this.departmentId+1;
  }
    this.router.navigate(['/departments',nextId]);
  }
}
