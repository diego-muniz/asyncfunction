import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing QueryBuilderModule from ej2-angular-querybuilder package.
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, QueryBuilderModule ], // Declaration of QueryBuilder module into NgModule.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
