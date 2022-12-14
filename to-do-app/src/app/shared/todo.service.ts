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
    return this.todos.filter(this.checkNotCompleted).slice();
  }

  getCompletedTodos() {
    return this.todos.filter(this.checkCompleted).slice();
  }

  checkCompleted(todo:Todo){
    return todo.todoCompleted;
  }

  checkNotCompleted(todo: Todo) {
    return !todo.todoCompleted;
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
    let currentTodo = this.todos[index];
    this.todos.splice(index, 1);
    currentTodo.todoCompleted = true;
    this.todos.push(currentTodo);
    this.todosChanged.next(this.getTodos());
  }
  constructor() { }
}
