import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';

import{TableDashboard} from '../table/table-dashboard.data';

@Injectable()

export class TableDashboardService{
    baseUrl='http://localhost:8088/';
    pushData='pushData';
    getVehicles='getVehicles';
    updatedData='updatedData';
    url:any;

    constructor(private http: Http){

        }   
        getDashboardDetails(): Observable<TableDashboard[]>{
        this.url=this.baseUrl+this.getVehicles;
        return this.http.get(this.url).map(res => res.json()).catch(this.handleError);
         }

         public handleError(error: Response | any) {
            // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            if (error instanceof Response) {
              const body = error.json() || '';
              const err = body.error || JSON.stringify(body);
              errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
              errMsg = error.message ? error.message : error.toString();
            }
            // console.error(errMsg);
            return Observable.throw(errMsg);
          }
}