import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { AppComponent } from './app.component';
import {TableDashboardComponent} from './table/table-dashboard.component';
import {TableDashboardService} from './services/table-dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    TableDashboardComponent,
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    PaginationModule,
    TabsModule,
    CommonModule
  ],
  providers: [TableDashboardService],
  bootstrap: [AppComponent, TableDashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
