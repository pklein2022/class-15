import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  @ViewChild('actionInput') actionInputRef: ElementRef;

  constructor(private todoService: TodoService, private router: Router) { }


  ngOnInit(): void {
      }

  onAddItem(){
    const todoAction = this.actionInputRef.nativeElement.value;
    const newTodo = new Todo(todoAction, false);
    this.todoService.addTodo(newTodo);
    // Go back to To Do List after adding item
    this.router.navigate(['to-do-list']);
  }
}
