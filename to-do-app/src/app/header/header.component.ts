import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todoCount: number = 0;
  ngOnInit(): void {
    this.todoCount = this.todoService.getTodoCount();
    // this.todoCount = this.todoService.getTodos().length;
    this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todoCount = todos.length;
      }
    )
  }

}
