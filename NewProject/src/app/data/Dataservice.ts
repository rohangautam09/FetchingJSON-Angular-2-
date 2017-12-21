import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//for mapping
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';// for exception

import  {ModelTest} from './Model';

@Injectable()
export class ServiceTest{
    
    constructor(private http:Http){}


    private url='./assets/data.json';

    getdetail():Observable<ModelTest>
    {
        return this.http.get(this.url).map(response=>response.json());
    }
  
    postdetail(q):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let options =new RequestOptions({headers:headers});
        return this.http.post("http://localhost:8080/post",JSON.stringify(q),options)
    }


}