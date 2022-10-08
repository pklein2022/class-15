import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosChanged = new EventEmitter<Todo[]>();
  private todos: Todo[] = [
    new Todo("Homework"),
    new Todo("Dishes"),
    new Todo("Clean bathroom"),
  ]

  getTodos() {
    return this.todos.slice();
  }

  getTodoCount() {
    return this.todos.length;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.emit(this.getTodos());
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.emit(this.getTodos());
  }
  constructor() { }
}
