import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  @Input() index: number = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onDeleteItem(index: number) {
    this.todoService.removeTodo(index);
    
  }


}
