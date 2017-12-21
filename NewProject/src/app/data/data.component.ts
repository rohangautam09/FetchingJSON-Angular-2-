import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ServiceTest} from './Dataservice'
import {ModelTest} from './Model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[ServiceTest]
})
export class DataComponent implements OnInit {

  constructor(private ss:ServiceTest) { }

  ngOnInit() 
  {}  
   
  test:boolean=false;
  a:ModelTest;
  getjson(){
    this.test=true;
    return this.ss.getdetail().subscribe(t=>{this.a=(t)});
  }
hide(){
  this.test=false;
}

// submit(r){
//   console.log(r.firstname);
//   console.log(r.sur);
//   return this.ss.postdetail(r).subscribe(t=>console.log(t));
// }


}
