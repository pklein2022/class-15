import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  @ViewChild('actionInput') actionInputRef: ElementRef;

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
      }

  onAddItem(){
    const todoAction = this.actionInputRef.nativeElement.value;
    const newTodo = new Todo(todoAction);
    this.todoService.addTodo(newTodo);
  }
}
