import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { CompletedListComponent } from './completed-list/completed-list.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/to-do-list', pathMatch: 'full'
  },
  {
    path: 'to-do-list', component: ToDoListComponent, children: [
      { path: 'to-do-form', component: ToDoFormComponent },
    ]
  },
  {
    path: 'completed-list', component: CompletedListComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
