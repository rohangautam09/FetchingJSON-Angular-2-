import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Headers,Http,HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import{FormsModule} from'@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
