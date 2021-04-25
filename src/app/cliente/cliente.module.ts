import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ClienteRoutingModule } from './cliente-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule,
    FormsModule    
  ]
})
export class ClienteModule { }
