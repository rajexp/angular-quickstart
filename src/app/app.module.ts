import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdCardModule} from '@angular/material';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdCardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
