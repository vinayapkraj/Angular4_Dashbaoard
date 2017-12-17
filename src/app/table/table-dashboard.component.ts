import { Component, OnInit , ViewChild} from '@angular/core';
import { TableDashboard } from './table-dashboard.data';
import {TableDashboardService} from '../services/table-dashboard.service';

declare let EventSource:any;
@Component({
  selector: 'table-dashboard',
  templateUrl: './table-dashboard.component.html'
})
export class TableDashboardComponent implements OnInit {
  public vehicleDetails: TableDashboard[] = new Array<TableDashboard>();
  errorMsg:string;
  temp = [];
  @ViewChild(TableDashboardComponent)table:TableDashboardComponent ;
  
 
  
  public constructor(private tableDashboardService:TableDashboardService) {
    
    
  }

 public getVehicleDetails(){
     this.tableDashboardService.getDashboardDetails().subscribe(
      (data)=>{this.vehicleDetails=data;
        this.temp = [...data];
      },
      error=> this. errorMsg= error
    )
  }
  interval: any;
  public ngOnInit():void {
    this.getVehicleDetails();
    this.interval = setInterval(() => {
    this.getVehicleDetails();},45000);
    // this.onChangeTable(this.config);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return (d.customerName.toLowerCase().indexOf(val) !== -1 || d.vehicleStatus.toLowerCase().indexOf(val) !== -1) || !val;
    });

    // update the rows
    this.vehicleDetails = temp;
   
  }
}
