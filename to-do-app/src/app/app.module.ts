import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do-list/to-do/to-do.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletedListComponent } from './completed-list/completed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoComponent,
    ToDoFormComponent,
    HeaderComponent,
    CompletedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
