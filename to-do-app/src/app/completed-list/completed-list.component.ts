import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getCompletedTodos();
    this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      }
    )

  }
  onNewTodo() {
    this.router.navigate(['completed-list'], { relativeTo: this.route });
  }
}
