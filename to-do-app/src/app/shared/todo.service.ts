import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosChanged = new Subject<Todo[]>();
  private todos: Todo[] = [
    new Todo("Homework", false),
    new Todo("Dishes", false),
    new Todo("Clean bathroom", false),
  ]

  getTodos() {
    return this.todos.slice();
  }

  getTodoCount() {
    return this.todos.length;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.getTodos());
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.getTodos());
  }
  todoCompleted(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.getTodos());
  }
  constructor() { }
}
