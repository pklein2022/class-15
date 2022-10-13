import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
    this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      }
    )
  }
  onNewTodo() {
    this.router.navigate(['to-do-form'], { relativeTo: this.route });
  }


}
